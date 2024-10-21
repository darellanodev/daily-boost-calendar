import { ActiveDays } from '../../models/ActiveDays'
import { CalendarItem } from '../../models/CalendarItem'
import { DayItem } from '../../models/DayItem'
import { DatesProvider } from '../../utils/DatesProvider'

export const getDates = () => {
  const totalWeeks = 23
  const datesProvider = new DatesProvider(totalWeeks)
  datesProvider.calculate()
  return datesProvider.dates
}

export const getDayItems = (dates: string[], activeDays: string[]) => {
  const daysItems: DayItem[] = []
  let i = 1
  for (const date of dates) {
    let completed = activeDays.includes(date)
    daysItems.push(new DayItem(i, date, completed))
    i++
  }
  return daysItems
}

export const getTotalContributions = (daysItem: DayItem[]) => {
  let totalContributions = 0
  for (const dayItem of daysItem) {
    if (dayItem.completed) {
      totalContributions++
    }
  }
  return totalContributions
}
export const getActiveDaysFromCalendar = (
  id: number,
  calendars: CalendarItem[],
) => {
  if (Array.isArray(calendars[id].activeDays)) {
    const aux: string[] = calendars[id].activeDays as string[]
    return new ActiveDays(aux)
  } else {
    throw new Error('Error: activeDays is not an array')
  }
}
