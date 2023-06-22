const board = document.getElementById("board");
document.body.style.fontFamily= "Arial";

console.log(board);

const cells = [];
let currentPlayer = "X";
let xMoves = [];
let oMoves = [];

const winningCombinations = [ // Alle möglichen Gewinnkombinationen
// Reihen
[0, 1, 2], // Erste Reihe
[3, 4, 5], // Zweite Reihe
[6, 7, 8], // Dritte Reihe
// Spalten
[0, 3, 6], // Erste Spalte
[1, 4, 7], // Zweite Spalte
[2, 5, 8], // Dritte Spalte
// Diagonalen
[0, 4, 8], // Erste Diagonale
[2, 4, 6] // Zweite Diagonale
];

function createBoard() {
    for (let i=0; i < 9; i++){
        const cell = document.createElement("div");
        cell.style.backgroundImage = "url('images/joanna-kosinska-Uvl3W4XWd4U-unsplash.jpg')";
        cell.style.backgroundSize = "cover";
        cell.style.opacity = 0.3;
        cell.classList.add("cell");
        board.appendChild(cell);
        cells.push(cell);
        cell.addEventListener("click", function(){
            makeMove(i);
        //cell.addEventListener("click", () =>{
                //makeMove(i); (same as above line, anonymous function)
    })
    }
}

function makeMove(index) {
    if (cells[index].textContent === "" ){
        cells[index].textContent = currentPlayer;

        if (currentPlayer === "X"){
            cells[index].style.backgroundColor = "lightblue";
            currentPlayer = "O";
            xMoves.push(index);
        }
            else {
                cells[index].style.backgroundColor = "lightcoral"; 
                currentPlayer = "X";
                oMoves.push(index);
            }
        }
        gameFinished();
    }
    function gameFinished(){

        for(let i = 0; i < winningCombinations.length; i++){
            const combination = winningCombinations[i];
            //console.log(combination);
            if (combination.every((value) => xMoves.includes(value))){
                console.log("Player X won");
                finishGame("Player X won");
            }
            if (combination.every((value) => oMoves.includes(value))){
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
    function finishGame(text){
        setTimeout(() => { 
        if (!alert(text)){
            window.location.reload();
        }
    }, 100)
    }
createBoard();

console.log(cells);