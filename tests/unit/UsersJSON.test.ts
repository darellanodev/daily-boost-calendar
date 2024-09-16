import { UsersJSON } from '../../src/models/UsersJSON'
import { User } from '../../src/models/User'

test('create the json, when the users is "[]", returns the expected json', () => {
  const currentUsers = '[]'

  const calendars = []
  const userId = 152
  const user = new User('john', 'myPass', userId, calendars)
  const usersJSON = new UsersJSON(currentUsers)

  const result = usersJSON.create(user.json)

  const expected = `[{"username": "john", "password": "myPass", "id": 152, "calendars": []}]`
  expect(result).toBe(expected)
})

test('create the json, when there is one user, returns the expected json', () => {
  const currentUsers =
    '[{"username": "mary", "password": "maryPass", "id": 28, "calendars": []}]'

  const calendars = []
  const userId = 152
  const user = new User('john', 'myPass', userId, calendars)
  const usersJSON = new UsersJSON(currentUsers)

  const result = usersJSON.create(user.json)

  const expected = `[{"username": "mary", "password": "maryPass", "id": 28, "calendars": []},{"username": "john", "password": "myPass", "id": 152, "calendars": []}]`
  expect(result).toBe(expected)
})

test('exists, when the new user has a username that already exists in the user database, returns true', () => {
  const currentUsers =
    '[{"username": "mary", "password": "maryPass", "id": 28, "calendars": []}]'

  const calendars = []
  const userId = 152
  const newUsername = 'mary'
  const user = new User(newUsername, 'myPass', userId, calendars)
  const usersJSON = new UsersJSON(currentUsers)

  const result = usersJSON.exists(newUsername)

  expect(result).toBeTruthy()
})

test('exists, when the new user has a username that does not exists yet in the database, returns true', () => {
  const currentUsers =
    '[{"username": "mary", "password": "maryPass", "id": 28, "calendars": []}]'

  const calendars = []
  const userId = 152
  const newUsername = 'john'
  const user = new User(newUsername, 'myPass', userId, calendars)
  const usersJSON = new UsersJSON(currentUsers)

  const result = usersJSON.exists(newUsername)

  expect(result).toBeFalsy()
})
