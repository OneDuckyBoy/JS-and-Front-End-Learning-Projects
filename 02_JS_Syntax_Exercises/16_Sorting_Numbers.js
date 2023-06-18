function SortingNumbers(array){
    let arr= []
    array.sort((a,b)=>a-b)
    while (array.length>0){
            arr.push(array.shift())
            arr.push(array.pop())
        
    }
    return arr
}
console.log(SortingNumbers([1,2,3,4,5]))