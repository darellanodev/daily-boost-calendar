import { ActiveDays } from "./ActiveDays.js"
import { Day } from "./Day.js"

export class Calendar {
  #days: Day[] = []
  #rowsElement: HTMLElement
  #totalContributionsElement: HTMLElement
  #activeDays: ActiveDays

  constructor(htmlElements: htmlElements, days: Day[], activeDays: ActiveDays) {
    this.#days = days
    this.#rowsElement = htmlElements.rowsElement
    this.#totalContributionsElement = htmlElements.totalContributionsElement
    this.#activeDays = activeDays
  }

  calculateTotalContributions() {
    let total = 0
    for (const day of this.#days) {
      if (this.#activeDays.isActiveDay(day)) {
        total++
      }
    }
    return total
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
