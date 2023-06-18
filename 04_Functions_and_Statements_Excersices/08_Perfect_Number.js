function Perfect_Number(num){
    var divisors = 0;
    let sum =0;
    mod = num;
    while (mod > 0){
      if(num % mod == 0){
        sum+=mod
      }
      mod--;
    }
    sum =sum-num;
    if (sum == num){
        return "We have a perfect number!";
    }else{
        return "It's not so perfect.";
    }
}
console.log(Perfect_Number(6));