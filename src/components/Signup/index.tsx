import React, { useState } from 'react'
import { Header } from '../Header'
import { Button } from '../Button'

import './signup.css'
import { User } from '../../models/User'
import { CalendarItem } from '../../models/CalendarItem'
import { UsersManager } from '../../models/UsersManager'
import { ActiveDays } from '../../models/ActiveDays'

interface SignupProps {
  onLogin: () => void
}

type CurrentUser = {
  name: string
}

export const Signup: React.FC<SignupProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatedPassword, setRepeatedPassword] = useState<string>('')
  const [currentUser, setCurrentUser] = React.useState<CurrentUser>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const getDefaultCalendarsNewUser = (): CalendarItem[] => {
    const calendar1ActiveDays = new ActiveDays([])
    const calendar1 = new CalendarItem('Default', calendar1ActiveDays, 1)
    const calendars: CalendarItem[] = []
    calendars.push(calendar1)
    return calendars
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setErrorMessage('')
    if (password !== repeatedPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    let usersJSON: string | null = localStorage.getItem('users')
    const usersManager = new UsersManager(usersJSON)

    // verify if the new username already exists
    if (usersManager.exists(username)) {
      setErrorMessage('The username already exists')
      return
    }

    // create new user
    const newUser = new User(
      username,
      password,
      123,
      getDefaultCalendarsNewUser(),
    )

    const finalUsersJSON = usersManager.create(newUser.json)
    localStorage.setItem('users', finalUsersJSON)
  }

  return (
    <div id="signup-content">
      <Header
        user={currentUser}
        onLogin={onLogin}
        onLogout={() => setCurrentUser(undefined)}
        onCreateAccount={() => {}}
      />

      <article>
        <section>
          <h3>Sign up</h3>
          <form id="signup-form" onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
                required
              />
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            <div>
              <label>Repeat the password:</label>
              <input
                type="password"
                value={repeatedPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRepeatedPassword(e.target.value)
                }
                required
              />
            </div>

            <Button primary size="small" label="Signup" type="submit" />
          </form>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </section>
      </article>
    </div>
  )
}
