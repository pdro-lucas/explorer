const a = 2
const b = 3

const d2 = document.querySelector('#d2').addEventListener('click', sum)
const d3 = document.querySelector('#d3').addEventListener('click', isNumber)
const d4 = document.querySelector('#d4').addEventListener('click', isString)
const d5 = document.querySelector('#d5').addEventListener('click', isBoolean)
const d6 = document.querySelector('#d6').addEventListener('click', subtract)
const d7 = document.querySelector('#d7').addEventListener('click', multiply)
const d8 = document.querySelector('#d8').addEventListener('click', divide)
const d9 = document.querySelector('#d9').addEventListener('click', isPar)
const d10 = document.querySelector('#d10').addEventListener('click', isImpar)

function sum() {
  alert(a + b)

  return a + b
}

function subtract() {
  alert(a - b)
  return a - b
}

function multiply() {
  alert(a * b)
  return a * b
}

function divide() {
  alert(a / b)
  return a / b
}

function isNumber() {
  alert(typeof a === 'number')
}

function isString() {
  alert(typeof a === 'string')
}

function isBoolean() {
  alert(typeof a === 'boolean')
}

function isPar() {
  alert(a % 2 === 0)
}

function isImpar() {
  alert(a % 2 !== 0)
}
