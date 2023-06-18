function SameNumbers(num){

    let str = num.toString()
    let sum = 0
    let sameNumbers = true
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== str[0]){
            sameNumbers = false
            
        }
        sum += Number(str[i])
    }
    let result =""+ sameNumbers +"\n"+sum
    return result
}
console.log(SameNumbers(1234))