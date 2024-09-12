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

  const handleLogin = (): void => {
    setShowSignup(false)
  }

  const handleLogout = (): void => {
    localStorage.removeItem('authenticated')
    setIsAuthenticated(false)
  }

  const handleCreateAccount = (): void => {
    setShowSignup(true)
  }

  return (
    <div>
      {showSignup ? (
        <Signup onLogin={handleLogin} onSignup={handleCreateAccount} />
      ) : isAuthenticated ? (
        <Page handleLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} onSignup={handleCreateAccount} />
      )}
    </div>
  )
}

export default App
