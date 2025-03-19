import './calendarNav.css'

interface CalendarNavProps {
  handlePreviousCalendar: () => void
  handleNextCalendar: () => void
  calendarTitle: string
  isActivePreviousCalendar: boolean
  isActiveNextCalendar: boolean
}

export const CalendarNav: React.FC<CalendarNavProps> = ({
  handlePreviousCalendar,
  handleNextCalendar,
  calendarTitle,
  isActivePreviousCalendar,
  isActiveNextCalendar,
}) => {
  return (
    <div className="calendar-nav">
      {isActivePreviousCalendar ? (
        <button onClick={handlePreviousCalendar}>◀️ Previous Calendar</button>
      ) : (
        <button
          style={{ opacity: 0.5, cursor: 'not-allowed' }}
          onClick={() => {}}
        >
          ◀️ Previous Calendar
        </button>
      )}
      <div className="calendar-title">{calendarTitle}</div>
      {isActiveNextCalendar ? (
        <button onClick={handleNextCalendar}>Next Calendar ▶️</button>
      ) : (
        <button
          style={{ opacity: 0.5, cursor: 'not-allowed' }}
          onClick={() => {}}
        >
          Next Calendar ▶️
        </button>
      )}
    </div>
  )
}
