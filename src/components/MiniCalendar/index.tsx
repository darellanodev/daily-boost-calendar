import React from 'react'
import './miniCalendar.css'

interface MiniCalendarProps {
  miniCalendar: {
    id: number
    title: string
  }
}

export const MiniCalendar: React.FC<MiniCalendarProps> = ({ miniCalendar }) => {
  return (
    <div className="mini-calendar">
      <header className="mini-calendar__header">
        <div className="mini-calendar__logo">logo</div>
        <h2 className="mini-calendar__title">{miniCalendar.title} calendar</h2>
      </header>
      <main className="mini-calendar__content">
        <div className="mini-calendar__total-count">
          <div className="mini-calendar__total-count-number">34</div>
          <div className="mini-calendar__total-count-text">total</div>
        </div>
        <div className="mini-calendar__streak-count">
          <div className="mini-calendar__total-count-number">78</div>
          <div className="mini-calendar__total-count-text">day streak</div>
        </div>
      </main>
    </div>
  )
}
