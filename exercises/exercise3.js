/*
    Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius
    ou fahrenheit e faça a transformação de uma unidade
    para a outra

    C = (F-32) * 5/9

    F = C * 9/5 + 32

*/
function convertDegree(temperature){
    //identify the degree
    const celsiusExists = temperature.toUpperCase().includes('C') //includes turns into boolean
    const fahrenheitExists = temperature.toUpperCase().includes('F') //transform to uppercase in case is written in lowcase
    
    //if there is a new degree to transform, just add to identification
    //then, include one else if 

    if (celsiusExists == true){
        let degree = Number(temperature.toUpperCase().replace(/C|ºC|°C/,"")); //transform into number --regex
        const convertedTemperature = (degree - 32) * 5/9 //convert to F
        return convertedTemperature + ' °F'
    } else if (fahrenheitExists == true) {
        let degree = Number(temperature.toUpperCase().replace(/F|ºF|°F/,"")); //transforme into number --regex
        const convertedTemperature = degree* 9/5 + 32  //convert to C
        return convertedTemperature + ' °C'
    } else {
        return new Error("Medida inválida, tente novamente.").message //identify invalid degree and gives an error message
    }
}
console.log(convertDegree('0°F'))
