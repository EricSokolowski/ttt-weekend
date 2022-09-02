/*-------------------------------- Constants --------------------------------*/
const squareEls = [document.getElementById('sq0'), document.getElementById('sq1'), document.getElementById('sq2'), document.getElementById('sq3'), document.getElementById('sq4'), document.getElementById('sq5'), document.getElementById('sq6'), document.getElementById('sq7'), document.getElementById('sq8')]



const messageEl = document.getElementById('message')



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}


function render() {

}