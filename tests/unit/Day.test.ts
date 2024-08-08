import { Day } from "../../src/Day"
test("day is on", () => {
  const day = new Day()

  const result = day.isOn
  expect(result).toBeFalsy()
})
