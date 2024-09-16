import { Calendar } from './Calendar'
import { User } from './User'

export class UsersJSON {
  #initialUsers: string | null
  constructor(initialUsers: string | null) {
    this.#initialUsers = initialUsers
  }
  create(userJSON: string): string {
    let users = this.#initialUsers
    if (users === null || users === '') {
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
  exists(username: string): boolean {
    if (this.#initialUsers === null || this.#initialUsers === '') {
      return false
    }

    const users = JSON.parse(this.#initialUsers)

    if (users.length === 0) {
      return false
    }

    for (let user of users) {
      if (user.username === username) {
        return true
      }
    }
    return false
  }
}
