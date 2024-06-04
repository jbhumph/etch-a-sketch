const container = document.querySelector(".container");

let size = 16;
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let sizes = prompt("Please enter a grid size between 1 - 100", 16);
    container.innerHTML = ""
    if (sizes > 0 && sizes < 100) {
        size = sizes;
    }
    drawGrid(size);
})

drawGrid(size);

function drawGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const innerContainer = document.createElement("div");
        innerContainer.setAttribute("class", "innerContainer");
        container.appendChild(innerContainer);
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            innerContainer.appendChild(box);
        }
    }
}

const square = document.querySelector(".box");
square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
})

