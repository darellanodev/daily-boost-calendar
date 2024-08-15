import { ActiveDays } from "../../src/ActiveDays"
import { Day } from "../../src/Day"

const activeDaysList = ["05/07/2024", "08/07/2024"]
const activeDays = new ActiveDays(activeDaysList)

test("isActiveDay, if is in the ActiveDays, returns true", () => {
  const day = new Day("08/07/2024")
  const result = activeDays.isActiveDay(day)
  expect(result).toBeTruthy()
})

test("isActiveDay, if is not in the ActiveDays, returns false", () => {
  const day = new Day("02/07/2024")
  const result = activeDays.isActiveDay(day)
  expect(result).toBeFalsy()
})
