import React, { useState } from 'react'
import { Header } from '../Header'
import { Button } from '../Button'
import { AlertInsecureData } from '../AlertInsecureData'
import { decryptPassword } from '../../utils/encrypt'

import './login.css'

interface LoginProps {
  onLogin: () => void
  onSignup: () => void
  showSignedUpSuccessfully: boolean
}

type User = {
  name: string
}

export const Login: React.FC<LoginProps> = ({
  onLogin,
  onSignup,
  showSignedUpSuccessfully,
}) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [user, setUser] = React.useState<User>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const isValidUser = (
    users: any,
    username: string,
    password: string,
  ): boolean => {
    for (let user of users) {
      if (user.username === username) {
        if (decryptPassword(user.password) === password) {
          return true
        } else {
          return false
        }
      }
    }
    return false
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let users: string | null = localStorage.getItem('users')
    if (users === null) {
      setErrorMessage('Error in credentials')
    } else {
      const usersObj = JSON.parse(users)
      if (usersObj.length === 0) {
        setErrorMessage('Error in credentials')
      } else if (usersObj.length > 0) {
        if (isValidUser(usersObj, username, password)) {
          localStorage.setItem('authenticated', 'true')
          localStorage.setItem('username', username)
          onLogin()
          setErrorMessage('')
        } else {
          setErrorMessage('Error in credentials')
        }
      }
    }
  }

  return (
    <div id="login-content">
      <Header
        user={user}
        onLogin={() => {}}
        onLogout={() => setUser(undefined)}
        onCreateAccount={onSignup}
      />

      <article>
        <section>
          <AlertInsecureData />
          {showSignedUpSuccessfully && (
            <div className="signup-success">
              Signed up successfully, now you can login
            </div>
          )}
          <h3>Login</h3>
          <form id="login-form" onSubmit={handleSubmit}>
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

            <Button primary size="small" label="Login" type="submit" />
          </form>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </section>
      </article>
    </div>
  )
}
