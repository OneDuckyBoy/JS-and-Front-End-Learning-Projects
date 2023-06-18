function solve(name,age,grade){
    grade = grade.toFixed(2)
    return `Name: ${ name}, Age: ${age}, Grade: ${grade}`
}

console.log(solve('Steve', 16, 2.1426))