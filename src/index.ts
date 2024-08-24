import { ActiveDays } from "./ActiveDays.js"
import { Calendar } from "./Calendar.js"
import { DatesProvider } from "./DatesProvider.js"
import { Day } from "./Day.js"

document.addEventListener("DOMContentLoaded", () => {
  const rowsElement: HTMLElement | null = document.querySelector("#rows")
  const totalContributionsElement: HTMLElement | null = document.querySelector(
    "#total-contributions-number",
  )
  if (rowsElement === null) {
    throw new Error("rowsElement is null")
  }
  if (totalContributionsElement === null) {
    throw new Error("totalContributions is null")
  }

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

  const htmlElements: htmlElements = {
    rowsElement: rowsElement,
    totalContributionsElement: totalContributionsElement,
  }

  const calendar = new Calendar(htmlElements, days, activeDays)
  const totalContributions = calendar.calculateTotalContributions()

  totalContributionsElement.innerHTML = totalContributions.toString()
  calendar.createDays()
})
