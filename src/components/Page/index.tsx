import React, { useEffect } from 'react'
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

interface PageProps {
  onLogout: () => void
}

export const Page: React.FC<PageProps> = ({ onLogout }) => {
  const [user, setUser] = React.useState<User>()
  const [calendarTitle, setCalendarTitle] = React.useState(
    'Gym Activity Calendar',
  )
  const [daysItems, setDaysItems] = React.useState<DayItem[]>([])

  let totalContributions = 0
  let currentStreak = 0
  let longestStreak = 0

  const calendarGymActiveDays = [
    '11/08/2024',
    '13/08/2024',
    '14/08/2024',
    '16/08/2024',
    '18/08/2024',
  ]

  const calendarEnglishActiveDays = [
    '15/08/2024',
    '16/08/2024',
    '17/08/2024',
    '18/08/2024',
  ]

  const calculate = (activeDays: string[]) => {
    const totalWeeks = 23
    const datesProvider = new DatesProvider(totalWeeks)
    datesProvider.calculate()
    const dates = datesProvider.dates

    // example days
    const daysItems: DayItem[] = []
    let i = 1
    for (const date of dates) {
      let completed = activeDays.includes(date)
      daysItems.push(new DayItem(i, date, completed))
      i++
      if (completed) {
        totalContributions++
      }
    }
    return daysItems
  }
  const handleLogout = (): void => {
    setUser(undefined)
    onLogout()
  }
  const changeCalendar = () => {
    if (calendarTitle === 'Gym Activity Calendar') {
      setCalendarTitle('English Language Study Calendar')
      const daysItems = calculate(calendarEnglishActiveDays)
      setDaysItems(daysItems)
    } else {
      setCalendarTitle('Gym Activity Calendar')
      const daysItems = calculate(calendarGymActiveDays)
      setDaysItems(daysItems)
    }
  }

  // Calculate days for calendarGymActiveDays when the component mounts
  useEffect(() => {
    const initialDaysItems = calculate(calendarGymActiveDays)
    setDaysItems(initialDaysItems)
    setUser({ name: 'Jane Doe' })
  }, []) // Empty dependency array means this runs once when the component mounts

  return (
    <div id="page-content">
      <Tooltip id="my-tooltip" />
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={handleLogout}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <Tooltip id="day-tooltip" />
      <article>
        <section>
          <button onClick={changeCalendar}>Change calendar</button>
          <p className="help">Welcome to the Daily Boost Calendar.</p>
          <div className="taskslists">
            <Calendar title={calendarTitle} days={daysItems} />
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
