import React from 'react'
import './day.css'

interface DayProps {
  day: {
    id: number
    title: string
    completed: boolean
  }
}

export const Day: React.FC<DayProps> = ({ day }) => {
  const statusClass = day.completed ? 'day day-completed' : 'day day-incomplete'
  return <div className={statusClass}>{day.title}</div>
}
