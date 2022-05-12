let symbolsA  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let numbersA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let smallA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let specialsA = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`,`?`]
let pass = []
let password = ""

let symbols = document.querySelector("#symbols")
let numbers = document.querySelector("#numbers")
let small = document.querySelector("#small")
let specials = document.querySelector("#specials")
let generator = document.querySelector("#generator")

function push(pushed,pulled){
    pulled.forEach(function(i){
        pushed.push(i)
    })
}

function generateSymbols(){
    if(numbers.checked === true){
        push(pass,numbersA)
    }

    if(small.checked === true){
        push(pass,smallA)
    }else if(small.checked === false){
        push(pass,symbolsA)
    }

    if(specials.checked === true){
        push(pass,specialsA)
    }
}

function generatePass(){
    let length = Number(symbols.value)

    if(length < 10){
        length = 10
    }else if(length > 25){
        length = 25
    }

    for(let i = 1; i < length + 1; i++){
        let sym = pass[Math.floor(Math.random() * pass.length)]
        password = password + sym
    }
    console.log(password)
}

generator.addEventListener("click",function(event){
    event.preventDefault()
    password = ""
    generateSymbols()
    generatePass()
})