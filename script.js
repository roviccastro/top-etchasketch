const mainContainer = document.querySelector("#container");
const gridBtn = document.getElementById("grid-btn");
const opacityBtn = document.getElementById("opacity-btn");

let gridNumber = 16;
let numericSize = 500 / gridNumber;
let opacityToggle = true;

function randomNumber(rgb, opacity){
  if (rgb){
    rgb = Math.floor(Math.random() * 255);
    return rgb;
  } else if (opacity){
    opacity += .10;
    return opacity;
  } else {
    return
  }
}

function createSquare(){
  let square = document.createElement("div");
  square.classList.add("square");

  square.style.width = `${numericSize}px`;
  square.style.height = `${numericSize}px`;

  square.addEventListener("mouseover" ,colorSquare);
  mainContainer.appendChild(square);
}

function colorSquare(e){

  if (e.target.classList == "square"){
    let color = `rgba(${randomNumber('_')}, ${randomNumber('_')}, ${randomNumber('_')}, 1)`

    e.target.style.backgroundColor = `${color}`;
    
    if (opacityToggle){
      e.target.style.opacity = '0.10';
    } else {
      e.target.style.opacity = '1';
    }

    e.target.classList.remove("square");
  } else {
    increaseSquareOpacity(e, opacityToggle);
  }
}

function increaseSquareOpacity(e, onoff){
  if (onoff){
    e.target.style.opacity = `${+(e.target.style.opacity) + 0.10}`
  } else {
    e.target.style.opacity = `1`;
  }
}

function askUser(){
  let number = window.prompt('Enter grid size: ', 16);
  let size = 500 / number

  gridNumber = number;
  numericSize = size;

  if (gridNumber <= 100){
    initializeGrid()
  } else {
    alert('Exceed maximum grid size! (Maximum of 100)')
    gridNumber = window.prompt('Enter grid size: ', 16);
  }
}

function initializeGrid(){

  while(mainContainer.firstChild){
    mainContainer.removeChild(mainContainer.firstChild);
  }

  // const squares = document.querySelectorAll(".square");
  // for (each of squares){
  //   mainContainer.removeChild(each);
  // }

  for (let a = 1; a <= gridNumber * gridNumber; a++){
    createSquare()
  }

}

gridBtn.addEventListener("click", askUser);

opacityBtn.addEventListener("click", () => {
  
  if (opacityToggle){
    opacityToggle = false;
    
  } else{
    opacityToggle = true;
    
  }
  
})