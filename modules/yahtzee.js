import { Dice } from './dice.js'

export class Yahtzee {

  constructor() {
    this.dice = new Dice();
    this.possibleMoves = Array();
  }

  roll() {
    this.rollResult = this.dice.rollManyDices(6, 5)
    this.evalPlay(this.rollResult)
  }

  evalPlay(result) {
    let consolidated = this.checkForNumbers(result)
    console.log("Consolidated: ", consolidated)
    this.possibleMoves = this.checkPossibleMoves(consolidated)
  }

  checkPossibleMoves(consolidated) {
    let results = consolidated
    results["threeOfAKind"] = this.checkTriple(consolidated)
    results["fourOfAKind"] = this.checkQuadruple(consolidated)
    results["fullHouse"] = this.checkFullHouse(consolidated)
    results["smallStraight"] = this.checkSmallStraight(consolidated)
    results["largeStraight"] = this.checkLargeStraight(consolidated)
    results["yahtzee"] = this.checkYahtzee(consolidated, 5)
    results["chance"] = this.sumDiceResults(consolidated)

    return results
  }

  checkSame(consolidated, needle) {
    for(let i = 1; i <= 6; i++) {
      if (consolidated[i] === needle) return true
    }

    return false
  }

  checkLargerEqualThan(consolidated, needle) {
    for(let i = 1; i <= 6; i++) {
      if (consolidated[i] >= needle) return i
    }

    return false
  }

  checkSmallStraight(consolidated) {
    if (this.checkLargeStraight(consolidated)) {
      return true
    }

    if (consolidated[3] != 0 &&
        consolidated[4] != 0 &&
        (
          (consolidated[1] != 0 && consolidated[2] != 0) ||
          (consolidated[2] != 0 && consolidated[5] != 0) ||
          (consolidated[5] != 0 && consolidated[6] != 0)
        )
    ) {
      return true
    }

    return false
  }

  checkLargeStraight(consolidated) {
    if (consolidated[2] === 1 &&
        consolidated[3] === 1 &&
        consolidated[4] === 1 &&
        consolidated[5] === 1 &&
        (consolidated[1] === 1 || consolidated[6] === 1))
      return true
    return false
  }

  checkPair(consolidated) {
    return this.checkSame(consolidated, 2)
  }

  checkTriple(consolidated) {
    return this.checkLargerEqualThan(consolidated, 3) ? this.checkLargerEqualThan(consolidated, 3) * 3 : 0
  }

  checkQuadruple(consolidated) {
    return this.checkLargerEqualThan(consolidated, 4) ? this.checkLargerEqualThan(consolidated, 4) * 4 : 0
  }

  checkYahtzee(consolidated) {
    return this.checkSame(consolidated, 5)
  }

  checkFullHouse(consolidated) {
    let pair = this.checkPair(consolidated)
    let triple = this.checkTriple(consolidated) != 0
    return (pair && triple)
  }

  checkForNumbers(result) {
    let evaluated = Array()
    for (let i = 1; i <= 6; i++) {
      evaluated[i] = this.countNumbers(result, i)
    }
    return evaluated
  }

  sumDiceResults(consolidated) {
    let sum = 0;
    for (let i = 1; i <= 6; i ++) {
      sum += this.sumResult(i, consolidated)
    }

    return sum
  }

  sumResult(number, consolidated) {
    return consolidated[number] * number
  }

  countNumbers(result, numberToCount) {
    return result.filter(x => x==numberToCount).length
  }

}
