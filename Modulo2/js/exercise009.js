/* Exercício de JavaScript 009 */

const nomes = ['Diego', 'Gabriel', 'Lucas'];

const containerElement = document.querySelector('#container');
const buttonElement = document.querySelector('#container button');
const inputElement = document.querySelector('#container input[name=nome]')
const listElement = document.querySelector('#container ul');

for (nome of nomes) {
  let itemListElement = document.createElement('li');
  let textElement = document.createTextNode(nome);

  itemListElement.appendChild(textElement);
  listElement.appendChild(itemListElement);
}

containerElement.appendChild(listElement);

buttonElement.onclick = () => {
  let itemListElement = document.createElement('li');
  let textElement = document.createTextNode(inputElement.value);

  itemListElement.appendChild(textElement);
  listElement.appendChild(itemListElement);
  inputElement.value = null;
}
