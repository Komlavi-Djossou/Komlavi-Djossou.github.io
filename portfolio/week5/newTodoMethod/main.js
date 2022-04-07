'use strict';

import Todo from "./todo.js";
import * as storage from "./storage.js";
import { displayTasksRemaining } from "./utilities.js";


var taskList = [];
var filterClick = "All"



//////////////////////////
// General Event Handlers

// DOM load event handler
document.addEventListener("DOMContentLoaded", (event) => {
    taskList = storage.loadAll();
    document.getElementById("remainTask").innerText = `${taskList.length} tasks remaining.`;

    renderTaskList();
});


// Submit input form event handler
document.getElementById("taskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let element = document.getElementById("new-task");

    if (element.value === "") { return; }
    
    let todo = new Todo(element.value);
    //console.log(todo.toString())
    taskList.push(todo);

    localStorage.setItem(todo.id, todo.toString());     // Add the todo to local storage

    // Render the To-Do List
    renderTaskList();

    element.value = ""; // Clear the input field
});


// Render the task list
function renderTaskList() {
    let table = document.getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    let index = 0;
    for (let todo of taskList) {
        switch(filterClick) {
            case "Active":
                if (!todo.completed) {
                    let row = todo.render(index, onChecked, onDelete);
                    table.appendChild(row);
                }
                break;
            case "Completed":
                if (todo.completed) {
                    let row = todo.render(index, onChecked, onDelete);
                    table.appendChild(row);
                }
                break;
            default:
                let row = todo.render(index, onChecked, onDelete);
                table.appendChild(row);
        }

        index++;
    }
    
    displayTasksRemaining(taskList)
}

    
////////////////////////////////////
// Callbacks used by the Todo class

// On checkbox checked callback
function onChecked(event) {
    let node = event.target.parentNode;
    let index = node.getAttribute("data-index");

    let task = taskList[index];
    task.completed = event.target.checked;

    if (task.completed) {
        node.nextSibling.classList.add("strike");
    } else {
        node.nextSibling.classList.remove("strike");
    }

    localStorage.setItem(task.id, task.toString());     // Update the item in local storage

    displayTasksRemaining(taskList);
}


// On to-do item Delete callback
function onDelete(event) {
    let node = event.target.parentNode;
    let index = node.getAttribute("data-index");

    localStorage.removeItem(taskList[index].id);    // Remove item from local storage

    taskList.splice(index, 1);

    renderTaskList();
}





// Filter "All" tasks click event handler
document.getElementById("allTasks").addEventListener("click", (event) =>{
    filterClick = "All";
    renderTaskList();
});

// Filter "Active" tasks click event handler
document.getElementById("activeTasks").addEventListener("click", (event) =>{
    filterClick = "Active";
    renderTaskList();
});

// Filter "Completed" tasks click event handler
document.getElementById("completedTasks").addEventListener("click", (event) =>{
    filterClick = "Completed";
    renderTaskList();
});
