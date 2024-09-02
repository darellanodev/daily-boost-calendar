import React from 'react'
import { useState } from 'react'
import { TodoList } from '../TodoList'
import { Header } from '../Header'
import './page.css'
import { BrainList } from '../BrainList'
import { AddTask } from '../AddTask'

type User = {
  name: string
}

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>()
  const [count, setCount] = useState(0)

  const handleAddTask = (newTask: string) => {
    console.log('New task added:', newTask)
  }

  return (
    <div id="page-content">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <article>
        <section>
          <p className="help">Tutorial 1/8: look at the Brain Thoughts</p>
          <div className="taskslists">
            <BrainList title="Brain thoughts" />
            <TodoList title="Todo List1" />
          </div>

          {/* <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button> */}
          <AddTask onAddTask={handleAddTask} />
        </section>
      </article>
    </div>
  )
}
