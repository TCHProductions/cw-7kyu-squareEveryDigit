/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num){
    let conStr = num.toString()
    let length = conStr.length
    console.log(length)
    let returnStr = ''
    console.log(conStr)
    for (let i = 0; i < conStr.length; i++){
    console.log(conStr[i])
        returnStr += conStr[i] * conStr[i]
    }
  
    console.log(returnStr)
    return parseInt(returnStr)  
  }