function Loading_Bar(num){
    if(num==100){
        return "100% Complete!\n[%%%%%%%%%%]"
    }
    let number =num/10
    let str = num+"% ["+"%".repeat(number)+".".repeat(10-number)+"]\nStill loading..."

    return str;
}
console.log(Loading_Bar(10))