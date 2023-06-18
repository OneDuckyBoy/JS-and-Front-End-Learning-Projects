function Word_Tracker(array){
let words = array.shift().split(' ');
let wordsArr ={}
words.forEach(element => {
    wordsArr[element] = 0;
});

array.forEach(el => {
    if (el in wordsArr){
        wordsArr[el] = wordsArr[el] + 1;
    }
});
let vals = getSortedKeysByValue(wordsArr);
vals.forEach(element => {
    console.log(`${element} - ${wordsArr[element]}`);

});


function getSortedKeysByValue(obj) {
    var vals = Object.keys(obj);
    return vals.sort(function(a,b){return obj[b]-obj[a]});
}
}
Word_Tracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    );