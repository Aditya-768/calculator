<<<<<<< HEAD

const buttons = document.querySelectorAll('button')
const display = document.getElementById("result")
const bigContainer = document.getElementById("container-id")

buttons.forEach((a) => {
    a.addEventListener("click", () => {
        if(a.textContent == "DEL"){
            display.value = display.value.slice(0, -1)
        }
        else if(a.textContent == "AC"){
            display.value = ''
        }
        else if(a.textContent == '='){
            display.value = eval(display.value)

        }
        else{
            display.value += a.textContent
        }
    })
=======

const buttons = document.querySelectorAll('button')
const display = document.getElementById("result")
const bigContainer = document.getElementById("container-id")

buttons.forEach((a) => {
    a.addEventListener("click", () => {
        if(a.textContent == "C"){
            display.value = ''
        }
        else if(a.textContent == '='){
            display.value = eval(display.value)

        }
        else if(a.textContent == 'sq'){
            display.value = Math.sqrt(display.value)
        }
        else if(a.textContent == '^2'){
            display.value += a.textContent
        }

        else{
            display.value += a.textContent
        }
    })
>>>>>>> 323740edd15ac0aa6cddfe00c72f1c2370c74d2a
})