window.scoreButtonsControl = Array()

initTurn()


function initTurn() {
  scoreButtonsControl = ['#btnScoreAces', '#btnScoreTwos', '#btnScoreThrees', 
                              '#btnScoreFours', '#btnScoreFives', '#btnScoreSixes', 
                              '#btnScore3OfAKind', '#btnScore4OfAKind', '#btnScoreFullHouse', 
                              '#btnScoreSmallStraight', '#btnScoreLargeStraight', '#btnScoreYahtzee', 
                              '#btnScoreChance']
  btnRoll = document.querySelector('#btnRoll')
  disableScoreButtons()
  enableElement(btnRoll)
}

function reset() {
  location.reload()
}

function disableScoreButtons() {
  window.scoreButtonsControl.forEach((e) => {
    button = document.querySelector(e)
    disableElement(button)
  })
}

function enableScoreButtons() {
  window.scoreButtonsControl.forEach((e) => {
    button = document.querySelector(e)
    enableElement(button)
  })
}

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
  enableScoreButtons()
}

function updateValue(text, param) {
  let btnId = '#'+text

  game.addScore(yahtzee.possibleMoves, param)
  updateScoreCard(btnId, param)
  disableScoreButtons()
  removeClickedButtonFromEnableList('#btn'+text)
  enableRollButton()
}

function enableRollButton() {
  btnRoll = document.querySelector('#btnRoll')
  if (window.scoreButtonsControl.length <= 0) {
    btnRoll.innerHTML = "Reset"
    btnRoll.addEventListener("click", reset);
  }
  enableElement(btnRoll)
}

function updateScoreCard(btnId, param) {
  console.log(game.card)
  document.querySelector(btnId).innerHTML = game.card[param]
  document.querySelector('#ScoreTotal').innerHTML = game.card.total
}

function disableElement(elem) {
  elem.disabled = true
  elem.classList.add("disabled")
}

function enableElement(elem) {
  elem.disabled = false
  elem.classList.remove("disabled")
}

function removeClickedButtonFromEnableList(btnOutside) {
  let result = window.scoreButtonsControl.filter((e) => {
    return e !== btnOutside
  })
  console.log(result)
  window.scoreButtonsControl = result
}
