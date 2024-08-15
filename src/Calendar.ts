import { ActiveDays } from "./ActiveDays.js"
import { Day } from "./Day.js"

export class Calendar {
  #days: Day[] = []
  #rowsElement: HTMLElement
  #activeDays: ActiveDays

  constructor(
    rowsElement: HTMLElement | null,
    days: Day[],
    activeDays: ActiveDays,
  ) {
    this.#days = days
    if (rowsElement === null) {
      throw new Error("rowsElement is null")
    }
    this.#rowsElement = rowsElement
    this.#activeDays = activeDays
  }

  createDays() {
    console.log("creating days")
    let i = 0
    for (const day of this.#days) {
      i++
      const dayElement = document.createElement("div")
      dayElement.className = "day off"
      if (this.#activeDays.isActiveDay(day)) {
        dayElement.className = "day on"
      }
      dayElement.innerHTML = day.label
      this.#rowsElement.appendChild(dayElement)
    }
  }
}
