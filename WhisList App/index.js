let todoInput = document.querySelector(".input");
let addToButton = document.querySelector(".button");
let todo;

addToButton.addEventListener("click",(e)=>{
    e.preventDefault();
    todo = todoInput.value;
    console.log("Add CLicked");
    console.log(todo);
})