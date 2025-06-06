import { UsersManager } from '../../src/models/UsersManager'
import { User } from '../../src/models/User'
import { test, expect } from 'vitest'

const getNewUser = () => {
  const calendars = []
  const userId = 152
  return new User('john', 'myPass', userId, calendars)
}

test('create the json, when the users is "[]", returns the expected json', () => {
  const currentUsers = '[]'

  const usersManager = new UsersManager(currentUsers)
  const user = getNewUser()
  const result = usersManager.create(user.json)

  const expected = `[{"username": "john", "password": "myPass", "id": 152, "calendars": []}]`
  expect(result).toBe(expected)
})

test('create the json, when there is one user, returns the expected json', () => {
  const currentUsers =
    '[{"username": "mary", "password": "maryPass", "id": 28, "calendars": []}]'

  const usersManager = new UsersManager(currentUsers)
  const user = getNewUser()
  const result = usersManager.create(user.json)

  const expected = `[{"username": "mary", "password": "maryPass", "id": 28, "calendars": []},{"username": "john", "password": "myPass", "id": 152, "calendars": []}]`
  expect(result).toBe(expected)
})

test('exists, when the new user has a username that already exists in the user database, returns true', () => {
  const currentUsers =
    '[{"username": "john", "password": "maryPass", "id": 28, "calendars": []}]'

  const usersManager = new UsersManager(currentUsers)
  const result = usersManager.exists('john')

  expect(result).toBeTruthy()
})

test('exists, when the new user has a username that does not exists yet in the database, returns true', () => {
  const currentUsers =
    '[{"username": "john", "password": "maryPass", "id": 28, "calendars": []}]'

  const usersManager = new UsersManager(currentUsers)
  const result = usersManager.exists('mary')

  expect(result).toBeFalsy()
})
