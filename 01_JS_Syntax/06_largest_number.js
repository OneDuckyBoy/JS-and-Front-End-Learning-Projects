function solve(num1, num2, num3){
    let largestNum
    if(num1>num2 && num1>num3){
        largestNum= num1;
    }else if(num2>num1 && num2>num3){
        largestNum= num2;
    }else{
        largestNum= num3
    }
    return `The largest number is ${largestNum}.`
}
console.log(solve(13,22,5))