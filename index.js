console.log("It's working");

const block =  document.createElement("div");
document.body.appendChild(block);
block.setAttribute("class", "main-block");

for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.className = "box";

    block.appendChild(div);
}