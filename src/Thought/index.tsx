import React from 'react'
import './thought.css'

interface ThoughtProps {
  thought: {
    id: number
    title: string
  }
}

export const Thought: React.FC<ThoughtProps> = ({ thought }) => {
  const statusClass = 'thought'
  return <div className={statusClass}>{thought.title}</div>
}
