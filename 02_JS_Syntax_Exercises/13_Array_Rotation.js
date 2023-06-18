function ArrayRotation(arr,numOfRotations) {

    for (var i = 0; i < numOfRotations; i++){
        arr.push(arr.shift())
    }

    return arr.join(' ');
}

console.log(
    ArrayRotation([51, 47, 32, 61, 21], 2)
    )