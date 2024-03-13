const GRIDSIZE = 600;
let rows = 16;
let columns = 16;

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
function createGridCells(){
    for (let i = 0; i < (rows * columns); i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIZE/columns) -2}px`;
        gridCell.style.height = `${(GRIDSIZE/rows) -2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
        gridCell.addEventListener('mouseover', setBackgroundColor);
    }
}

createGridCells()