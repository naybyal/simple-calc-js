let num1Element = document.getElementById("num1-el")
let num2Element = document.getElementById("num2-el")

let num1 = parseInt(num1Element.value)
let num2 = parseInt(num2Element.value)

function add() {
    let result = num1+num2
    document.getElementById("result-el").textContent=result
}

function subtract() {
    let result = num1-num2
    document.getElementById("result-el").textContent=result
}

function multiply() {
    let result = num1*num2
    document.getElementById("result-el").textContent=result
}
function divide() {
    let result = num1/num2
    document.getElementById("result-el").textContent=result
}