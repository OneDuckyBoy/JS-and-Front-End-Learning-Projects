function Palindrome_Integers(arrOfNums){
    let result = "";
    let str='';
    for(let i = 0; i < arrOfNums.length; i++){
        str = arrOfNums[i].toString();
        if(str === str.split('').reverse().join('')){
            result +="true\n";
        }else{
            result +="false\n";
        }
    }
    return result;
}
console.log(Palindrome_Integers([32,2,232,1010]));