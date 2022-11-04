import { YahtzeeCard } from "./yahtzeeCard.js"

export class YahtzeeGame {

  constructor() {
    this.card = new YahtzeeCard()
  }

  addScore(moves, where) {
    switch(where) {
      case 1:
        this.card.ones = moves[1]
        break
      case 2:
        this.card.twos = moves[2]
        break
      case 3:
        this.card.threes = moves[3]
        break
      case 4:
        this.card.fours = moves[4]
        break
      case 5:
        this.card.fives = moves[5]
        break
      case 6:
        this.card.sixes = moves[6]
        break
      case 'three-of-a-kind':
        this.card.threeOfAKind = moves['three-of-a-kind']
        break
      case 'four-of-a-kind':
          this.card.fourOfAKind = moves['four-of-a-kind']
          break
      case 'full-house':
        this.card.fullHouse = moves['full-house']
        break
      case 'small-straight':
        this.card.smallStraight = moves['small-straight']
        break
      case 'large-straight':
        this.card.largeStraight = moves['large-straight']
        break
      case 'yahtzee':
        this.card.yahtzee = moves['yahtzee']
        break
      case 'chance':
        this.card.chance = moves['total']
        break
    }
  }

  updateBoard() {
    document.querySelector('#dice5').innerHTML = result[4];
  }
}
