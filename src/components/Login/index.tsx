import React, { useState } from 'react'
import { Header } from '../Header'
import { Button } from '../Button'

import './login.css'

interface LoginProps {
  onLogin: () => void
}

type User = {
  name: string
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [user, setUser] = React.useState<User>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username === 'user' && password === 'pass') {
      localStorage.setItem('authenticated', 'true')
      onLogin()
      setErrorMessage('')
    } else {
      setErrorMessage('Error in credentials')
    }
  }

  return (
    <div id="login-content">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <article>
        <section>
          <form id="login-form" onSubmit={handleSubmit}>
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

            <Button primary size="small" label="Login" type="submit" />
          </form>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </section>
      </article>
    </div>
  )
}
