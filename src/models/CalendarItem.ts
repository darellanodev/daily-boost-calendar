import { ActiveDays } from './ActiveDays'

export class CalendarItem {
  #title: string
  #activeDays: ActiveDays
  #id: number
  constructor(title: string, activeDays: ActiveDays, id: number) {
    this.#title = title
    this.#activeDays = activeDays
    this.#id = id
  }
  get json(): string {
    return (
      '{"title": "' +
      this.#title +
      '", "activeDays": ' +
      this.#activeDays.json +
      ', "id": ' +
      this.#id +
      '}'
    )
  }

  get title(): string {
    return this.#title
  }

  get activeDays(): ActiveDays {
    return this.#activeDays
  }

  get id(): number {
    return this.#id
  }
}
