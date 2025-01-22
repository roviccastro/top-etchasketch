const mainContainer = document.querySelector("div");
const gridBtn = document.getElementById("grid-btn")

let gridNumber = 16;
let numericSize = 500 / gridNumber;

function createSquare(){
  let square = document.createElement("div");
  square.classList.toggle("square");

  square.style.width = `${numericSize}px`;
  square.style.height = `${numericSize}px`;

  square.addEventListener("mouseover" ,colorSquare);
  mainContainer.appendChild(square);
}

function colorSquare(e){
  e.target.style.backgroundColor = "gray";
}

function askUser(){
  gridNumber = window.prompt('Enter grid size: ', 16);

  if (gridNumber <= 100){
    console.log('Valid');
  } else {
    alert('Exceed maximum grid size! (Maximum of 100)')
    gridNumber = window.prompt('Enter grid size: ', 16);
  }
}

for (let a = 1; a <= gridNumber * gridNumber; a++){
  createSquare()
}

gridBtn.addEventListener("click", askUser);