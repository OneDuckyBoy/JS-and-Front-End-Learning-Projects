function Pascal_Case_Splitter(sentence){
sentence = sentence.split('')
for(let i = 0; i < sentence.length; i++){
    if(sentence[i]==sentence[i].toUpperCase()){
        if(i==0){
            continue
        }
        sentence.splice(i,0,", ")
        i++
    }
} 
return sentence.join('')
}
console.log(Pascal_Case_Splitter('SplitMeIfYouCanHaHaYouCantOrYouCan'))
console.log(Pascal_Case_Splitter('HoldTheDoor'))
console.log(Pascal_Case_Splitter('ThisIsSoAnnoyingToDo'))