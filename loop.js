//inicialização da variavel
//condição de continuação do loop
//o que vai realizar no loop

/*
for (let i = 0; i < 10; i++) {
    if (i===5){
        continue
    }
    console.log(i)
}
*/
//break - stop the loop
//continue - skip the execution of the moment

//while
let i = 344398789;

while(i > 10) {
    console.log(i)

    i/= 35;
}
//is used when we do not know when to stop

let name = 'Karina'
let names = ['João', 'Maria', 'Pedro']

for (let name of names) {
    console.log(name)
}

//get one string per time or element of the var 

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}