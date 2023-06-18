function addItem() {
    let ul = document.getElementById("items");
    let text = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    if(text.length === 0) return;
    li.textContent = text
    let remove = document.createElement("a");
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", DeleteItem,)
    li.appendChild(remove);
    ul.appendChild(li);
    function DeleteItem(){
        li.remove();
    }
}