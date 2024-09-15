import { ActiveDays } from '../../src/models/ActiveDays'
import { Calendar } from '../../src/models/Calendar'
test('get json, when a Calendar object is created, returns the expected json', () => {
  const activeDaysList = ['08/05/2024', '09/05/2024', '10/05/2024']
  const activeDays = new ActiveDays(activeDaysList)

  const calendarTitle = 'Test Calendar'
  const calendar = new Calendar(calendarTitle, activeDays)

  const result = calendar.json
  const expected = `{"title": "${calendarTitle}", "activeDays": ['08/05/2024','09/05/2024','10/05/2024']}`
  expect(result).toBe(expected)
})
