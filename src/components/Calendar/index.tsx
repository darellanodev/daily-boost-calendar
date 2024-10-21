import './calendar.css'
import { Day } from '../Day'
import { DayItem } from '../../models/DayItem'
import { CalendarItem } from '../../models/CalendarItem'
import { CalendarNav } from '../CalendarNav'

interface CalendarProps {
  calendarItem: CalendarItem | null
  days: DayItem[]
  handlePreviousCalendar: () => void
  handleNextCalendar: () => void
}

export const Calendar: React.FC<CalendarProps> = ({
  calendarItem,
  days,
  handlePreviousCalendar,
  handleNextCalendar,
}) => {
  const calendarTitle = calendarItem ? calendarItem.title : 'not defined'
  return (
    <div className="calendar-card">
      <div className="calendar-card-header">
        <CalendarNav
          handlePreviousCalendar={handlePreviousCalendar}
          handleNextCalendar={handleNextCalendar}
          calendarTitle={calendarTitle}
        />
      </div>
      <div className="calendar-card-body">
        {days.map((day) => (
          <Day key={day.id} day={day} />
        ))}
      </div>
    </div>
  )
}
