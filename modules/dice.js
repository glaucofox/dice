export class Dice {

  constructor(sides = 6) {
    this.sides = sides
  }

  roll() {
    let result = Math.floor(Math.random()*this.sides)+1;
    if (this.sides == 10) result += '0%'

    return result
  }

}
