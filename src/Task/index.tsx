import React from 'react'
import './task.css'

interface TaskProps {
  task: {
    id: number
    title: string
    completed: boolean
  }
  onToggle: (taskId: number) => void
}

export const Task: React.FC<TaskProps> = ({ task, onToggle }) => {
  const statusClass = task.completed
    ? 'task task-completed'
    : 'task task-incomplete'
  return (
    <div onClick={() => onToggle(task.id)} className={statusClass}>
      {task.title}
    </div>
  )
}
