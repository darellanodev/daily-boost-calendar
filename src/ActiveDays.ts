import { Day } from "./Day"

export class ActiveDays {
  #activeDays: string[]
  constructor(activeDays: string[]) {
    this.#activeDays = activeDays
  }
  isActiveDay(day: Day): boolean {
    return this.#activeDays.includes(day.label)
  }
}
