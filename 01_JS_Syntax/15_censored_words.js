function solve(sentence,word) {
    while (sentence.includes(word)) {
        sentence = sentence.replace(word, '*'.repeat(word.length));
    }
    return sentence;
}
console.log(solve('Find the hidden word', 'hidden'));