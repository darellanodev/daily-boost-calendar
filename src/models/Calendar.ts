import { ActiveDays } from './ActiveDays'

export class Calendar {
  #title: string
  #activeDays: ActiveDays
  constructor(title: string, activeDays: ActiveDays) {
    this.#title = title
    this.#activeDays = activeDays
  }
  // todo: make activeDays an Object
  #jsonActiveDays() {}
  get json(): string {
    return (
      '{"title": "' +
      this.#title +
      '", "activeDays": ' +
      this.#activeDays.json +
      '}'
    )
  }
}
