function displayFruits() {
    let fruits = ["Apple", "Banana", "Grapes", "Mango"];
    let list = document.getElementById("fruitList");

    list.innerHTML = "";

    for (let fruit of fruits) {
        let li = document.createElement("li");

        if (fruit === "Banana") {
            li.textContent = fruit + " 🍌";
        } else {
            li.textContent = fruit;
        }

        list.appendChild(li);
    }
}