const display  = document.querySelector(".display");
const numbers = document.querySelectorAll(".num");
let displayMemory;
let addClick = false;
let equalClick = false;
const add = document.querySelector(".add").addEventListener("click", adding)
const equals = document.querySelector(".equals").addEventListener("click", answer)


function insertToDisplay(){
    numbers.forEach(number => {
        number.addEventListener("click", (e) => {
            if(addClick){
                display.innerHTML = ""
            }
            display.innerHTML += e.target.innerHTML
        })
    })
}
insertToDisplay()

function adding(){
    displayMemory = parseInt(display.innerHTML)
    addClick = true
}

function answer(){
    if(addClick){
        display.innerHTML = displayMemory + parseInt(display.innerHTML)
        equalClick = false
        addClick = false
    }
    if(equalClick){
        display.innerHTML = ""
        equalClick = false
    }
}