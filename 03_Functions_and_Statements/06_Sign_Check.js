function Sign_Check(...nums){
    let sum=1;
nums.forEach(element =>sum*=element);
if(sum<0){
    return "Negative";
}else{
    return "Positive";
}
}