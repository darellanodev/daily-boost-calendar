import { CalendarItem } from './CalendarItem'
import { User } from './User'

export class UsersManager {
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

  getCalendars(username: string): CalendarItem[] {
    if (this.#initialUsers === null || this.#initialUsers === '') {
      return []
    }

    const users = JSON.parse(this.#initialUsers)

    if (users.length === 0) {
      return []
    }

    for (let user of users) {
      if (user.username === username) {
        return user.calendars
      }
    }

    return []
  }
}
