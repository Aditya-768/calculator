
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
        // else if(a.textContent == 'Light mode'){
        //     document.body.style.backgroundColor = "white"
        //     bigContainer.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
        //     buttons.forEach((a) => {
        //         a.style.color = "white"
        //         a.style.backgroundColor = "black"
        //         a.style.boxShadow = "0px 2px 3px grey"
        //     })
        //     display.style.boxShadow = "0 -2px 3px rgba(255, 255, 255, 0.4) "
        // }
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