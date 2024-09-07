import React from 'react'
import { useState } from 'react'
import { Calendar } from '../Calendar'
import { Header } from '../Header'
import './page.css'
import { Stats } from '../Stats'

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
            <Calendar title="Calendar" />
          </div>
          <Stats title="test" />
        </section>
      </article>
    </div>
  )
}
