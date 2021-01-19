var listElement = document.querySelector(".wrap .list");
var buttonElement = document.querySelector(".wrap .add-todo button");
var inputElement = document.querySelector(".wrap .add-todo input");


var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function rederizarTodos() {
    listElement.innerHTML = "";
    for ( todo of todos ) {
        var todoListElement = document.createElement("li");
        var todoElement = document.createElement("div");
        var todoText = document.createTextNode(capitalizeFirstLetter(todo));
        var linkElement = document.createElement("a");
        linkElement.href = "#";
        var todoP = document.createElement("p");
        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick" , "delTodo("+pos+")");
        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        todoP.appendChild(todoText);
        todoElement.appendChild(todoP);
        todoElement.appendChild(linkElement);
        todoListElement.appendChild(todoElement);
        listElement.appendChild(todoListElement);
    }
}

rederizarTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    rederizarTodos();
    saveToStorage();
    inputElement.focus();
}
buttonElement.onclick = addTodo;

function delTodo(pos) {
    todos.splice(pos , 1);
    rederizarTodos();
    saveToStorage();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function saveToStorage() {
    
    localStorage.setItem("list_todos" , JSON.stringify(todos) );
}
