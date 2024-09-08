import { DayItem } from '../../src/models/DayItem'
test('day is completed', () => {
  const completed = true
  const day = new DayItem(1, '5/2/2024', completed)

  const result = day.completed
  expect(result).toBeTruthy()
})
