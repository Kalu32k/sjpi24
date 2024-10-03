// The JS code for our todo app
// Getting the HTML elements
const inputText = document.querySelector("#inputTodo");     // Input text field  
const addBtn = document.querySelector("#addBtn");           // Button to add text to list
const todoList = document.querySelector("#todoList");       // Unorderd List ul
const countTodo = document.querySelector("countTodo")        // Todo count

// Declaring the variables
let completedCount = 0;
const todoArray=[];

// Importing the function from another javascript file
import { theButton } from "./secret.js";


 // Change status of the todo
 function changeStatus(text,status){
    let changeIndex = todoArray.map(t => t.name).indexOf(text);
    todoArray[changeIndex].completed = status;
   console.log(todoArray) 
}

function deleteFromArray(text){
    let changeIndex = todoArray.map(t => t.name).indexOf(text);
    delete todoArray[changeIndex]
}



// Trigger theButton when the mouseover happens
addBtn.addEventListener("mouseenter", theButton);

// Add the todo when the button is clicked
addBtn.addEventListener("click", addTodo);

// Add the todo when the Enter key is pressed
inputTodo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();  // The Enter key acts as a regular mouseclick
        }
    }
);


// Function to handle adding a todo
function addTodo(){
    // Get value from input
    let text = inputText.value;

    // Condition check that input must not be empty
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

    const itemLabel = document.createElement("span")
    itemLabel.setAttribute("class","todotext");
   // querySelector("span").setAttribute("class","todotext");
    itemLabel.innerText = text;
    listedItem.appendChild(itemLabel);

   // Add remove button
    const removeBtn = document.createElement("span")
    removeBtn.setAttribute("class", "removeBtn");
    removeBtn.innerHTML = "&#128465"
    listedItem.appendChild(removeBtn)
    removeBtn.addEventListener("click", function(){
    todoList.removeChild(listedItem);
    deleteFromArray(text)
    })
    


    // Reset the input field after adding the todo item
    inputText.value = "";

    // Add event listener to the new span element
    itemLabel.addEventListener("click", function() {
   










        
        // Toggles completed states
    if (itemLabel.getAttribute("class","todotext") == "completed") {
        completedCount--;
        itemLabel.setAttribute("class", "");
        let todoText = itemLabel.firstChild.Text
        changeStatus(text, false)
        console.log(completedCount)
        console.log(todoArray)
    } 
    else {
        
        itemLabel.setAttribute("class", "completed");
        completedCount++;
        let todoText = itemLabel.firstChild.Text
        changeStatus(text, true)
        console.log(completedCount)
        console.log(todoArray)
        }

        //countTodo.innerText= `Number of completed todos: `+ completedCount;

            })

       // Add to array
       const todoObject = {};
       todoObject.name = text;
       todoObject.completed = false;
       todoArray.push(todoObject);
    







       
    //console.log(completedCount)
    console.log(todoArray)
       
        

 


    }