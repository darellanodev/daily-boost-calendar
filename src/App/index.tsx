import { Login } from '../components/Login'
import { Page } from '../components/Page'
import './app.css'
import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    const authStatus = localStorage.getItem('authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (): void => {
    setIsAuthenticated(true)
  }

  const handleLogout = (): void => {
    localStorage.removeItem('authenticated')
    setIsAuthenticated(false)
  }

  return (
    <div>
      {isAuthenticated ? (
        <Page handleLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
