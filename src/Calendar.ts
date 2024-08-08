import { Day } from "./Day.js"

export class Calendar {
  #days: Day[] = []
  #rowsElement: HTMLElement

  constructor(rowsElement: HTMLElement | null, days: Day[]) {
    this.#days = days
    if (rowsElement === null) {
      throw new Error("rowsElement is null")
    }
    this.#rowsElement = rowsElement
  }

  createDays() {
    console.log("creating days")
    let i = 0
    for (const day of this.#days) {
      i++
      const dayElement = document.createElement("div")
      dayElement.className = "day off"
      if (i % 20 === 0) {
        dayElement.className = "day on"
      }
      dayElement.innerHTML = i.toString()
      this.#rowsElement.appendChild(dayElement)
    }
  }
}
