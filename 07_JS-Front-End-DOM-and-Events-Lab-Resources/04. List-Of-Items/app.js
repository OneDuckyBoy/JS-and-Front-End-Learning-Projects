function addItem() {
    let ul = document.getElementById("items");
    let text = document.getElementById("newItemText")
    let li = document.createElement("li")
    li.textContent = text.value
    ul.appendChild(li)
}