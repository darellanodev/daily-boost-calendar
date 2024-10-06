export class ActiveDays {
  #days: string[]
  constructor(days: string[]) {
    this.#days = days
  }
  get json(): string {
    let result = '['
    for (const element of this.#days) {
      result += `"${element}",`
    }
    result = result.slice(0, -1)
    result += ']'

    return result
  }

  get days(): string[] {
    return this.#days
  }
}
