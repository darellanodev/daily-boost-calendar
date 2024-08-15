import moment from "moment"

export class DatesProvider {
  #totalWeeks: number
  constructor(totalWeeks: number) {
    this.#totalWeeks = totalWeeks
  }
  getDates(): string[] {
    const result: string[] = []
    const currentDate = moment()
    const currentDay = currentDate.day()
    const sunday = 0

    // from current day to the past sunday
    result.push(currentDate.format("DD/MM/YYYY"))
    let pastDate = currentDate.clone()
    for (let day = sunday; day < currentDay; day++) {
      pastDate = currentDate.clone().subtract(day + 1, "days")
      console.log(pastDate.format("DD/MM/YYYY"))
      result.push(pastDate.format("DD/MM/YYYY"))
    }

    // add 4 weeks
    const daysOfWeek = 7
    for (let j = 0; j < this.#totalWeeks; j++) {
      for (let k = 0; k < daysOfWeek; k++) {
        pastDate = pastDate.clone().subtract(1, "days")
        result.push(pastDate.format("DD/MM/YYYY"))
      }
    }
    result.reverse()
    return result
  }
}
