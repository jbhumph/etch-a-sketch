const container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    const innerContainer = document.createElement("div");
    innerContainer.setAttribute("class", "innerContainer");
    container.appendChild(innerContainer);
    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        innerContainer.appendChild(box);
    }
}