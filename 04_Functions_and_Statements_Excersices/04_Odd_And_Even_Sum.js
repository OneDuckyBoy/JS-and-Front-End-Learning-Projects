function Odd_And_Even_Sum(num){
    let oddSum=0;
    let evenSum=0;
    num = num.toString();
    num = Array.from(num);
    num.forEach(number =>{
        if(parseInt(number)%2==0){
            evenSum+=parseInt(number);
        }else{
            oddSum+=parseInt(number);
        }
    })
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(Odd_And_Even_Sum(3495892137259234))