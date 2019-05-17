/* Exercício de JavaScript 008 */

const nomes = ['Diego', 'Gabriel', 'Lucas'];
const listElement = document.querySelector('#lista');

for (nome of nomes) {
  let liElement = document.createElement('li');
  let textElement = document.createTextNode(nome);

  liElement.appendChild(textElement);
  listElement.appendChild(liElement);
}
