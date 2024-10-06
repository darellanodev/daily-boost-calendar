import React, { useEffect } from 'react'
import { Calendar } from '../Calendar'
import { Header } from '../Header'
import './page.css'
import { Stats } from '../Stats'
import { DayItem } from '../../models/DayItem'
import { DatesProvider } from '../../utils/DatesProvider'
import { Tooltip } from 'react-tooltip'
import { UsersManager } from '../../models/UsersManager'
import { CalendarItem } from '../../models/CalendarItem'
import { ActiveDays } from '../../models/ActiveDays'

type User = {
  name: string
}

interface PageProps {
  onLogout: () => void
}

export const Page: React.FC<PageProps> = ({ onLogout }) => {
  const [user, setUser] = React.useState<User>()
  const [calendarItem, setCalendarItem] = React.useState<CalendarItem | null>(
    null,
  )
  const [daysItems, setDayItems] = React.useState<DayItem[]>([])
  const [totalContributions, setTotalContributions] = React.useState<number>(0)

  let currentStreak = 0
  let longestStreak = 0

  const getDates = () => {
    const totalWeeks = 23
    const datesProvider = new DatesProvider(totalWeeks)
    datesProvider.calculate()
    return datesProvider.dates
  }

  const getDayItems = (dates: string[], activeDays: string[]) => {
    const daysItems: DayItem[] = []
    let i = 1
    for (const date of dates) {
      let completed = activeDays.includes(date)
      daysItems.push(new DayItem(i, date, completed))
      i++
    }
    return daysItems
  }

  const getTotalContributions = (daysItem: DayItem[]) => {
    let totalContributions = 0
    for (const dayItem of daysItem) {
      if (dayItem.completed) {
        totalContributions++
      }
    }
    return totalContributions
  }

  const handleLogout = (): void => {
    setUser(undefined)
    onLogout()
  }

  useEffect(() => {
    console.log('hi')
    const usersJSON: string | null = localStorage.getItem('users')
    const username = localStorage.getItem('username')

    const usersManager = new UsersManager(usersJSON)

    if (username === null) {
      throw new Error('Error: username is null')
    }

    const calendars: CalendarItem[] = usersManager.getCalendars(username)

    if (calendars.length === 0) {
      throw new Error('Error: No calendars found')
    }

    if (calendars[0] === null || calendars[0] === undefined) {
      throw new Error('Error: calendars[0] is null')
    }

    let activeDays: ActiveDays
    if (Array.isArray(calendars[0].activeDays)) {
      const aux: string[] = calendars[0].activeDays as string[]
      activeDays = new ActiveDays(aux)
    } else {
      throw new Error('Error: activeDays is not an array')
    }

    const currentCalendar: CalendarItem = calendars[0]
    setCalendarItem(currentCalendar)

    if (username) {
      setUser({ name: username })
    } else {
      setUser({ name: 'unknown' })
    }

    const dates = getDates()
    const daysItems = getDayItems(dates, activeDays.days)
    setDayItems(daysItems)
    setTotalContributions(getTotalContributions(daysItems))
  }, [])

  return (
    <div id="page-content">
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={handleLogout}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />
      <Tooltip id="day-tooltip" />
      <article>
        <section>
          <p className="help">Welcome to the Daily Boost Calendar.</p>
          <div className="taskslists">
            <Calendar calendarItem={calendarItem} days={daysItems} />
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
