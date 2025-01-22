const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "container");
document.body.appendChild(mainContainer);

function createRowContainer(){
  const rowContainer = document.createElement("div");
  rowContainer.classList.toggle("row-container");
}

function createSquare(){
  let square = document.createElement("div");
  square.classList.toggle("square");
  mainContainer.appendChild(square);
}

function colorSquare(e){
  e.target.style.backgroundColor = "gray";
}

for (let a = 1; a <= 256; a++){
  createSquare()
}

mainContainer.addEventListener("mouseover", colorSquare);