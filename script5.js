function changeFontSize() {
    let items = document.getElementsByTagName("li");
    let i = 0;

    while (i < items.length) {
        items[i].style.fontSize = "24px";
        i++;
    }
}