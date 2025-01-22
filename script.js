const mainContainer = document.querySelector("div");

let numericSize = 500 / 16;

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

for (let a = 1; a <= 16*16; a++){
  createSquare()
}