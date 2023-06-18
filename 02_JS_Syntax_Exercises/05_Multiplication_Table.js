function multiplicationTable(num){
    let str = '';
    for(let i = 1; i <= 10; i++){
        
            str += `${num} X ${i} = ${num*i} \n`;
    }
    return str;
    
}
console.log(multiplicationTable(5))