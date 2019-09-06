

function addItem(e) {
  e.preventDefault();
  let input = document.getElementById('content');
  let value = input.value;
  let errorMessageDiv = document.getElementById('error-message');
  if (!value) {
    errorMessageDiv.innerText  = "Nothing to submit";
    return;
  } else {
    errorMessageDiv.innerText  = "";
  }

  addToList(value)
}


function addToList(content) {
  let listUl = document.getElementById('todo-list');
  let newItem = document.createElement('li');
  newItem.innerHTML = content;
  listUl.appendChild(newItem);
}