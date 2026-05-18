function changeColor() {
    let items = document.getElementsByTagName("li");
    let firstItem = items[0];

    switch (firstItem.textContent) {
        case "Apple":
            firstItem.style.color = "green";
            break;
        case "Carrot":
            firstItem.style.color = "orange";
            break;
        case "Banana":
            firstItem.style.color = "yellow";
            break;
        default:
            firstItem.style.color = "black";
    }
}