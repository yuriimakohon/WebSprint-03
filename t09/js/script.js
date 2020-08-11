let move = 'X';
let turnsCounter = document.querySelector("#counter");
let field = document.querySelector(".field");
let fieldMap = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winMap = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [6, 4, 2]];

field.addEventListener("click", setMove);

function setMove(event) {
  let cell = event.target;

  if (cell.className === "cell") {
    if (cell.innerHTML) {
      alert("Already taken!");
    } else {
      cell.innerHTML = move;
      changePlayer(cell.id.charAt(1));
    }
  }
}

function changePlayer(cellIndex) {
  fieldMap[cellIndex] = move;

  if (move === 'X') {
    document.querySelector("#player2").style.background = "orange";
    document.querySelector("#player1").style.background = "#ddd";
    move = 'O';
  } else {
    document.querySelector("#player2").style.background = "#ddd";
    document.querySelector("#player1").style.background = "orange";
    move = 'X';
  }
  turnsCounter.innerHTML = +turnsCounter.innerHTML + 1;
  checkWin();
}

function checkWin() {
  for (let variant in winMap) {
    idxArr = winMap[variant];
    if ((fieldMap[idxArr[0]] == fieldMap[idxArr[1]])
      && (fieldMap[idxArr[1]] == fieldMap[idxArr[2]])
      && (fieldMap[idxArr[2]] != 0)) {
      setWiner(idxArr);
    }
  }
}

function setWiner(idxArr) {
  move === 'X' ? move = 'O' : move = 'X';
  document.querySelector(`#c${idxArr[0]}`).className += " win";
  document.querySelector(`#c${idxArr[1]}`).className += " win";
  document.querySelector(`#c${idxArr[2]}`).className += " win";
  document.querySelector(".sidebar").style.background = "green";
  document.querySelector(".gameStatus").style.color = "white";
  if (move == 'X') {
    document.querySelector("#winStatus").innerHTML = "Player 1<br>won!";
  } else {
    document.querySelector("#winStatus").innerHTML = "Player 2<br>won!";
  }
  document.querySelector("#winStatus").style.visibility = "visible";
}
