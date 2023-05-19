/*
    Sistema de gastos familiar

- crie um objeto com 2 propriedades
- ambas do tipo array
    *receitas: []
    *despesas: []
- crie uma função que irá calcular o total de receitas e despesas
e irá mostrar uma nova msg se a família está
com o saldo + ou -, seguido do valor do saldo

*/

let family = {
    incomes: [2000,8789,78.4],
    expenses: [5452984,989.32317, 43809.]
}
function calculateBalance() {
    let sumIncomes = 0;
    for (let number of family.incomes) {
        sumIncomes += number;
    }

    let sumExpenses = 0;
    for (let number of family.expenses) {
        sumExpenses += number;
    }

    const totalSum = sumIncomes - sumExpenses
    let balance = ''

    if (totalSum >= 0) {
        balance = 'positivo'
    } else {
        balance = 'negativo'
    }
    console.log(`O seu saldo é ${balance}: R$ ${totalSum.toFixed(2)}.`)
}

calculateBalance()