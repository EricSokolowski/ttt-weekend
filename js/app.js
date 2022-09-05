/*-------------------------------- Constants --------------------------------*/
winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = [(sq0 = document.getElementById('sq0')), (sq1 = document.getElementById('sq1')), (sq2 = document.getElementById('sq2')), (sq3 = document.getElementById('sq3')), (sq4 = document.getElementById('sq4')), (sq5 = document.getElementById('sq5')), (sq6 = document.getElementById('sq6')), (sq7 = document.getElementById('sq7')), (sq8 = document.getElementById('sq8')),]
const messageEl = document.getElementById('message')
const resetBtnEl = document.getElementById('reset-button')

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square){
    square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', reset)

/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  //x is 1, -1 is O
  winner = null
  render()
}

function handleClick({target: {id}}){
  if (!winner) {
    const sqIdx = parseInt(id.slice(2))
    if (board[sqIdx] !== null) return 
      board[sqIdx] = turn
      turn *= -1
      getWinner() 
      render()
  }
}

function getWinner() {
  // sum = if  all 3 spots on board have a value of 1 aka sum of 3 winner = 1
  // if -3 winner = 1
  //if !board.includes null and winner !== 1 or -1 winner = T
  winningCombos.forEach(function(combo){
    let sum = board[combo[0]] + board[combo[1]] + board[combo[2]]
    if (sum === 3) {
      winner = turn
    } else if (sum === -3) {
      winner = turn
    }
  })
    if (!board.includes(null) && winner !== turn) {
      winner = 'T'
    }
  }

function render() {
  boardRender()
  messageRender()
  winnerRender()
}

function boardRender(){
  board.forEach(function(element, idx) {
    let sqr = squareEls[idx]
    sqr.textContent = ''
    sqr.classList.add('standard')
    if (element === 1) {
      sqr.classList.add('x')
      sqr.textContent = 'X'
    }
    if (element === -1) {
      sqr.classList.add('o')
      sqr.textContent = 'O'
    }
  })
}

function messageRender(){
  if (turn === 1) {
    messageEl.textContent = 'X Turn'
  }
  if (turn === -1) {
    messageEl.textContent = 'O Turn'
  }
}

function winnerRender(){
  if (winner === 1){
    messageEl.textContent = 'Congrats Player O'
  }
  if (winner === -1){
    messageEl.textContent = 'Congrats Player X'
  }
  if (winner === 'T') {
    messageEl.textContent = 'Game is Scratch'
  }
}

function reset () {
  init()
}

init()