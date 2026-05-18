function changeBackground() {
    let items = document.getElementsByTagName("li");

    for (let index in items) {
        if (items.hasOwnProperty(index)) {
            items[index].style.backgroundColor = "lightblue";
        }
    }
}