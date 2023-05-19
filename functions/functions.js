function createPhrases() {
    console.log("Hoje o dia ta lindo")
    console.log('Paciência e persistência')
}

createPhrases() //execute, run, call, invoke

//function expression
//function anonymous

//parameters
const sum = function(number1,number2) {
    total = number1 + number2
    return total
}

sum(2,3) //arguments

let number1 = 34
let number2 = 25

console.log(`O numero 1 é ${number1}`)
console.log(`O numero 2 é ${number2}`)
console.log(`A soma é ${sum(number1,number2)}`)

//function constructor
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const mayk = new Person("Mayk")
//automaticamente retorna um objeto
const joao = new Person("Joao")

console.log(mayk.walk())
console.log(joao)