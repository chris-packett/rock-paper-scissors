const updatePlayerName = () => {
  const playerName = document.querySelector('#player-name-input').value
  document.querySelector('#player-name-display').textContent = playerName
}

const rockPaperScissorsDict = {
  1: 'Rock',
  2: 'Paper',
  3: 'Scissors'
}

let randomGuess

const randomComputerGuess = () => {
  const randomNumber = Math.ceil(Math.random() * 3)
  randomGuess = rockPaperScissorsDict[randomNumber]
  console.log(randomGuess)
}

const compareWithComputer = (playerSelection) => {
  const rockWin = playerSelection === 'Rock' && randomGuess === 'Scissors'
  const paperWin = playerSelection === 'Paper' && randomGuess === 'Rock'
  const scissorWin = playerSelection === 'Scissors' && randomGuess === 'Paper'

  if (playerSelection === randomGuess) {
    randomComputerGuess()
    const message = 'You and the computer picked the same thing! Go again'
    document.querySelector('#output').textContent = message
  }
  else if (rockWin || paperWin || scissorWin) {
    const message = 'Good job. Click another option to play again.'
    document.querySelector('#output').textContent = message
    randomComputerGuess()
  }
  else {
    const message = 'You lose. Click another option to play again.'
    document.querySelector('#output').textContent = message
    randomComputerGuess()
  }
}

document.addEventListener('DOMContentLoaded', randomComputerGuess)
document.querySelector('#player-name-input').onchange = updatePlayerName
document.querySelector('#rock-button').addEventListener('click', () => compareWithComputer('Rock'))
document.querySelector('#paper-button').addEventListener('click', () => compareWithComputer('Paper'))
document.querySelector('#scissors-button').addEventListener('click', () => compareWithComputer('Scissors'))

