function colorItems() {
    let fruits = document.querySelectorAll(".fruit");
    let vegetables = document.querySelectorAll(".vegetable");

    if (fruits.length > 0) {
        fruits[0].style.color = "green";
    } else if (vegetables.length > 0) {
        vegetables[0].style.color = "orange";
    } else {
        document.body.style.backgroundColor = "lightgray";
    }
}