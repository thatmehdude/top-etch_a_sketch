const GRIDSIZE = 600;
let rows = 16;
let columns = 16;

const sketchArea = document.querySelector("#sketchArea");
sketchArea.style.width = `${GRIDSIZE}`;
sketchArea.style.height = `${GRIDSIZE}`;

function createGridCells(){
    for (let i = 0; i < (rows * columns); i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDSIZE/columns) -2}px`;
        gridCell.style.height = `${(GRIDSIZE/rows) -2}px`;
        gridCell.classList.add("cell")
    }
}

createGridCells()