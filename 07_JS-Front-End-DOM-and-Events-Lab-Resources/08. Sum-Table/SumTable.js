function sumTable() {
    // let rows = document.getElementsByTagName('tr');
    let secondColumn = document.querySelectorAll(
        "tbody tr td:nth-child(2)");
    let result =0;
    for (let row of secondColumn){
        if (row.textContent == ""){row.textContent=result;}
        result += parseFloat(row.textContent);
    }
    secondColumn[secondColumn.length] = result;
    // console.log("Hi");
}