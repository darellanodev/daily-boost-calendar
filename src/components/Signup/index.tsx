import React, { useState } from 'react'
import { Header } from '../Header'
import { Button } from '../Button'

import './signup.css'

interface SignupProps {
  onLogin: () => void
}

type User = {
  name: string
}

export const Signup: React.FC<SignupProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatedPassword, setRepeatedPassword] = useState<string>('')
  const [user, setUser] = React.useState<User>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setErrorMessage('')

    if (password !== repeatedPassword) {
      setErrorMessage('Passwords do not match')
    }
  }

  return (
    <div id="signup-content">
      <Header
        user={user}
        onLogin={onLogin}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <article>
        <section>
          <h3>Sign up</h3>
          <form id="signup-form" onSubmit={handleSubmit}>
            <div>
              <label>User:</label>
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
