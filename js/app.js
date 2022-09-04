/*-------------------------------- Constants --------------------------------*/




/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = [(sq0 = document.getElementById('sq0')), (sq1 = document.getElementById('sq1')), (sq2 = document.getElementById('sq2')), (sq3 = document.getElementById('sq3')), (sq4 = document.getElementById('sq4')), (sq5 = document.getElementById('sq5')), (sq6 = document.getElementById('sq6')), (sq7 = document.getElementById('sq7')), (sq8 = document.getElementById('sq8')),]
const messageEl = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  //x is 1, -1 is O
  winner = null
  render()
}


function render() {
  boardRender()
  messageRender()
  winnderRender()
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
    if (element === 0) {
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

function winnderRender(){
  if (winner === 1){
    messageEl.textContent = 'Congrats Player X'
  }
  if (winner === -1){
    messageEl.textContent = 'Congrats Player O'
  }
  if (winner === 'T') {
    messageEl.textContent = 'Game is Scratch'
  }
}
init()