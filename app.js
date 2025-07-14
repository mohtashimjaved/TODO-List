var todo = [];
function id(){
    return Math.floor(Math.random()*1000000)+1;
}  
console.log(id());

function add() {
    var input = document.getElementById("todo").value;
    if (input.trim() !== "") {
        todo.push({ title: input, id: id()});
        display();
        

        document.getElementById("todo").value = "";
    }
}

function display() {
    var list = document.getElementById("todo_list");
    var newlist = "";
    for (var i = 0; i < todo.length; i++) {
        newlist += `
        <li>
        ${todo[i].title}
        <button onclick="editTodo(${todo[i].id})"><i class="fa-solid fa-pen-to-square"></i><button/>
        <button onclick="deleteTodo(${todo[i].id})"><i class="fa-solid fa-trash"></i><button/>
        <li/>
        `;

    }
    list.innerHTML = newlist;
    console.log(todo);
}
function editTodo(uniqueId){
    var listId = todo.id
    console.log(listId);
    
    if (uniqueId === listId ){
        dldd
    }
}
