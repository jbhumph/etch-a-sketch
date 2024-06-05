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
        let gs = 690 / gridSize;
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            box.setAttribute("style", `border: 0px solid black; width: ${gs}px; height: ${gs}px;`);
            innerContainer.appendChild(box);
        }
    }
    let square = document.querySelectorAll(".box");
    square.forEach((square) => {
        square.addEventListener("mouseover", () => {
            let a = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")"
            square.style.backgroundColor = a;
        })
    })
}



