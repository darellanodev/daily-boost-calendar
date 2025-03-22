import { FirstRun } from '../components/FirstRun'
import { Login } from '../components/Login'
import { Menu } from '../components/Menu'
import { Page } from '../components/Page'
import { Signup } from '../components/Signup'
import { TestUserCreator } from '../models/TestUserCreator'
import './app.css'
import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [showSignup, setShowSignup] = useState<boolean>(false)
  const [isFirstRun, setFirstRun] = useState<boolean>(false)
  const [showPage, setShowPage] = useState<boolean>(false)
  const [activeIdCalendar, setActiveIdCalendar] = useState<number>(1)
  const [showSignedUpSuccessfully, setShowSignedUpSuccessfully] =
    useState<boolean>(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }

    // check if it is the first time we are using the app
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

  const handleShowSignedUpSuccessfully = (): void => {
    setShowSignedUpSuccessfully(true)
  }

  const handleContinueFirstRun = (): void => {
    setFirstRun(false)
  }

  const handleManageCalendar = (id: number): void => {
    console.log('Manage calendar: ' + id)
    setActiveIdCalendar(id)
    setShowPage(true)
  }

  return (
    <div>
      {isFirstRun ? (
        <FirstRun onContinue={handleContinueFirstRun} />
      ) : (
        <>
          {showSignup ? (
            <Signup
              onLogin={handleShowLogin}
              onSignedUpSuccessfully={handleShowSignedUpSuccessfully}
            />
          ) : isAuthenticated ? (
            showPage ? (
              <Page
                onLogout={handleLogout}
                activeIdCalendar={activeIdCalendar}
              />
            ) : (
              <Menu
                onLogout={handleLogout}
                onManageCalendar={handleManageCalendar}
              />
            )
          ) : (
            <Login
              onLogin={handleLogin}
              onSignup={handleShowSignup}
              showSignedUpSuccessfully={showSignedUpSuccessfully}
            />
          )}
        </>
      )}
    </div>
  )
}

export default App
