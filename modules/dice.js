export class Dice {

  constructor(sides = 6) {
    this.sides = sides
  }

  roll() {
    let result = Math.floor(Math.random()*this.sides)+1;
    if (this.sides == 10) result += '0%'

    return result
  }

  rollManyDices(sides, numberOfDices) {
    let results = Array();
    for (let i = 0; i < numberOfDices; i++) {
      results.push(this.roll(sides));
    }
    console.log("Roll result: {}", results)
    return results;
  }

}
