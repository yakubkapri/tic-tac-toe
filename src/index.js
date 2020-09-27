// Store player turns
let currentPlayer = "x";
let gameStatus = true;

// rendering all box elements
const boxes = document.getElementsByClassName("box");

// loops through all the elements
for (let i = 0; i < boxes.length; i++) {
  // add event listener to each box
  boxes[i].addEventListener("click", function () {
    if (boxes[i].innerHTML.trim() == "" && gameStatus == true) {
      boxes[i].innerHTML = currentPlayer;

      //change player turns
      currentPlayer = currentPlayer == "x" ? "o" : "x";

      //check 5 matching X or O
      if (
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[1].innerHTML == boxes[2].innerHTML &&
        boxes[2].innerHTML == boxes[3].innerHTML &&
        boxes[3].innerHTML == boxes[4].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[0].innerHTML == boxes[1].innerHTML &&
        boxes[1].innerHTML == boxes[2].innerHTML &&
        boxes[2].innerHTML == boxes[3].innerHTML &&
        boxes[3].innerHTML == boxes[4].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[5].innerHTML == boxes[6].innerHTML &&
        boxes[6].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTML == boxes[9].innerHTML &&
        boxes[5].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[10].innerHTML == boxes[11].innerHTML &&
        boxes[11].innerHTML == boxes[12].innerHTML &&
        boxes[12].innerHTML == boxes[13].innerHTML &&
        boxes[13].innerHTML == boxes[14].innerHTML &&
        boxes[10].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[15].innerHTML == boxes[16].innerHTML &&
        boxes[16].innerHTML == boxes[17].innerHTML &&
        boxes[17].innerHTML == boxes[18].innerHTML &&
        boxes[18].innerHTML == boxes[19].innerHTML &&
        boxes[15].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      //Column
      if (
        boxes[0].innerHTML == boxes[5].innerHTML &&
        boxes[5].innerHTML == boxes[10].innerHTML &&
        boxes[10].innerHTML == boxes[15].innerHTML &&
        boxes[15].innerHTML == boxes[20].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[1].innerHTML == boxes[6].innerHTML &&
        boxes[6].innerHTML == boxes[11].innerHTML &&
        boxes[11].innerHTML == boxes[16].innerHTML &&
        boxes[16].innerHTML == boxes[21].innerHTML &&
        boxes[1].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[2].innerHTML == boxes[7].innerHTML &&
        boxes[7].innerHTML == boxes[12].innerHTML &&
        boxes[12].innerHTML == boxes[17].innerHTML &&
        boxes[17].innerHTML == boxes[22].innerHTML &&
        boxes[2].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[3].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTML == boxes[13].innerHTML &&
        boxes[13].innerHTML == boxes[18].innerHTML &&
        boxes[18].innerHTML == boxes[23].innerHTML &&
        boxes[3].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[4].innerHTML == boxes[9].innerHTML &&
        boxes[9].innerHTML == boxes[14].innerHTML &&
        boxes[14].innerHTML == boxes[19].innerHTML &&
        boxes[19].innerHTML == boxes[24].innerHTML &&
        boxes[4].innerHTML.trim() != ""
      ) {
        showWinner();
      }

      // Diagonal
      if (
        boxes[0].innerHTML == boxes[6].innerHTML &&
        boxes[6].innerHTML == boxes[12].innerHTML &&
        boxes[12].innerHTML == boxes[18].innerHTML &&
        boxes[18].innerHTML == boxes[24].innerHTML &&
        boxes[0].innerHTML.trim() != ""
      ) {
        showWinner();
      }
      if (
        boxes[4].innerHTML == boxes[8].innerHTML &&
        boxes[8].innerHTML == boxes[12].innerHTML &&
        boxes[12].innerHTML == boxes[16].innerHTML &&
        boxes[16].innerHTML == boxes[20].innerHTML &&
        boxes[4].innerHTML.trim() != ""
      ) {
        showWinner();
      }
    }
  });
}

// //mark for x or o
// function mark() {}

//display the winner
function showWinner() {
  let winner = currentPlayer == "x" ? "2" : "1";
  setTimeout(function () {
    alert("player " + winner + " is the winner ");
  }, 1000);
  gameStatus = false;
}
