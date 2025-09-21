const button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "clear and start NEW!"
function checkRowsNumber () {
    while (true) {
        var inputRows = +prompt("Enter the rows number!");
        if (inputRows < 100) {
           break; 
        }
    }
    return inputRows
};


function mainAction () {

    let value = checkRowsNumber();

    const mainDiv = document.createElement("div");
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute("class", "main")


    mainDiv.setAttribute("style", `width: ${value * 20}px; height: auto; `)

    // let checkVariable = mainDiv.getAttribute("style").split(";")[0].split(":")[1].slice()
    // let withoutPx = +(checkVariable.split("").slice(1, checkVariable.length-2).join(""));
    // if (withoutPx > 2000){
    // mainAction()};

    for (let i = 1; i <= value*value; i++) {
        let div = document.createElement("div");
        mainDiv.appendChild(div);
        div.setAttribute("class", "cube");
        
    }; 
    // creating empty div done!;
    // adding effects;
    document.body.addEventListener("mouseover", eventFunctionOver);
    document.body.addEventListener("mouseout", eventFunctionOut);
    
};
function eventFunctionOver(event) {
    let effectedArea = event.target.closest("div");
    if (!effectedArea) {return };
    effectedArea.style.backgroundColor = randomColorFunction();
    
};
function eventFunctionOut(event) {
    let effectedArea = event.target.closest("div");
    if (!effectedArea) {return };
    effectedArea.style.backgroundColor = '';

};

function randomColorFunction () {
    let bgColor;
    bgColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)} `
    return bgColor;
}

mainAction();

button.addEventListener("click", event => {
    
    // button.nextElementSibling.remove();
    event.target.nextElementSibling.remove();
    mainAction();

})

