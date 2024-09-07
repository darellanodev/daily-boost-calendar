import moment from 'moment'

export class DatesProvider {
  #dates: string[] = []
  #totalWeeks: number
  constructor(totalWeeks: number) {
    this.#totalWeeks = totalWeeks
  }
  get dates() {
    return this.#dates
  }
  calculate() {
    const currentDate = moment()
    const currentDay = currentDate.day()
    const sunday = 0

    // from current day to the past sunday
    this.#dates.push(currentDate.format('DD/MM/YYYY'))
    let pastDate = currentDate.clone()
    for (let day = sunday; day < currentDay; day++) {
      pastDate = currentDate.clone().subtract(day + 1, 'days')
      this.#dates.push(pastDate.format('DD/MM/YYYY'))
    }

    // add 4 weeks
    const daysOfWeek = 7
    for (let j = 0; j < this.#totalWeeks; j++) {
      for (let k = 0; k < daysOfWeek; k++) {
        pastDate = pastDate.clone().subtract(1, 'days')
        this.#dates.push(pastDate.format('DD/MM/YYYY'))
      }
    }
    this.#dates.reverse()
  }
}
