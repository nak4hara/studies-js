let temperature = 38.5

if (temperature  >= 37){
    console.log("Febre")
} else {
    console.log("Saudável")
}

//switch

let expression = 'c'

switch (expression) {
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo
        console.log('b')
        break
    default:
        console.log('default')
        break
}
//if there is no break, it continues to the next case!


//throw


 function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário") //send the information
    }
    console.log(name)
    //if get in the if, does not show this
 }

 //try...catch
 try{
    sayMyName('Karina') //to test the function
 } catch(e) {
    console.log(e)
    //catch the value of throw and put it here
 }

 console.log('após a função do erro')
 //do not compromise the code