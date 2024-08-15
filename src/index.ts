import { Calendar } from "./Calendar.js"
import { DatesProvider } from "./DatesProvider.js"
import { Day } from "./Day.js"

document.addEventListener("DOMContentLoaded", () => {
  const rowsElement: HTMLElement | null = document.querySelector("#rows")

  const totalWeeks = 4
  const datesProvider = new DatesProvider(totalWeeks)
  const dates = datesProvider.getDates()

  // example days
  const days: Day[] = []

  for (const date of dates) {
    days.push(new Day(date))
  }

  const calendar = new Calendar(rowsElement, days)
  calendar.createDays()
})
