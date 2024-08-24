import { ActiveDays } from "../../src/ActiveDays"
import { Calendar } from "../../src/Calendar"
import { Day } from "../../src/Day"

describe("Calendar", () => {
  const rowsElement = document.createElement("div")
  const totalContributionsElement = document.createElement("div")

  const htmlElements = {
    rowsElement: rowsElement,
    totalContributionsElement: totalContributionsElement,
  }
  const days = [
    new Day("04/08/2024"),
    new Day("05/08/2024"),
    new Day("06/08/2024"),
    new Day("07/08/2024"),
  ]

  const activeDaysList = ["06/08/2024", "07/08/2024", "08/08/2024"]
  const activeDays = new ActiveDays(activeDaysList)

  const calendar = new Calendar(htmlElements, days, activeDays)

  test("calculate the total contributions number", () => {
    const actual = calendar.calculateTotalContributions()
    const expected = 2
    expect(actual).toBe(expected)
  })
})
