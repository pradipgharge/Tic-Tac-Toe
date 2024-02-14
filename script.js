const newGame = document.getElementById("new-game-btn");
const homebtn = document.getElementById("home-btn");
const winnerDiv = document.getElementById("winner-div");

let currentPlayer = "X";
let arr = Array(9).fill(null);

homebtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});

newGame.addEventListener("click", () => {
  winnerDiv.style.display = "none";
  arr = Array(9).fill(null);
  const cells = document.querySelectorAll(".col");

  cells.forEach((cell) => {
    cell.innerText = "";
    cell.classList.remove("x", "o");
  });

  currentPlayer = "X";
});

function handleClick(el) {
  const cellNumber = Number(el.id);
  if (arr[cellNumber] !== null) {
    return;
  }
  arr[cellNumber] = currentPlayer;

  // Add class based on current player
  el.classList.add(currentPlayer.toLowerCase());

  el.innerText = currentPlayer;
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
    winnerDiv.innerText = `Winner is ${currentPlayer}!!!`;
    return;
  }
  if (!arr.some((el) => el === null)) {
    winnerDiv.style.display = "block";
    winnerDiv.innerText = `The game is Draw!!!`;
  }
}
