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
})