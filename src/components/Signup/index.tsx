import React, { useState } from 'react'
import { Header } from '../Header'
import { Button } from '../Button'
import { FaUserPlus } from 'react-icons/fa'
import './signup.css'
import { User } from '../../models/User'
import { CalendarItem } from '../../models/CalendarItem'
import { UsersManager } from '../../models/UsersManager'
import { ActiveDays } from '../../models/ActiveDays'
import { AlertInsecureData } from '../AlertInsecureData'

import { encryptPassword } from '../../utils/encrypt'

interface SignupProps {
  onLogin: () => void
  onSignedUpSuccessfully: () => void
}

type CurrentUser = {
  name: string
}

export const Signup: React.FC<SignupProps> = ({
  onLogin,
  onSignedUpSuccessfully,
}) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatedPassword, setRepeatedPassword] = useState<string>('')
  const [currentUser, setCurrentUser] = React.useState<CurrentUser>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const getNewUserDefaultCalendar = (): CalendarItem[] => {
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
      encryptPassword(password),
      123,
      getNewUserDefaultCalendar(),
    )

    const finalUsersJSON = usersManager.create(newUser.json)
    localStorage.setItem('users', finalUsersJSON)
    onLogin()
    onSignedUpSuccessfully()
  }

  const handleLogin = () => {
    onLogin()
  }

  return (
    <div id="signup-content">
      <Header
        user={currentUser}
        onLogin={onLogin}
        onLogout={() => setCurrentUser(undefined)}
        onCreateAccount={() => {}}
        activeButton={1}
      />

      <article>
        <section>
          <AlertInsecureData />
          <h3>
            <FaUserPlus /> Sign up
          </h3>
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

            <Button mode="primary" size="small" label="Signup" type="submit" />
          </form>
          <div id="login-link">
            Do you already have an account?{' '}
            <a href="#" onClick={handleLogin}>
              Log in here
            </a>
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </section>
      </article>
    </div>
  )
}
