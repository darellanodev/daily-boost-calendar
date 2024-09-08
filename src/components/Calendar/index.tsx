import './calendar.css'
import { Day } from '../Day'
import { DayItem } from '../../models/DayItem'

interface CalendarProps {
  title: string
  days: DayItem[]
}

export function Calendar({ title, days }: CalendarProps) {
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
