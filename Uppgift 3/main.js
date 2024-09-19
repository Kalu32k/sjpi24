

//  Our variables
const changeBtn = document.querySelector("#changeBtn");
const changeText = document.querySelector("#changeText")

//  Add listners
helloBtn.addEventListener(
"click",
changeHello,
false
);

function changeHello(){
    changeText.innerHTML="Goodbye World";
};