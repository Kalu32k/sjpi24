// The JS code for our todo app

const inputText = document.querySelector("#inputTodo");     // input text field  
const addBtn = document.querySelector("#addBtn");           // button to add text to list
const todoList = document.querySelector("#todoList");       // ul list
let completedCount = 0;
let todos=[];
import { theButton } from "./secret.js";
let status
let boxTag = 0;
const todoArray=[];




// Trigger theButton when the mouseover happens
addBtn.addEventListener("mouseenter", theButton);

// Add the todo when the button is clicked
addBtn.addEventListener("click", addTodo);

// Add the todo when the Enter key is pressed
inputTodo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();  // Call the same function as the button click
        }
    }
);


// Function to handle adding a todo
function addTodo(){
    // Get value from input
    let text = inputText.value;

    // Condition check: input must not be empty
    if (text.length == 0) {
        errorText.innerText = "Du måste skriva något";
        return;  // Return early if no text is entered
    }
    else {
        errorText.innerText =""
    }

    // Add new HTML element in ul
    const listedItem = document.createElement("li");
    todoList.appendChild(listedItem);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    listedItem.appendChild(itemLabel);

    // Add remove button
    const removeBtn = document.createElement("span")
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.innerHTML = "&#128465"
    listedItem.appendChild(removeBtn)

    removeBtn.addEventListener("click", function(){
        todoList.removeChild(listedItem);
    })


    inputText.value = "";

    // Add event listener to the new li element
    listedItem.addEventListener("click", function() {
    console.log("Clicked on the text");

        // Toggles completed states
    if (listedItem.getAttribute("class") === "completed") {
        completedCount--;
        listedItem.setAttribute("class", "");
    } 
    else {
        completedCount++;
        listedItem.setAttribute("class", "completed");
    }

    



    // Reset the input field after adding the todo item
    
        }
    );
}









