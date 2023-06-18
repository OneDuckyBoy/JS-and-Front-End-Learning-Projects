function extractText() {
    // TODO

    let ullist = document.getElementsByTagName("li");
    let str = "";
    for (let i = 0; i < ullist.length; i++) {
        str+=ullist[i].textContent+ "\n";
    }
    let result = document.getElementById("result");
    result.value = str
}