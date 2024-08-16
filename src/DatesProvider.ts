import moment from "moment"

export class DatesProvider {
  #dates: string[] = []
  #totalWeeks: number
  constructor(totalWeeks: number) {
    this.#totalWeeks = totalWeeks
  }
  get dates() {
    return this.#dates
  }
  #getDatesFromCurrentToPreviousSunday() {
    const currentDate = moment()
    const currentDay = currentDate.day()
    const sunday = 0

    this.#dates.push(currentDate.format("DD/MM/YYYY"))
    let pastDate = currentDate.clone()
    for (let day = sunday; day < currentDay; day++) {
      pastDate = currentDate.clone().subtract(day + 1, "days")
      console.log(pastDate.format("DD/MM/YYYY"))
      this.#dates.push(pastDate.format("DD/MM/YYYY"))
    }
    return pastDate
  }
  #getWeeks(pastDate: moment.Moment) {
    // add 4 weeks
    const daysOfWeek = 7
    for (let j = 0; j < this.#totalWeeks; j++) {
      for (let k = 0; k < daysOfWeek; k++) {
        pastDate = pastDate.clone().subtract(1, "days")
        this.#dates.push(pastDate.format("DD/MM/YYYY"))
      }
    }
  }
  calculate() {
    let pastDate = this.#getDatesFromCurrentToPreviousSunday()
    this.#getWeeks(pastDate)
    this.#dates.reverse()
  }
}
