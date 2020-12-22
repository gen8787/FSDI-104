let id = 1;
document.getElementById("todo").addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        addTodo();
    }
});

// A D D   T O D O
function addTodo() {
    let inputTodo = document.getElementById("todo");
    
    document.getElementById("list-todos").innerHTML+=`
        <li id="${id}">${inputTodo.value} <button id="${id}" class="btn btn-sm btn-outline-danger" onclick="deleteTodo(this.id)">Delete</button></li>
    `;

    inputTodo.value="";
    inputTodo.focus();
    id ++;
}

// D E L E T E   T O D O
function deleteTodo(todoId) {
    document.getElementById(`${todoId}`).style.display="none";
}