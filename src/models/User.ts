import { CalendarItem } from './CalendarItem'

export class User {
  #username: string
  #password: string
  #id: number
  #calendars: CalendarItem[]
  constructor(
    username: string,
    password: string,
    id: number,
    calendars: CalendarItem[] = [],
  ) {
    this.#username = username
    this.#password = password
    this.#id = id
    this.#calendars = calendars
  }
  get json(): string {
    let calendarsJson = ''
    for (const calendar of this.#calendars) {
      calendarsJson += calendar.json + ','
    }
    calendarsJson = calendarsJson.slice(0, -1)
    calendarsJson = '[' + calendarsJson + ']'

    let result =
      '{"username": "' +
      this.#username +
      '", "password": "' +
      this.#password +
      '", "id": ' +
      this.#id +
      ', ' +
      '"calendars": ' +
      calendarsJson +
      '}'

    return result
  }
}
