export class Day {
  #label: string
  #isOn = false
  constructor(label: string) {
    this.#label = label
  }
  get label() {
    return this.#label
  }
  get isOn() {
    return this.#isOn
  }
}
