import React, { useState } from 'react'
import './calendar.css'
import { Day } from '../Day'

interface CalendarProps {
  title: string
}

export function Calendar({ title }: CalendarProps) {
  const [days, setDays] = useState([
    { id: 1, title: '22/7/2024', completed: false },
    { id: 2, title: '23/7/2024', completed: true },
  ])

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
