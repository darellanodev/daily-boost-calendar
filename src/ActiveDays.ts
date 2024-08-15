import { Day } from "./Day"

export class ActiveDays {
  #activeDays: string[]
  constructor(activeDays: string[]) {
    this.#activeDays = activeDays
  }
  isActiveDay(day: Day): boolean {
    const found = this.#activeDays.find((element) => element === day.label)
    const result = found !== undefined ? true : false
    return result
  }
}
