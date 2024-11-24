import React, { useEffect } from 'react'
import { Calendar } from '../Calendar'
import { Header } from '../Header'
import './page.css'
import { Stats } from '../Stats'
import { DayItem } from '../../models/DayItem'
import { Tooltip } from 'react-tooltip'
import { UsersManager } from '../../models/UsersManager'
import { CalendarItem } from '../../models/CalendarItem'
import {
  getDates,
  getDayItems,
  getTotalContributions,
  getActiveDaysFromCalendar,
} from './calendar'

type User = {
  name: string
}

interface PageProps {
  onLogout: () => void
  activeIdCalendar: number
}

export const Page: React.FC<PageProps> = ({ onLogout, activeIdCalendar }) => {
  const [user, setUser] = React.useState<User>()
  const [calendarItem, setCalendarItem] = React.useState<CalendarItem | null>(
    null,
  )
  const [daysItems, setDayItems] = React.useState<DayItem[]>([])
  const [totalContributions, setTotalContributions] = React.useState<number>(0)
  const [calendars, setCalendars] = React.useState<CalendarItem[]>([])
  const [idCalendar, setIdCalendar] = React.useState<number>(
    activeIdCalendar - 1,
  )

  let currentStreak = 0
  let longestStreak = 0

  const handleLogout = (): void => {
    setUser(undefined)
    onLogout()
  }

  const loadCalendar = (idCalendar: number) => {
    const currentCalendar: CalendarItem = calendars[idCalendar]
    setCalendarItem(currentCalendar)

    const dates = getDates()
    const activeDays = getActiveDaysFromCalendar(idCalendar, calendars)
    const daysItems = getDayItems(dates, activeDays.days)
    setDayItems(daysItems)
    setTotalContributions(getTotalContributions(daysItems))
  }

  const handleNextCalendar = () => {
    setIdCalendar((prevIdCalendar) => {
      const nextIdCalendar = prevIdCalendar + 1
      if (calendars[nextIdCalendar] === undefined) {
        return prevIdCalendar
      }
      loadCalendar(nextIdCalendar)

      return nextIdCalendar
    })
  }

  const handlePreviousCalendar = () => {
    setIdCalendar((prevIdCalendar) => {
      const nextIdCalendar = prevIdCalendar - 1
      if (calendars[nextIdCalendar] === undefined) {
        return prevIdCalendar
      }
      loadCalendar(nextIdCalendar)

      return nextIdCalendar
    })
  }

  useEffect(() => {
    const usersJSON: string | null = localStorage.getItem('users')
    const username = localStorage.getItem('username')

    const usersManager = new UsersManager(usersJSON)

    if (username === null) {
      throw new Error('Error: username is null')
    }

    const calendars: CalendarItem[] = usersManager.getCalendars(username)
    setCalendars(calendars)

    if (calendars.length === 0) {
      throw new Error('Error: No calendars found')
    }

    if (calendars[idCalendar] === null || calendars[idCalendar] === undefined) {
      throw new Error('Error: calendars[idCalendar] is null')
    }

    const currentCalendar: CalendarItem = calendars[idCalendar]
    setCalendarItem(currentCalendar)

    if (username) {
      setUser({ name: username })
    } else {
      setUser({ name: 'unknown' })
    }

    const dates = getDates()
    const activeDays = getActiveDaysFromCalendar(idCalendar, calendars)
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
          <p className="help">
            You can navigate through the available calendars using the next and
            previous calendar buttons.
          </p>

          <div className="taskslists">
            <Calendar
              calendarItem={calendarItem}
              days={daysItems}
              handlePreviousCalendar={handlePreviousCalendar}
              handleNextCalendar={handleNextCalendar}
            />
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
