import { ActiveDays } from '../../src/models/ActiveDays'
import { CalendarItem } from '../../src/models/CalendarItem'
test('get json, when a CalendarItem object is created, returns the expected json', () => {
  const activeDaysList = ['08/05/2024', '09/05/2024', '10/05/2024']
  const activeDays = new ActiveDays(activeDaysList)

  const calendarTitle = 'Test Calendar'
  const id = 1
  const calendar = new CalendarItem(calendarTitle, activeDays, id)

  const result = calendar.json
  const expected = `{"title": "${calendarTitle}", "activeDays": ["08/05/2024","09/05/2024","10/05/2024"], "id": 1}`
  expect(result).toBe(expected)
})
