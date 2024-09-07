export class DayItem {
  #id: number
  #title: string
  #completed = false
  constructor(id: number, title: string, completed: boolean) {
    this.#id = id
    this.#title = title
    this.#completed = completed
  }
  get id() {
    return this.#id
  }
  get title() {
    return this.#title
  }
  get completed() {
    return this.#completed
  }
}
