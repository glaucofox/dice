export class History {

  history = new Array()

  addHistory(dice, value) {
    this.history.push("1d"+ dice +": "+ value)
  }

  getHistory() {
    return this.history
  }
}
