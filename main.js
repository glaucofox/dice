import { Dice } from './modules/dice.js'

window.dice = new Dice()

window.rollDice = function(sides = 6) {
  dice.sides = sides
  let result = dice.roll()
  var text = "Rolled 1d" + sides + " for " + result
  console.log(text)
  document.querySelector('#log').innerHTML = text
  updateScreen(result)
  return result
}

window.updateScreen = function(text) {
  document.querySelector('#header').innerHTML = text
}
