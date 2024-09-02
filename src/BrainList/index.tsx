import React, { useState } from 'react'
import './brainlist.css'
import { Thought } from '../Thought'

interface TodoListProps {
  title: string
}

export function BrainList({ title }: TodoListProps) {
  const [thoughts, setThoughts] = useState([
    { id: 1, title: 'buy milk', completed: false },
    { id: 2, title: 'go to gym', completed: true },
  ])

  const toggleThoughtCompletion = (taskId: number) => {
    setThoughts((prevThoughts) =>
      prevThoughts.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <div className="brainlist-card">
      <div className="brainlist-card-header">{title}</div>
      <div className="brainlist-card-body">
        {thoughts.map((thought) => (
          <Thought key={thought.id} thought={thought} />
        ))}
      </div>
    </div>
  )
}
