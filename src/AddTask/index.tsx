import React, { useState } from 'react'
import './addtask.css'

interface AddTaskProps {
  onAddTask: (task: string) => void
}

export const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [task, setTask] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const handleAddClick = () => {
    if (task.trim()) {
      onAddTask(task)
      setTask('')
    }
  }

  return (
    <div className="add-task-container">
      <input
        type="text"
        className="add-task-input"
        placeholder="add new task"
        value={task}
        onChange={handleInputChange}
      />
      <button className="add-task-button" onClick={handleAddClick}>
        Add
      </button>
    </div>
  )
}
