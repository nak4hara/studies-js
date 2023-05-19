function titleCase(str) {

    let array = str.toLowerCase().split(" ") //converte pra array e separa
    
    for (let i = 0; i < array.length; i++) { //vai do primeiro elemento até o ultimo
        array[i] = array[i][0].toUpperCase() + array[i].slice(1)
        /* transforma:
        array[i] = primeiro elemento vai ser igual a
        primeira letra em maiusculo
        + (concatenação)
        primeiro elemento sem a primeira letra(slice)
        */
    }
    return array.join(" ") //transforma em string novamente
}
//console.log(titleCase("I'm a little tea pot"))


function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice(0, arr2.length)
    for (let i = arr1.length - 1; i >=0 ; i--){
        newArray.splice(n, 0, arr1[i])
    }

    return newArray
}
  
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

//get falsy and kick them out of the array
function bouncer(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) == true){
            newArr.push(arr[i])
        
        }
      }
      return newArr
}
  
//console.log(bouncer([false, null, 0, NaN, undefined, ""]))

//put number in order inside array and show index 
function getIndexToIns(arr, num) {

    arr.sort((a,b) => a - b); //coloca em ordem

    for (let i = 0; i < arr.length; i++){
      if(arr[i] >= num){
        return i
      }
    }
    return arr.length
}

//console.log(getIndexToIns([2, 5, 10], 15))

function mutation(arr) {
    const test = arr[1].toLowerCase()
    const target = arr[0].toLowerCase()

    for (let i = 0; i < test.length; i++){

        if (target.indexOf(test[i]) < 0){
            return false
        }
    }
    return true
}
  
//console.log(mutation(["Hello", "hey"]))

//separate array in subarrays according to size defined
function chunkArrayInGroups(arr, size) {
    let newArray = []
    for (let i = 0; i < arr.length; i+=size)
    arr.slice()
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);