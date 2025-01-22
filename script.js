const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "container");
document.body.appendChild(mainContainer);

function createSquare(){
  let square = document.createElement("div");
  square.classList.toggle("square");
  mainContainer.appendChild(square);
}

for (let a = 1; a <= 256; a++){
  createSquare()
}