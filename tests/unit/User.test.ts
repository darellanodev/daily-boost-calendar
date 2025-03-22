import { ActiveDays } from '../../src/models/ActiveDays'
import { CalendarItem } from '../../src/models/CalendarItem'
import { User } from '../../src/models/User'
import { test, expect } from 'vitest'

const getActiveDaysForCalendar1 = () => {
  const activeDaysList = ['08/05/2024', '09/05/2024', '10/05/2024']
  const activeDays = new ActiveDays(activeDaysList)

  return activeDays
}

const getActiveDaysForCalendar2 = () => {
  const activeDaysList = ['04/05/2024', '05/05/2024', '06/05/2024']
  const activeDays = new ActiveDays(activeDaysList)

  return activeDays
}

test('get json, when an User object is created, returns the expected json', () => {
  const calendar1Id = 1
  const calendar1 = new CalendarItem(
    'Test Calendar 1',
    getActiveDaysForCalendar1(),
    calendar1Id,
  )
  const calendar2Id = 2
  const calendar2 = new CalendarItem(
    'Test Calendar 2',
    getActiveDaysForCalendar2(),
    calendar2Id,
  )
  const calendars = [calendar1, calendar2]
  const userId = 152

  const user = new User('john', 'myPass', userId, calendars)

  const result = user.json
  const expected = `{"username": "john", "password": "myPass", "id": 152, "calendars": [{"title": "Test Calendar 1", "activeDays": ["08/05/2024","09/05/2024","10/05/2024"], "id": 1},{"title": "Test Calendar 2", "activeDays": ["04/05/2024","05/05/2024","06/05/2024"], "id": 2}]}`
  expect(result).toBe(expected)
})
