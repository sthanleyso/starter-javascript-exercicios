const containerElement = document.querySelector('#app');
const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

const todos = JSON.parse(localStorage.getItem('list-todos')) || [];

function renderTodos() {
  listElement.innerHTML = null;

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let textElement = document.createTextNode(todo);

    let linkElement = document.createElement('a');
    let linkText = document.createTextNode('Excluir');
    linkElement.setAttribute('href', '#');

    let pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', `popTodo(${pos})`);

    linkElement.appendChild(linkText);
    todoElement.appendChild(textElement);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function pushTodo() {
  let todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = null;
  renderTodos();
  saveToStorage();
}

function popTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list-todos', JSON.stringify(todos));
}

buttonElement.onclick = pushTodo;
