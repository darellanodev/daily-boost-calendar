import { Calendar } from './Calendar'
import { User } from './User'

export class UsersJSON {
  #initialUsers: string | null
  constructor(initialUsers: string | null) {
    this.#initialUsers = initialUsers
  }
  create(userJSON: string): string {
    let users = this.#initialUsers
    if (users === null) {
      users = '[]'
    }

    let finalUsersJSON = ''

    if (users === '[]') {
      finalUsersJSON = '[' + userJSON + ']'
    } else {
      if (JSON.parse(users).length > 0) {
        finalUsersJSON = users.slice(0, -2) + '},' + userJSON + ']'
      } else {
        finalUsersJSON = '[' + userJSON + ']'
      }
    }

    return finalUsersJSON
  }
}
