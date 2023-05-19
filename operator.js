let pao = true;
let queijo = false;

//console.log(pao && queijo) //AND

//console.log(pao || queijo) //OR

//console.log(!pao) //NOT
//change the value of the element false->true

const niceBreakfast = pao && queijo ? "Café top" : "Café ruim"
//condition ? value1 : value2
//condition is true? if yes output value1, if not value2

console.log(niceBreakfast)

let age = 19;
const canDrive = age >= 18 ? "You can drive" : "You need to be 18 to drive"
console.log(canDrive)

/* Operator precedence:

* grouping                  ( )
* negação e incremento      !  ++ --
* multiplicação e divisão    * /
* adição e subtração        + -
* relacional                <= <
* igualdade                 == !== ===
* AND                       &&
* OR                        ||
* condicional               ? :
* assignment                = += -= *=
*/