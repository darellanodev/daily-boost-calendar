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
    <div className="minicalendar">
      {miniCalendar.title} calendar
    </div>
  )
}
