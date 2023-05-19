/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

>90 A
entre 80 - 89 B
entre 70 - 79 C
entre 60 - 69 D
<60 F
*/

function getGrade(grade){
    let finalGrade;

    if (grade >=90 && grade <= 100) {
        finalGrade = "A"
    } else if (grade >= 80 && grade < 90){
        finalGrade = "B"
    } else if (grade >= 70 && grade < 80){
        finalGrade = "C"
    } else if (grade >= 60 && grade < 70){
        finalGrade = "D"
    } else if (grade>=0 && grade<60){
        finalGrade = "F"
    } else {
        finalGrade = "Nota inválida"
    }

    return finalGrade
}
 console.log(getGrade(30))