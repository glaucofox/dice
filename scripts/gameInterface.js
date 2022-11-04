function rolar() {
  yahtzee.roll()
  btnRoll = document.querySelector('#btnRoll')
  disableElement(btnRoll)
  updateDices(yahtzee.rollResult)
}

function updateDices(result) {
  document.querySelector('#dice1').innerHTML = result[0];
  document.querySelector('#dice2').innerHTML = result[1];
  document.querySelector('#dice3').innerHTML = result[2];
  document.querySelector('#dice4').innerHTML = result[3];
  document.querySelector('#dice5').innerHTML = result[4];
}

function updateValue(text, btn, param) {
  game.addScore(yahtzee.possibleMoves, param)
  console.log(game.card)
  document.querySelector('#'+text).innerHTML = game.card[param]
  document.querySelector('#ScoreTotal').innerHTML = game.card.total
  button = document.querySelector('#'+btn)
  btnRoll = document.querySelector('#btnRoll')
  disableElement(button)
  enableElement(btnRoll)
}

function disableElement(elem) {
  elem.disabled = true
  elem.classList.add("disabled")
}

function enableElement(elem) {
  elem.disabled = false
  elem.classList.remove("disabled")
}
