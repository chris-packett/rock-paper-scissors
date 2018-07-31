const rockPaperScissorsDict = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors'
}

let randomGuess

const randomComputerGuess = () => {
  const randomNumber = Math.ceil(Math.random() * 3)
  console.log(randomNumber)
  randomGuess = rockPaperScissorsDict[randomNumber]
  console.log(randomGuess)
}

const updatePlayerName = () => {
  const playerName = document.querySelector('#player-name-input').value
  document.querySelector('#player-name-display').textContent = playerName
}

const compareForRock = () => {
  compareWithComputer('Rock')
}

const compareForPaper = () => {
  compareWithComputer('Paper')
}

const compareWithComputer = (playerSelection) => {
  const rockWin = playerSelection === 'Rock' && randomGuess === 'Scissors'
  const paperWin = playerSelection === 'Paper' && randomGuess === 'Rock'
  const scissorWin = playerSelection === 'Scissors' && randomGuess === 'Paper'

  if (playerSelection === randomGuess) {
    randomComputerGuess()
  }
  else if (rockWin || paperWin || scissorWin) {
    document.querySelector('#output').textContent = 'Good job'
  }
  else {
    document.querySelector('#output').textContent = 'You lose'
  }
}

document.addEventListener('DOMContentLoaded', randomComputerGuess)
document.querySelector('#player-name-input').onchange = updatePlayerName
document.querySelector('#rock-button').addEventListener('click', compareForRock)
document.querySelector('#paper-button').addEventListener('click', compareForPaper)
document.querySelector('#scissors-button').addEventListener('click', () => compareWithComputer('Scissors'))

