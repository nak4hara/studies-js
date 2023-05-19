//get the largest number of each sub-array and return a array with the highest values of each sub-array

function largestOfFour(arr) {

let result = [ ]
    for (let i = 0; i < arr.length; i++){
        let largestNumber = arr[i][0]
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] > largestNumber){
                largestNumber = arr[i][j]
            }
        }
        result.push(largestNumber)
    }
    return result
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))