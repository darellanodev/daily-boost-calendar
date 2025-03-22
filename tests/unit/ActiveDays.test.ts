import { ActiveDays } from '../../src/models/ActiveDays'
import { test, expect } from 'vitest'

test('get json, when an ActiveDays object is created, returns the expected json', () => {
  const activeDaysList = ['08/05/2024', '09/05/2024', '10/05/2024']

  const activeDays = new ActiveDays(activeDaysList)

  const result = activeDays.json
  const expected = '["08/05/2024","09/05/2024","10/05/2024"]'
  expect(result).toBe(expected)
})

test('get json, when an ActiveDays object is created without any days, returns the expected json', () => {
  const activeDaysList = []

  const activeDays = new ActiveDays(activeDaysList)

  const result = activeDays.json
  const expected = '[]'
  expect(result).toBe(expected)
})
