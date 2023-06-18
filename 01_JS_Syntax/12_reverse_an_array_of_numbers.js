function solve(num,arr){
    arr.splice(num,arr.length); 
    arr=  arr.reverse()
    console.log(arr.join(' '));
}
solve(3, [10, 20, 30, 40, 50])