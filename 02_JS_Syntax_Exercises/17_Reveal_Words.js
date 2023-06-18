function Reveal_Words(word, sentence) {
    let words = word.split(', ');
    for (let i = 0; i < words.length; i++) {
        sentence = sentence.replace('*'.repeat(words[i].length),words[i])
    }
    return sentence

}
console.log(Reveal_Words('great',
'softuni is ***** place for learning new programming languages'
))
console.log(Reveal_Words('great, learning',
'softuni is ***** place for ******** new programming languages'

))