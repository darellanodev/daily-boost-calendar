import { ActiveDays } from "./ActiveDays.js"
import { Calendar } from "./Calendar.js"
import { DatesProvider } from "./DatesProvider.js"
import { Day } from "./Day.js"

document.addEventListener("DOMContentLoaded", () => {
  const rowsElement: HTMLElement | null = document.querySelector("#rows")

  const totalWeeks = 4
  const datesProvider = new DatesProvider(totalWeeks)
  datesProvider.calculate()
  const dates = datesProvider.dates

  const activeDaysList = [
    "06/08/2024",
    "07/08/2024",
    "09/08/2024",
    "11/08/2024",
    "13/08/2024",
    "14/08/2024",
    "16/08/2024",
    "18/08/2024",
  ]
  const activeDays = new ActiveDays(activeDaysList)
  // example days
  const days: Day[] = []

  for (const date of dates) {
    days.push(new Day(date))
  }

  const calendar = new Calendar(rowsElement, days, activeDays)
  calendar.createDays()
})
