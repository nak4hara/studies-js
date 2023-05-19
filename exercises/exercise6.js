//repeat string

function repeatStringNumTimes(str, num) {
    let string = " "
    if (num > 0){
      for (let i = 1; i <= num; i++){
        string += str
      }
    } else {
      string = " "
    }
    return string
}
  
console.log(repeatStringNumTimes("abc", -2))


    function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0,num) + "...";
        } else {
            return str
        }
    
    }

    console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))

    function findElement(arr, func) {
        let num = 0;
      
        for (let i = 0; i < arr.length; i++){
          num = arr[i]
          if (func(num)){
            return num
          }
        }
        return undefined
      
      }
      
      findElement([1, 2, 3, 4], num => num % 2 === 0);