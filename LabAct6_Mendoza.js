// Student Name: Mendoza, Allen Ray
// filename:LabAct6_Mendoza.js

// Array that stores all tasks with their status
let tasks = [
    { task: "Buy groceries", completed: false },
    { task: "Finish homework", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Call Mom", completed: false }
];

// Function to display all tasks on the webpage
function displayTasks() {

    // Get the <ul> element to add tasks to
    const todoList = document.getElementById("todoList");

     // Clear the list first to avoid duplicates
    todoList.innerHTML = "";

       // Loop through each task in the array
    for (let i = 0; i < tasks.length; i++) {

        // Create a list item for each task
        let li = document.createElement("li");

        // If task is completed, add a CSS class for styling
        if (tasks[i].completed) {
            li.classList.add("completed");
        }

        // Create a span element to show the task text
        let taskText = document.createElement("span");
        taskText.textContent = tasks[i].task;

        // Create a button to toggle task completion
        let toggleButton = document.createElement("button");

        // Change button text depending on task status
        toggleButton.textContent = tasks[i].completed ? "Undo" : "Complete";

        // Add click event to toggle the task status
        toggleButton.addEventListener("click", function () {

            // Switch completed value (true ↔ false)
            tasks[i].completed = !tasks[i].completed;

            // Refresh the displayed task list
            displayTasks();
        });

        // Add the task text and button to the list item
        li.appendChild(taskText);
        li.appendChild(toggleButton);

        // Add the list item to the <ul>
        todoList.appendChild(li);
    }
}

// Add event listener to the "Add Task" button
document.getElementById("addTaskBtn").addEventListener("click", function () {

    // Ask user to input a new task
    let newTask = prompt("Enter a new task: ");

    // If user entered something, add it to the array
    if (newTask) {
        tasks.push({ task: newTask, completed: false });

        // Refresh the task list
        displayTasks();
    }
});

// Display tasks when the page loads
displayTasks();