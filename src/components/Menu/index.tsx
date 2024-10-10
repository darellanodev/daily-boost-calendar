import React, { useEffect } from 'react'
import { Header } from '../Header'
import './menu.css'
import { Tooltip } from 'react-tooltip'
import { UsersManager } from '../../models/UsersManager'
import { CalendarItem } from '../../models/CalendarItem'

type User = {
  name: string
}

interface MenuProps {
  onLogout: () => void
}

export const Menu: React.FC<MenuProps> = ({ onLogout }) => {
  const [user, setUser] = React.useState<User>()
  const [calendars, setCalendars] = React.useState<CalendarItem[]>([])

  const handleLogout = (): void => {
    setUser(undefined)
    onLogout()
  }

  useEffect(() => {
    const usersJSON: string | null = localStorage.getItem('users')
    const username = localStorage.getItem('username')

    const usersManager = new UsersManager(usersJSON)

    if (username === null) {
      throw new Error('Error: username is null')
    }

    const calendars: CalendarItem[] = usersManager.getCalendars(username)
    setCalendars(calendars)

    if (calendars.length === 0) {
      throw new Error('Error: No calendars found')
    }

    if (username) {
      setUser({ name: username })
    } else {
      setUser({ name: 'unknown' })
    }
  }, [])

  return (
    <div id="menu-content">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={handleLogout}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <Tooltip id="day-tooltip" />
      <article>
        <section>
          <p className="help">Welcome to the Daily Boost Calendar.</p>
          <p className="help">
            Click on the desired calendar from all the available to manage it.
          </p>
        </section>
      </article>
    </div>
  )
}
