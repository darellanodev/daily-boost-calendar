import React, { useState } from 'react'
import { Header } from '../Header'
import './firstRun.css'

type User = {
  name: string
}

export const FirstRun: React.FC = () => {
  const [user, setUser] = React.useState<User>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  return (
    <div id="login-content">
      <Header
        user={user}
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />

      <article>
        <section>
          <div className="first-run-container">
            <h1>Welcome to the app</h1>
          </div>
        </section>
      </article>
    </div>
  )
}
