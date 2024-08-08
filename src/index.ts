import { Calendar } from "./Calendar.js"
import { Day } from "./Day.js"

const day = new Day()
console.log(day.isOn)

document.addEventListener("DOMContentLoaded", () => {
  const rowsElement: HTMLElement | null = document.querySelector("#rows")
  // example days
  const days: Day[] = []
  const totalDays = 200
  for (let i = 0; i < totalDays; i++) {
    days.push(new Day())
  }
  const calendar = new Calendar(rowsElement, days)
  calendar.createDays()
})
