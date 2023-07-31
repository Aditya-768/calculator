
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
})