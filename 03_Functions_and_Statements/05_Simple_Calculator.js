function Simple_Calculator(number1, number2,operator){
    let result; 
    switch(operator){
        case 'multiply':
            result = number1 * number2;
            break;
        case'subtract':
            result = number1 - number2;
            break;
        case 'add':
            result = number1 + number2;
            break;
        case 'divide':
            result = number1 / number2;
            break;
    }
    return result;  
}