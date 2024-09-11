import React, { useState } from 'react'
import { Header } from '../Header'
import { Button } from '../Button'

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username === 'user' && password === 'pass') {
      localStorage.setItem('authenticated', 'true')
      onLogin()
    } else {
      alert('Error in credentials')
    }
  }

  return (
    <div id="page-content">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <form onSubmit={handleSubmit}>
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
    </div>
  )
}
