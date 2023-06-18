function Characters_in_Range(char1, char2) {
    let str = ''
    let start = char1.charCodeAt(0)+1
    let end = char2.charCodeAt(0)
    if (start<end) {
        for (let i = start; i < end; i++) {
            str += String.fromCharCode(i)+" "
        }
    }
    else {
        for (let i = end+1; i < start-1; i++) {
            str += String.fromCharCode(i)+" "
        }
    }
    return str
}
console.log(Characters_in_Range('C','#'))