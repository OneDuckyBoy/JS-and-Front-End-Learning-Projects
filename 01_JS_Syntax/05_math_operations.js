function solve(num1,num2,operation){
switch(operation){
    case '+':
        return num1+num2;
    case '-':
        return num1-num2;
    case '*':
        return num1*num2;
    case '/':
        return num1/num2;
    case '%':
        return num1%num2;
    case '**':
        return num1**num2;
}
}
console.log(solve(5,6,'*'))