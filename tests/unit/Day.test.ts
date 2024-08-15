import { Day } from "../../src/Day"
test("day is on", () => {
  const day = new Day("5/2/2024")

  const result = day.isOn
  expect(result).toBeFalsy()
})
