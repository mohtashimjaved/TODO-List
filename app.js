var todo = [];
function id() {
    return Math.floor(Math.random() * 1000000) + 1;
}
// console.log(id());
var input = document.getElementById("todo");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("add_btn").click();
    }
})


function add() {
    var input = document.getElementById("todo").value;
    if (input.trim() !== "") {
        todo.push({ title: input, id: id() });
        display();


        document.getElementById("todo").value = "";
    }
}
function deleteTodo(deleteId) {
    todo = todo.filter((todo) => todo.id !== deleteId);
    display()
}
function editTodo(editId) {
    // todo = todo.map((todo) =>
    //     todo.id === editId ? { ...todo, title: newTitle } : todo
    // );
    for (var i = 0; i < todo.length; i++) {
        if (todo[i].id == editId) {
            todo[i].title = prompt('Enter new Task:', todo[i].title)
        }
    }
    display()
}

function display() {
    var newTitle = document.getElementById("todo").value;
    var list = document.getElementById("todo_list");
    var newlist = "";
    for (var i = 0; i < todo.length; i++) {
        newlist += `
        <li class="list animate__animated animate__fadeInUp">${todo[i].title}
        <div>
        <button onclick="editTodo(${todo[i].id})" class="edit_btn"><i class="fa-solid fa-pen-to-square"></i></button>
        <button onclick="deleteTodo(${todo[i].id})" class="delete_btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        </li>
        `;

    }
    list.innerHTML = newlist;
    console.log(todo);
}