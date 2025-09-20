console.log("It's working");

function askingInput() {
    let inputGrid = prompt("How many squares you want in one line?");
    if (inputGrid > 100) {askingInput()};
    return inputGrid;
};
const button = document.createElement("button");
document.body.appendChild(button);
button.addEventListener("click", eventButton);

button.textContent = "Clear and start again";

function eventButton() { 

const block =  document.createElement("div");
document.body.appendChild(block);
block.setAttribute("class", "main-block");

let value = askingInput();

for (let i = 1; i <= value; i++) {
    let div = document.createElement("div");
    div.className = "box";

    block.appendChild(div);
};

function randomColor() {
    // const number = Math.floor(Math.random()*4);
    let bgColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random()*256)}, 50)`;
    return bgColor
}

document.body.addEventListener("mouseover", (event) => {
    // console.log(event.target);
    // event.target.setAttribute('class', "randomColor");
    // event.target.setAttribute("style", `background-color:${randomColor()}`)
    // console.log(event.target.closest("div"))
    let effectedArea = event.target.closest("div");
    if (!effectedArea) {return ;}
    effectedArea.style.backgroundColor = randomColor();
})

document.body.addEventListener("mouseout", (event) => {
    let effectedArea = event.target.closest("div");
    console.log(effectedArea);
    if (!effectedArea) {return ;}
    effectedArea.style.backgroundColor = "";
})
// button.removeEventListener("click", eventButton);
}
