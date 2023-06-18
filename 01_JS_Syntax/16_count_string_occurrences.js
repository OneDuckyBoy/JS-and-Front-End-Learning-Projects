function solve(sentence,word){
    let words = sentence.split(" ");
    let counter = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i] === word){
            counter++;
        }
    }
    return counter;
}
console.log(solve('softuni is great place for learning new programming languages',
'softuni'
));