
let weight = 0
/*
console.log(typeof weight)


let name= "Marcos"
let age= 45
let stars= 5.6
let isSubscribed= true
*/
let student = {
    name: "Marcos",
    age: 32,
    stars: 4.5,
    isSubscribed: false
}
console.log(`${student.name} de idade ${student.age} tem ${student.stars} estrelas`)

let john = {
    name: "John",
    age: 45,
    stars: 4.8,
    isSubscribed: false
}

let students = [
    student
];

students[1] = john
console.log(students[1])