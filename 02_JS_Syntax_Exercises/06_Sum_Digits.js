function SumDigits(input){
    input = input.toString()
    let sum = 0
    for(var i = 0; i < input.length; i++){
        sum += parseInt(input[i])
    }
    return sum
}
console.log(SumDigits(12345))