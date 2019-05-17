/* Curso de JavaScript */

function exibeAlgo() {
  console.log('Hello World');
}

// setInterval(exibeAlgo, 1000);
// setTimeout(exibeAlgo, 5000);

function showAlert() {
  alert('Botão pressionado');
}

/* const inputElement = document.querySelector('input[name=nome]'); */
const buttonElement = document.querySelector('button.btn');
const spanElement = document.querySelector('#txtBtn');

function setSpanText() {
  spanElement.textContent = 'ADICIONAR QUADRADO';
}

buttonElement.onclick = function() {
  // const text = document.createTextNode('PRESSIONANDO...');
  // alert(text);
  spanElement.textContent = 'ADICIONANDO...';
  setTimeout(setSpanText, 3000);
}

// console.log(buttonElement);

/* const linkElement = document.createElement('a');
linkElement.setAttribute('href', 'https://rocketseat.com.br');
linkElement.setAttribute('title', 'Site da RocketSeat');

const textElement = document.createTextNode('Acessar RocketSeat');
linkElement.appendChild(textElement);

const containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

const inputElement = document.querySelector('input[name=nome]');
containerElement.removeChild(inputElement); */

/* const boxElement = document.querySelector('.box');

boxElement.style.width = 100;
boxElement.style.height = 100;
boxElement.style.backgroundColor = '#da1';
boxElement.style.border = '1px solid #1f1f1f'; */

const textAreaElement = document.querySelector('textarea#output');
textAreaElement.textContent = 'Hello World';
