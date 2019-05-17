/* Exercício de Javascript 012 */

const containerElement = document.querySelector('#app');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
const listElement = document.querySelector('#app ul');
const loadingContainer = document.querySelector('#loading');

function catRepositories() {
  renderLoading();
  const user = inputElement.value;

  if (!user) return;

  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      renderRepositories(response.data);
    })
    .catch(() => {
      renderError();
    });
}

function renderLoading() {
  const loadingElement = document.createElement('p');
  const loadingText = document.createTextNode('Carregando...');
  loadingElement.appendChild(loadingText);
  loadingContainer.innerHTML = '';
  loadingContainer.appendChild(loadingElement);
}

function renderError() {
  const errorElement = document.createElement('p');
  const errorText = document.createTextNode('Erro na busca!');
  errorElement.appendChild(errorText);
  errorElement.style.color = '#f01';
  listElement.innerHTML = '';
  loadingContainer.innerHTML = '';
  loadingContainer.appendChild(errorElement);
}

function renderRepositories(repositories) {
  listElement.innerHTML = '';

  for (repo of repositories) {
    let repoElement = document.createElement('li');
    let textElement = document.createTextNode(repo.name);

    repoElement.appendChild(textElement);
    listElement.appendChild(repoElement);
  }
}

buttonElement.onclick = catRepositories;
