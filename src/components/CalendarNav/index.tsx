import './calendarNav.css'

interface CalendarNavProps {
  handlePreviousCalendar: () => void
  handleNextCalendar: () => void
  calendarTitle: string
}

export const CalendarNav: React.FC<CalendarNavProps> = ({
  handlePreviousCalendar,
  handleNextCalendar,
  calendarTitle,
}) => {
  return (
    <div className="calendar-nav">
      <button onClick={handlePreviousCalendar}>◀️ Previous Calendar</button>
      <div className="calendar-title">{calendarTitle}</div>
      <button onClick={handleNextCalendar}>Next Calendar ▶️</button>
    </div>
  )
}
