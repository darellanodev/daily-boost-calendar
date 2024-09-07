import React, { useState } from 'react'
import './calendar.css'
import { DayItem } from '../DayItem'
import { DatesProvider } from '../DatesProvider'
import { Day } from '../Day'

interface CalendarProps {
  title: string
}

export function Calendar({ title }: CalendarProps) {
  const activeDaysList = [
    '06/08/2024',
    '07/08/2024',
    '09/08/2024',
    '11/08/2024',
    '13/08/2024',
    '14/08/2024',
    '16/08/2024',
    '18/08/2024',
  ]

  const totalWeeks = 4
  const datesProvider = new DatesProvider(totalWeeks)
  datesProvider.calculate()
  const dates = datesProvider.dates

  // example days
  const daysItems: DayItem[] = []
  let i = 1
  for (const date of dates) {
    let completed = activeDaysList.includes(date)
    daysItems.push(new DayItem(i, date, completed))
    i++
  }

  const [days, setDays] = useState(daysItems)

  return (
    <div className="calendar-card">
      <div className="calendar-card-header">{title}</div>
      <div className="calendar-card-body">
        {days.map((day) => (
          <Day key={day.id} day={day} />
        ))}
      </div>
    </div>
  )
}
