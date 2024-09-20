import { Login } from '../components/Login'
import { Page } from '../components/Page'
import { Signup } from '../components/Signup'
import './app.css'
import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [showSignup, setShowSignup] = useState<boolean>(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
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

  return (
    <div>
      {showSignup ? (
        <Signup onLogin={handleShowLogin} />
      ) : isAuthenticated ? (
        <Page onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} onSignup={handleShowSignup} />
      )}
    </div>
  )
}

export default App
