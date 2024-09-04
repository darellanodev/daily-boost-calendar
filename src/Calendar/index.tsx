import React, { useState } from 'react'
import './calendar.css'
import { Task } from '../Task'

interface CalendarProps {
  title: string
}

export function Calendar({ title }: CalendarProps) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'buy milk', completed: false },
    { id: 2, title: 'go to gym', completed: true },
  ])

  const toggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <div className="calendar-card">
      <div className="calendar-card-header">{title}</div>
      <div className="calendar-card-body">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={toggleTaskCompletion} />
        ))}
      </div>
    </div>
  )
}
