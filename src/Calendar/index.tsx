import React, { useState } from 'react'
import './calendar.css'
import { DayItem } from '../DayItem'
import { DatesProvider } from '../DatesProvider'
import { Day } from '../Day'

interface CalendarProps {
  title: string
}

export function Calendar({ title }: CalendarProps) {
  const totalWeeks = 4
  const datesProvider = new DatesProvider(totalWeeks)
  datesProvider.calculate()
  const dates = datesProvider.dates

  // example days
  const daysItems: DayItem[] = []
  let i = 1
  for (const date of dates) {
    daysItems.push(new DayItem(i, date, false))
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
