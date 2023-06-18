function solve(sentence) {
sentence = sentence.split(' ');
let str = ''
for (var i = 0; i < sentence.length; i++) {
    if (/^#[a-zA-Z]+$/.test(sentence[i])){
        str += sentence[i].substring(1,sentence[i].length)+"\n"
    }
}
return str
}
console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'));