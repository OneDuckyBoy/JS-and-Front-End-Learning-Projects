function NxN_Matrix(n){
    str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str+= n+" ";
        }
        str+="\n";
    }
    return str;
}
console.log(NxN_Matrix(3))