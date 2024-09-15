import { Calendar } from './Calendar'
import { User } from './User'

export class UsersJSON {
  #initialUsers: string | null
  constructor(initialUsers: string | null) {
    this.#initialUsers = initialUsers
  }
  create(userJSON: string): string {
    let users = '[]'
    if (this.#initialUsers === null) {
      users = '[]'
    }

    let finalUsersJSON = ''
    if (users === '[]') {
      finalUsersJSON = '[' + userJSON + ']'
    }

    return finalUsersJSON
  }
}
