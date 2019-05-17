/* Exercício de JavaScript 007 */

const buttonElement = document.querySelector('#btn');
const containerElement = document.querySelector('#container');

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

buttonElement.onclick = () => {
  const boxElement = document.createElement('div');

  boxElement.style.width = '100px';
  boxElement.style.height = '100px';
  boxElement.style.backgroundColor = '#f00';
  boxElement.onmouseover = () => {
    boxElement.style.backgroundColor = getRandomColor();
  };

  containerElement.appendChild(boxElement);
};
