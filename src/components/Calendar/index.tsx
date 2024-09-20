import './calendar.css'
import { Day } from '../Day'
import { DayItem } from '../../models/DayItem'
import { CalendarItem } from '../../models/CalendarItem'

interface CalendarProps {
  calendarItem: CalendarItem | null
  days: DayItem[]
}

export const Calendar: React.FC<CalendarProps> = ({ calendarItem, days }) => {
  return (
    <div className="calendar-card">
      <div className="calendar-card-header">
        {calendarItem ? calendarItem.title : 'not defined'}
      </div>
      <div className="calendar-card-body">
        {days.map((day) => (
          <Day key={day.id} day={day} />
        ))}
      </div>
    </div>
  )
}
