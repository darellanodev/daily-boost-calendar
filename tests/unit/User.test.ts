import { ActiveDays } from '../../src/models/ActiveDays'
import { Calendar } from '../../src/models/Calendar'
import { User } from '../../src/models/User'

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
  const calendar1 = new Calendar('Test Calendar 1', getActiveDaysForCalendar1())
  const calendar2 = new Calendar('Test Calendar 2', getActiveDaysForCalendar2())
  const calendars = [calendar1, calendar2]
  const userId = 152

  const user = new User('john', 'myPass', userId, calendars)

  const result = user.json
  const expected = `{"username": "john", "password": "myPass", "id": 152, "calendars": [{"title": "Test Calendar 1", "activeDays": ["08/05/2024","09/05/2024","10/05/2024"]},{"title": "Test Calendar 2", "activeDays": ["04/05/2024","05/05/2024","06/05/2024"]}]}`
  expect(result).toBe(expected)
})
