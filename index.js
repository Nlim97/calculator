const mainDisplay = document.querySelector(".display-main")
const memDisplay = document.querySelector(".display-mem")
const numbers = document.querySelectorAll(".num")
const add = document.querySelector(".add")
const equals = document.querySelector(".equals")
const ac = document.querySelector(".reset")
const sub = document.querySelector(".sub")
const mul = document.querySelector(".multiply")
const div = document.querySelector(".divide")
const dot = document.querySelector(".dec")
const percent = document.querySelector(".percentage")
const posOrNeg = document.querySelector(".minusOne")

let addClick = false
let subClick = false
let multiplyClick = false
let divideClick = false
let equalClick = false
let firstOperand = null;
let decimalClick = false


add.addEventListener("click", adding)
equals.addEventListener("click", answer)
ac.addEventListener("click", reset)
sub.addEventListener("click", subtract)
mul.addEventListener("click", multiply)
div.addEventListener("click", divide)
dot.addEventListener("click", decimal)
percent.addEventListener("click", percentage)
posOrNeg.addEventListener("click", posNeg)

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if(equalClick){
            mainDisplay.innerHTML = ""
            equalClick = false
        }
        mainDisplay.innerHTML += e.target.innerHTML
    })
})
function reset(){
    firstOperand = null;
    memDisplay.innerHTML = ""
    mainDisplay.innerHTML = ""
    if(decimalClick){
        dot.addEventListener("click", decimal)
        decimalClick = false
    }
}

function posNeg(){
    let value = parseFloat(mainDisplay.innerHTML) * (-1)
    mainDisplay.innerHTML = value
}

function percentage(){
    const percentValue = parseFloat(mainDisplay.innerHTML) / 100
    mainDisplay.innerHTML = percentValue
}

function adding(){
    if(firstOperand === null) {
        firstOperand = parseFloat(mainDisplay.innerHTML)
    } else {
        firstOperand += parseFloat(mainDisplay.innerHTML)
    }
    if(decimalClick){
        dot.addEventListener("click", decimal)
        decimalClick = false
    }
    memDisplay.innerHTML = firstOperand + " + "
    mainDisplay.innerHTML = "" 
    addClick = true

}

function subtract(){
    if(firstOperand === null){
        firstOperand = parseFloat(mainDisplay.innerHTML)
    }else{
        firstOperand -= parseFloat(mainDisplay.innerHTML)
    }
    if(decimalClick){
        dot.addEventListener("click", decimal)
        decimalClick = false
    }
    memDisplay.innerHTML = firstOperand + " - "
    mainDisplay.innerHTML = "" 
    subClick = true
}

function multiply(){
    if(firstOperand === null){
        firstOperand = parseFloat(mainDisplay.innerHTML)
    }else{
        firstOperand *= parseFloat(mainDisplay.innerHTML)
    }
    if(decimalClick){
        dot.addEventListener("click", decimal)
        decimalClick = false
    }
    memDisplay.innerHTML = firstOperand + " * "
    mainDisplay.innerHTML = "" 
    multiplyClick = true
}
function divide(){
    if(firstOperand === null){
        firstOperand = parseFloat(mainDisplay.innerHTML)
    }else{
        firstOperand /= parseFloat(mainDisplay.innerHTML)
    }
    if(decimalClick){
        dot.addEventListener("click", decimal)
        decimalClick = false
    }
    memDisplay.innerHTML = firstOperand + " / "
    mainDisplay.innerHTML = "" 
    divideClick = true
}
function decimal (){
    if(mainDisplay.innerHTML.length === 0){
        mainDisplay.innerHTML += "0."
    }else{
        mainDisplay.innerHTML += "."
    }
    decimalClick = true
    if(decimalClick){
        dot.removeEventListener("click", decimal)
    }
}
function answer(){
    if(addClick){
        const secondOperand = parseFloat(mainDisplay.innerHTML)
        mainDisplay.innerHTML = firstOperand + secondOperand
        memDisplay.innerHTML = ""
        equalClick = true
        addClick = false
        firstOperand = null
    }else if(subClick){
        const secondOperand = parseFloat(mainDisplay.innerHTML)
        mainDisplay.innerHTML = firstOperand - secondOperand
        memDisplay.innerHTML = ""
        equalClick = true
        subClick = false
        firstOperand = null
    }else if(multiplyClick){
        const secondOperand = parseFloat(mainDisplay.innerHTML)
        mainDisplay.innerHTML = firstOperand * secondOperand
        memDisplay.innerHTML = ""
        equalClick = true
        multiplyClick = false
        firstOperand = null
    }else if(divideClick){
        const secondOperand = parseFloat(mainDisplay.innerHTML)
        mainDisplay.innerHTML = firstOperand / secondOperand
        memDisplay.innerHTML = ""
        equalClick = true
        divideClick = false
        firstOperand = null
    }
    if(decimalClick){
        dot.addEventListener("click", decimal)
        decimalClick = false
    }
}
