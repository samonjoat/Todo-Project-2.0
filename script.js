var addButton = document.getElementById("add-button");
var completedButton = document.getElementById("clear-completed-button");
var emptyButton = document.getElementById("empty-button");
var saveButton = document.getElementById("save-button");
var todoEntryBox = document.getElementById("todo-entry-box");
var tofoList = document.getElementById("todo-list");
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
  alert("clear button clicked");
}
function emptyList() {
  alert("empty button clicked");
}
function saveList() {
  alert("Save button clicked");
}

function newTodoItem(itemText) {
  var todoItem = document.createElement("li");
  var todoText = document.createTextNode(itemText);
  todoItem.appendChild(todoText);

  if (completed) {
    todoItem.classList.add("completed");
    return false;
  }

  todoList.appendChild(todoItem);
  todoItem.addEventListener("dblclick", toggleTodoItemState);
}
