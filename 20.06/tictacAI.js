const board = document.getElementById("board");
document.body.style.fontFamily = "Arial";

console.log(board);

const cells = [];
let currentPlayer = "X";
let xMoves = [];
let oMoves = [];

const winningCombinations = [
  // All possible winning combinations
  // Rows
  [0, 1, 2], // First row
  [3, 4, 5], // Second row
  [6, 7, 8], // Third row
  // Columns
  [0, 3, 6], // First column
  [1, 4, 7], // Second column
  [2, 5, 8], // Third column
  // Diagonals
  [0, 4, 8], // First diagonal
  [2, 4, 6] // Second diagonal
];

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.style.backgroundImage = "url('images/joanna-kosinska-Uvl3W4XWd4U-unsplash.jpg')";
    cell.style.backgroundSize = "cover";
    cell.style.opacity = 0.3;
    cell.classList.add("cell");
    board.appendChild(cell);
    cells.push(cell);
    cell.addEventListener("click", function () {
      makeMove(i, currentPlayer);
    });
  }
}

function makeMove(index, player) {
  if (cells[index].textContent === "") {
    cells[index].textContent = player;

    if (player === "X") {
      cells[index].style.backgroundColor = "lightblue";
      xMoves.push(index);
    } else {
      cells[index].style.backgroundColor = "lightcoral";
      oMoves.push(index);
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if (currentPlayer === "O") {
      // Computer's turn
      makeComputerMove();
    }
  }

  gameFinished();
}

function makeComputerMove() {
  // Generate a random move for the computer
  const availableMoves = cells
    .map((cell, index) => (cell.textContent === "" ? index : null))
    .filter((index) => index !== null);

  if (availableMoves.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const computerMove = availableMoves[randomIndex];
    makeMove(computerMove, currentPlayer);
  }
}

function gameFinished() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (combination.every((value) => xMoves.includes(value))) {
      console.log("Player X won");
      finishGame("Player X won");
    }
    if (combination.every((value) => oMoves.includes(value))) {
      console.log("Player O won");
      finishGame("Player O won");
    }
  }
  const totalMoves = oMoves.length + xMoves.length;
  if (totalMoves === 9) {
    console.log("Draw");
    finishGame("Draw");
  }
}

function finishGame(text) {
  setTimeout(() => {
    if (!alert(text)) {
      window.location.reload();
    }
  }, 100);
}

createBoard();

console.log(cells);
