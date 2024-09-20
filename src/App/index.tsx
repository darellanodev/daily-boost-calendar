import { FirstRun } from '../components/FirstRun'
import { Login } from '../components/Login'
import { Page } from '../components/Page'
import { Signup } from '../components/Signup'
import { TestUserCreator } from '../models/TestUserCreator'
import './app.css'
import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [showSignup, setShowSignup] = useState<boolean>(false)
  const [isFirstRun, setFirstRun] = useState<boolean>(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }

    // check if it is the first time we are usign the app
    let usersJSON: string | null = localStorage.getItem('users')
    if (usersJSON === null || usersJSON === '' || usersJSON === '[]') {
      usersJSON = '[]'
      localStorage.setItem('users', usersJSON)

      const testUserCreator = new TestUserCreator()
      const finalUsersJSON = testUserCreator.create(usersJSON)
      localStorage.setItem('users', finalUsersJSON)

      setFirstRun(true)
    }
  }, [])

  const handleShowLogin = (): void => {
    setShowSignup(false)
  }

  const handleLogin = (): void => {
    // todo
    setIsAuthenticated(true)
    console.log('Login successful')
  }

  const handleLogout = (): void => {
    localStorage.removeItem('authenticated')
    localStorage.removeItem('username')
    setIsAuthenticated(false)
  }

  const handleShowSignup = (): void => {
    setShowSignup(true)
  }

  const handleContinueFirstRun = (): void => {
    setFirstRun(false)
  }

  return (
    <div>
      {isFirstRun ? (
        <FirstRun onContinue={handleContinueFirstRun} />
      ) : (
        <>
          {showSignup ? (
            <Signup onLogin={handleShowLogin} />
          ) : isAuthenticated ? (
            <Page onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} onSignup={handleShowSignup} />
          )}
        </>
      )}
    </div>
  )
}

export default App
