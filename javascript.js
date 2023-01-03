const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list") 

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = "Finalizar"
    todo.appendChild(doneBtn)
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = "Remover"
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
    console.log(todo)

}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value

    if (inputValue) {
        saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target 
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("finish-todo")) {
       parentEl.classList.toggle("done");
    }
    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }
    if(targetEl.classList.contains("edit-todo")) {
        parentEl.remove();
    }

});

