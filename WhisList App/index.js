let todoInput = document.querySelector(".input");
let addToButton = document.querySelector(".button");
let showTodo = document.querySelector(".todos-container");
let todo;
let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];

/** Creating function to get unique id */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxxx-xxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}

addToButton.addEventListener("click", (e) => {
    e.preventDefault();
    todo = todoInput.value;
    //console.log("Add CLicked");
    if (todo.length > 0) {
        todoList.push({ id: uuid(), todo: todo, isCompleted: false });
    }
    localStorage.setItem("todo", JSON.stringify(todoList));
    renderTodoList(todoList);
    todoInput.value = "";
    // console.log(todoList);
});

showTodo.addEventListener('click', (event) => {
    let key = event.target.dataset.key;
    let delTodoKey = event.target.dataset.todokey;

    todoList = todoList.filter(todo => todo.id !== delTodoKey);
    // console.log(key);
    // console.log(event.target);
    todoList = todoList.map(todo => {
        return (todo.id === key ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    })
    console.log(todoList);
    localStorage.setItem("todo", JSON.stringify(todoList));
    renderTodoList(todoList);
});

function renderTodoList(todoList) {
    console.log(todoList);
    showTodo.innerHTML = todoList.map(
        ({
            id,
            todo,
            isCompleted }) =>
            `<div class="relative todo"><input class="t-checkbox" id="item-${id}" type = "checkbox" data-key=${id} ${isCompleted ? "checked" : ""}> <label class="todo todo-text t-pointer ${isCompleted ? "checked-todo" : ""}" for="item-${id}" data-key=${id}>${todo}</label><button class="absolute right-0 button cursor"><span class="del-btn material-icons-outlined" data-todokey=${id}>delete</span></button></div>`);
}

renderTodoList(todoList);