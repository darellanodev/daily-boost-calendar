import React from 'react'

import { Button } from '../Button'
import './header.css'

type User = {
  name: string
}

interface HeaderProps {
  user?: User
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
  showButtons?: boolean
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  showButtons = true,
}: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <img id="header-logo" src="src/assets/img/logo.svg" />
        <h1 id="header-title">Daily Boost Calendar</h1>
      </div>
      <div>
        {user ? (
          <>
            {showButtons && (
              <>
                <span className="header-welcome">
                  Welcome, <b>{user.name}</b>!
                </span>
                <Button size="small" onClick={onLogout} label="Log out" />
              </>
            )}
          </>
        ) : (
          showButtons && (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button
                primary
                size="small"
                onClick={onCreateAccount}
                label="Sign up"
              />
            </>
          )
        )}
      </div>
    </div>
  </header>
)
