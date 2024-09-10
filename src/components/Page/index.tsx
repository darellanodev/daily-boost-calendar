import React from 'react'
import { Calendar } from '../Calendar'
import { Header } from '../Header'
import './page.css'
import { Stats } from '../Stats'
import { DayItem } from '../../models/DayItem'
import { DatesProvider } from '../../utils/DatesProvider'
import { Tooltip } from 'react-tooltip'

type User = {
  name: string
}

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>()

  let totalContributions = 0
  let currentStreak = 0
  let longestStreak = 0

  const activeDaysList = [
    '06/08/2024',
    '07/08/2024',
    '09/08/2024',
    '11/08/2024',
    '13/08/2024',
    '14/08/2024',
    '16/08/2024',
    '18/08/2024',
  ]

  const totalWeeks = 23
  const datesProvider = new DatesProvider(totalWeeks)
  datesProvider.calculate()
  const dates = datesProvider.dates

  // example days
  const daysItems: DayItem[] = []
  let i = 1
  for (const date of dates) {
    let completed = activeDaysList.includes(date)
    daysItems.push(new DayItem(i, date, completed))
    i++
    if (completed) {
      totalContributions++
    }
  }

  return (
    <div id="page-content">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <Tooltip id="day-tooltip" />
      <article>
        <section>
          <p className="help">Welcome to the Daily Boost Calendar.</p>
          <div className="taskslists">
            <Calendar title="Calendar" days={daysItems} />
          </div>
          <Stats
            totalContributions={totalContributions}
            currentStreak={currentStreak}
            longestStreak={longestStreak}
          />
        </section>
      </article>
    </div>
  )
}
