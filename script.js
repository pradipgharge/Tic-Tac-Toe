const newGame = document.getElementById("new-game-btn");
const homebtn = document.getElementById("home-btn");
const winnerDiv = document.getElementById("winner-div");
const playerBoxOne = document.getElementById("player-box1");
const playerBoxTwo = document.getElementById("player-box2");

const emojiX = localStorage.getItem("emojiX");
const emojiO = localStorage.getItem("emojiO");

const selectedEmoji = localStorage.getItem("selectedEmoji");

let currentPlayer = selectedEmoji;
let arr = Array(9).fill(null);

window.addEventListener("load", () => {
  playerBoxOne.innerText = selectedEmoji === "X" ? emojiX : emojiO;
  playerBoxTwo.innerText = selectedEmoji === "X" ? emojiO : emojiX;
});

homebtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});

newGame.addEventListener("click", () => {
  currentPlayer = selectedEmoji;
  winnerDiv.style.display = "none";
  arr = Array(9).fill(null);
  const cells = document.querySelectorAll(".col");

  cells.forEach((cell) => {
    cell.innerText = "";
  });
});

function handleClick(el) {
  // Check if the game has already ended
  if (winnerDiv.style.display === "block") {
    return;
  }
  const cellNumber = Number(el.id);

  // Check if the cell is already filled
  if (arr[cellNumber] !== null) {
    return;
  }
  arr[cellNumber] = currentPlayer;

  el.innerText = currentPlayer === "X" ? emojiX : emojiO;
  checkWinner();

  //updating the value of currentplayer for next turn
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])
  ) {
    winnerDiv.style.display = "block";
    winnerDiv.innerText = `Winner is ${
      currentPlayer === "X" ? emojiX : emojiO
    } !!!`;
    return;
  }
  if (!arr.some((el) => el === null)) {
    winnerDiv.style.display = "block";
    winnerDiv.innerText = `It's a Draw !!!`;
  }
}

document.addEventListener("DOMContentLoaded", function () {});
