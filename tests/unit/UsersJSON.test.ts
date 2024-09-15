import { UsersJSON } from '../../src/models/UsersJSON'
import { User } from '../../src/models/User'

test('create the json, when the users is "[]", returns the expected json', () => {
  const calendars = []
  const userId = 152

  const user = new User('john', 'myPass', userId, calendars)
  const usersJSON = new UsersJSON('[]')

  const result = usersJSON.create(user.json)

  const expected = `[{"username": "john", "password": "myPass", "id": 152, "calendars": []}]`
  expect(result).toBe(expected)
})
