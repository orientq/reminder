

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

  addToList(value);
  input.value = "";
}


function addToList(content) {
  const id = Math.random().toString(32).slice(2).toUpperCase();
  let listUl = document.getElementById('todo-list');
  let newItem = document.createElement('li');
  newItem.innerHTML = `
    <span>${content}</span>
    <button onclick="deleteItem('${id}')"> × </button>
  `
  newItem.id = id;
  listUl.appendChild(newItem);
}

function deleteItem(id) {
  let item = document.getElementById(id);
  item.parentElement.removeChild(item);
}