import React from 'react'

interface LogoutProps {
  onLogout: () => void
}

export const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem('authenticated')
    onLogout()
  }

  return <button onClick={handleLogout}>Close Session</button>
}
