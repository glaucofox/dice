import { YahtzeeCard } from "./yahtzeeCard.js"

export class YahtzeeGame {

  constructor() {
    this.card = new YahtzeeCard()
  }

  addScore(moves, where) {
    switch(where) {
      case 1:
        this.card.ones = moves[1]
        this.card[1] = this.card.ones
        this.card.total += this.card[1]
        break
      case 2:
        this.card.twos = moves[2] * 2
        this.card[2] = this.card.twos
        this.card.total += this.card[2]
        break
      case 3:
        this.card.threes = moves[3] * 3
        this.card[3] = this.card.threes
        this.card.total += this.card[3]
        break
      case 4:
        this.card.fours = moves[4] * 4
        this.card[4] = this.card.fours
        this.card.total += this.card[4]
        break
      case 5:
        this.card.fives = moves[5] * 5
        this.card[5] = this.card.fives
        this.card.total += this.card[5]
        break
      case 6:
        this.card.sixes = moves[6] * 6
        this.card[6] = this.card.sixes
        this.card.total += this.card[6]
        break
      case 'threeOfAKind':
        this.card.threeOfAKind = moves[where]
        this.card.total += this.card.threeOfAKind
        break
      case 'fourOfAKind':
          this.card.fourOfAKind = moves[where]
          this.card.total += this.card.fourOfAKind
          break
      case 'fullHouse':
        this.card.fullHouse = moves[where] ? 25 : 0
        this.card.total += this.card.fullHouse
        break
      case 'smallStraight':
        this.card.smallStraight = moves[where] ? 30 : 0
        this.card.total += this.card.smallStraight
        break
      case 'largeStraight':
        this.card.largeStraight = moves[where] ? 40 : 0
        this.card.total += this.card.largeStraight
        break
      case 'yahtzee':
        this.card.yahtzee = moves[where] ? 50 : 0
        this.card.total += this.card.yahtzee
        break
      case 'chance':
        this.card.chance = moves[where]
        this.card.total += this.card.chance
        break
    }
  }
}
