/* Exercício de JavaScript 006 */

const buttonElement = document.querySelector('#btn');
const containerElement = document.querySelector('#container');

buttonElement.onclick = () => {
  const boxElement = document.createElement('div');

  boxElement.style.width = '100px';
  boxElement.style.height = '100px';
  boxElement.style.backgroundColor = '#f00';

  containerElement.appendChild(boxElement);
};
