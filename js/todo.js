const todoEl = document.querySelector(".todos")
const readMorebtnEl = document.querySelector(".read-more")


let allTodos = []
let todoCount = 0
const limit = 10
function getTodos() {
    const todosToShow = allTodos.slice(todoCount, todoCount + limit);

    todosToShow.forEach((todo) => {
       todoEl.innerHTML += `
        <div class="todo-card">
            <span class="todo-number">TODO #${todo.id}</span>

            <p class="user-id">User ID: ${todo.userId}</p>

            <p class="todo-id">Todo ID: ${todo.id}</p>

            <h2 class="todo-title">${todo.title}</h2>

            <p class="todo-status">
                Status:
                <span class="${todo.completed ? "completed" : "not-completed"}">
                    ${todo.completed ? "Completed ✅" : "Not completed ❌"}
                </span>
            </p>
        </div>
       ` 
    });

    todoCount += todosToShow.length;
    if (todoCount >= allTodos.length) {
    readMorebtnEl.style.display = "none";
    }
}

readMorebtnEl.addEventListener("click", () => {
    getTodos();
});

fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=> res.json())
.then((json)=>{
    allTodos=json;
    getTodos();
    
})
.catch((error)=>{
    console.log(error);
    
})
