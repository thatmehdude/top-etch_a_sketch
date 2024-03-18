const GRIDSIZE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketchArea");
sketchArea.style.width = `${GRIDSIZE}px`;
sketchArea.style.height = `${GRIDSIZE}px`;

function setBackgroundColor(){
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    let randomColour = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    this.style.backgroundColor = randomColour;
}
function createGridCells(squaresPerSide){
    const numOfSquares = (squaresPerSide * squaresPerSide);
    for (let i = 0; i < (numOfSquares); i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIZE/squaresPerSide) -2}px`;
        gridCell.style.height = `${(GRIDSIZE/squaresPerSide) -2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
        gridCell.addEventListener('mouseover', setBackgroundColor);
    }
}

function promptForGridsize(){
    let numSquaresPerSize = prompt("enter required gridsize with max being 100");
    if (numSquaresPerSize !== null && !isNaN(numSquaresPerSize) && numSquaresPerSize > 0 && numSquaresPerSize <= 100){
        squaresPerSide = parseInt(numSquaresPerSize);
        sketchArea.innerHTML = "";
        createGridCells(squaresPerSide);
    }
    else{
        alert("Please enter a valid number between 1 and 100.");
        promptForGridsize()
    } 
}


const btn = document.querySelector("#btn");
btn.addEventListener('click', promptForGridsize);
createGridCells(squaresPerSide)