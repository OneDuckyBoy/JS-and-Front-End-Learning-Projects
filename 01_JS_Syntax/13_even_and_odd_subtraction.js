function solve(arr){
    let evenSum = 0;
    let oddSum = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i]%2==0){
        evenSum +=arr[i];
    }else{
        oddSum +=arr[i];
    }
}
return evenSum-oddSum;
}
solve([1,2,3,4,5,6])
console.log(solve([1,2,3,4,5,6]))