// G L O B A L
let id = 1;


// A D D   T O D O
function addTodo() {
    let inputTodo = document.getElementById("todo");
    
    document.getElementById("list-todos").innerHTML+=`
        <li id="${id}"><button id="${id}" class="mb-1 btn btn-sm btn-outline-danger" onclick="deleteTodo(id)">Delete</button> <b>${inputTodo.value}</b></li>
    `;

    inputTodo.value="";
    inputTodo.focus();
    id ++;
}


// D E L E T E   T O D O
function deleteTodo(todoId) {
    document.getElementById(`${todoId}`).style.display="none";
}


// R E F R E S H   P A G E
const refresh = () => location.reload();


// I N I T
function init() {
    document.getElementById("todo").addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            addTodo();
        }
    });
}

window.onload = init;