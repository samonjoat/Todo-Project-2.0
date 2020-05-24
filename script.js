var addButton = document.getElementById("add-button");
var completedButton = document.getElementById("clear-completed-button");
var emptyButton = document.getElementById("empty-button");
var saveButton = document.getElementById("save-button");
var todoEntryBox = document.getElementById("todo-entry-box");
var todoList = document.getElementById("todo-list");
var form = document.querySelector("form");

addButton.addEventListener("click", addTodoItem);
completedButton.addEventListener("click", clearCompletedTodoItems);
emptyButton.addEventListener("click", emptyList);
saveButton.addEventListener("click", saveList);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (todoEntryBox.value == "") {
    todoEntryBox.placeholder = `enter a valid input`;
    return false;
  }
});

function addTodoItem() {
  var itemText = todoEntryBox.value;
  newTodoItem(itemText, false);
}
function clearCompletedTodoItems() {
  var completedItems = todoList.getElementsByClassName("completed");
  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}
function emptyList() {
  var todoItems = todoList.children;
  while (todoItems.length > 0) {
    todoItems.item(0).remove();
  }
}
function saveList() {
  var todos = [];
  for (var i = 0; i < todoList.children.length; i++) {
    var todo = todoList.children.item(i);

    var todoInfo = {
      task: todo.innerText,
      completed: todo.classList.contains("completed"),
    };
    todos.push(todoInfo);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}

function newTodoItem(itemText, completed) {
  var todoItem = document.createElement("li");
  var todoText = document.createTextNode(itemText);
  todoItem.appendChild(todoText);

  if (completed) {
    todoItem.classList.add("completed");
  }

  todoList.appendChild(todoItem);
  todoItem.addEventListener("dblclick", toggleTodoItemState);
}

function toggleTodoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

function loadList() {
  if (localStorage.getItem("todos") != null) {
    var todo = JSON.parse(localStorage.getItem("todos"));

    for (var i = 0; i < todos.length; i++) {
      var todo = todo[i];
      newTodoItem(rodo.task, todo.completed);
    }
  }
}
loadList();
