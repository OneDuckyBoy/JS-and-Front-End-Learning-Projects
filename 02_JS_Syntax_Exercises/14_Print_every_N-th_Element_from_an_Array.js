function printNthElement(arr,num){
    let ar=[]
    let index =0
    for(var i=0;i<arr.length;i+=num){
        ar[index++]=arr[i]
    }
    return ar
}
console.log(printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));