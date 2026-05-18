function showItems() {
    let items = ["Apple", "Banana", "Carrot", "Grapes"];
    let list = document.getElementById("itemList");

    list.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.textContent = items[i];
        list.appendChild(li);
    }
}