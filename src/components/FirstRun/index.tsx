import React, { useState } from 'react'
import { Header } from '../Header'
import './firstRun.css'
import { Button } from '../Button'

interface FirstRunProps {
  onContinue: () => void
}

type User = {
  name: string
}

export const FirstRun: React.FC<FirstRunProps> = ({ onContinue }) => {
  const user: User = { name: '' }

  return (
    <div id="login-content">
      <Header
        user={user}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
        showButtons={false}
      />

      <article>
        <section>
          <div className="first-run-container">
            <h1>Welcome to the first run of Daily Boost Calendar</h1>
            <div>
              <ul>
                <li>✅ creating a demo user (testuser) to test the app</li>
              </ul>
            </div>
            <p>
              You can login with the testuser (username:{' '}
              <strong>testuser</strong> / password: <strong>testpass</strong>)
            </p>
            <Button primary onClick={onContinue} label="Continue" />
          </div>
        </section>
      </article>
    </div>
  )
}
