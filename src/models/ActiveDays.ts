export class ActiveDays {
  #activeDaysList: string[]
  constructor(activeDaysList: string[]) {
    this.#activeDaysList = activeDaysList
  }
  get json(): string {
    let result = '['
    for (const element of this.#activeDaysList) {
      result += `'${element}',`
    }
    result = result.slice(0, -1)
    result += ']'

    return result
  }
}
