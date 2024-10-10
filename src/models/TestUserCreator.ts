import { ActiveDays } from './ActiveDays'
import { CalendarItem } from './CalendarItem'
import { User } from './User'
import { UsersManager } from './UsersManager'

export class TestUserCreator {
  create(usersJSON: string): string {
    const usersManager = new UsersManager(usersJSON)

    const username = 'testuser'
    const password = 'testpass'
    const userid = 1

    // calendars

    const calendars: CalendarItem[] = this.#getCalendars()
    const newUser = new User(username, password, userid, calendars)

    const finalUsersJSON = usersManager.create(newUser.json)
    return finalUsersJSON
  }

  #getActiveDaysForCalendar1(): string[] {
    return [
      '06/08/2024',
      '07/08/2024',
      '09/08/2024',
      '11/08/2024',
      '13/08/2024',
      '14/08/2024',
      '16/08/2024',
      '18/08/2024',
      '21/08/2024',
      '22/08/2024',
      '24/08/2024',
      '25/08/2024',
      '28/08/2024',
      '29/08/2024',
      '31/08/2024',
      '01/09/2024',
      '04/09/2024',
      '05/09/2024',
      '07/09/2024',
      '08/09/2024',
      '12/09/2024',
    ]
  }

  #getActiveDaysForCalendar2(): string[] {
    return [
      '06/08/2024',
      '07/08/2024',
      '08/08/2024',
      '09/08/2024',
      '10/08/2024',
      '11/08/2024',
      '12/08/2024',
      '13/08/2024',
      '14/08/2024',
      '15/08/2024',
      '16/08/2024',
      '17/08/2024',
      '18/08/2024',
      '19/08/2024',
      '20/08/2024',
      '21/08/2024',
      '22/08/2024',
      '23/08/2024',
      '24/08/2024',
      '25/08/2024',
      '26/08/2024',
      '27/08/2024',
      '28/08/2024',
      '29/08/2024',
      '30/08/2024',
      '31/08/2024',
      '01/09/2024',
      '02/09/2024',
      '03/09/2024',
      '04/09/2024',
      '05/09/2024',
      '06/09/2024',
      '07/09/2024',
      '08/09/2024',
      '09/09/2024',
      '10/09/2024',
      '11/09/2024',
      '12/09/2024',
      '13/09/2024',
      '14/09/2024',
      '15/09/2024',
      '16/09/2024',
    ]
  }

  #getActiveDaysForCalendar3(): string[] {
    return [
      '09/09/2024',
      '10/09/2024',
      '11/09/2024',
      '12/09/2024',
      '13/09/2024',
    ]
  }

  #getActiveDaysForCalendar4(): string[] {
    return ['14/09/2024', '15/09/2024', '16/09/2024', '17/09/2024']
  }

  #getCalendars(): CalendarItem[] {
    const calendar1ActiveDays = new ActiveDays(
      this.#getActiveDaysForCalendar1(),
    )
    let id = 1
    const calendar1 = new CalendarItem('Gym', calendar1ActiveDays, id)

    const calendar2ActiveDays = new ActiveDays(
      this.#getActiveDaysForCalendar2(),
    )
    id = 2
    const calendar2 = new CalendarItem(
      'English Study Language',
      calendar2ActiveDays,
      id,
    )

    const calendar3ActiveDays = new ActiveDays(
      this.#getActiveDaysForCalendar3(),
    )
    id = 3
    const calendar3 = new CalendarItem('Projects', calendar3ActiveDays, id)

    const calendar4ActiveDays = new ActiveDays(
      this.#getActiveDaysForCalendar4(),
    )
    id = 4
    const calendar4 = new CalendarItem('Katas', calendar4ActiveDays, id)

    return [calendar1, calendar2, calendar3, calendar4]
  }
}
