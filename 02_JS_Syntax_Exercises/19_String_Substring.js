function StringSubstring(substring, sentence){

    for(let word of sentence.split(' ')){
    if(word.toLowerCase()===(substring.toLowerCase())){
            return word.toLowerCase() 
        }
    }
    return substring+ ' not found!'
}
console.log(StringSubstring('javascript',
'JavaScript is the best programming language'
))