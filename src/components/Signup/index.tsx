import React, { useState } from 'react'
import { Header } from '../Header'
import { Button } from '../Button'

import './signup.css'
import { User } from '../../models/User'
import { Calendar } from '../../models/Calendar'
import { UsersJSON } from '../../models/UsersJSON'

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setErrorMessage('')
    if (password !== repeatedPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    // clear users (for testing purposes)
    localStorage.setItem('users', '')

    // load users from localStorage
    let users: string | null = localStorage.getItem('users')
    const usersJSON = new UsersJSON(users)
    const calendars: Calendar[] = []
    const newUser = new User(username, password, 123, calendars)
    const finalUsersJSON = usersJSON.create(newUser.json)
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
