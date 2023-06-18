function Factorial_Division(num,divisor){

    num = factorialize(num);
    divisor = factorialize(divisor);
    return (num/divisor).toFixed(2);  
    
    function factorialize(num) {
        var result = num;
        if (num === 0 || num === 1) 
          return 1; 
        while (num > 1) { 
          num--;
          result *= num;
        }
        return result;
      }
}

console.log(Factorial_Division(5,2));