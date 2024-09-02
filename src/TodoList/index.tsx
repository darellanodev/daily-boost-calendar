import React, { useState } from 'react'
import './todolist.css'
import { Task } from '../Task'

interface TodoListProps {
  title: string
}

export function TodoList({ title }: TodoListProps) {
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
    <div className="todo-list-card">
      <div className="todo-list-card-header">{title}</div>
      <div className="todo-list-card-body">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onToggle={toggleTaskCompletion} />
        ))}
      </div>
    </div>
  )
}
