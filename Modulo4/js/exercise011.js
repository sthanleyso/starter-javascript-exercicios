/* Exercício de Javascript 011 */

const containerElement = document.querySelector('#app');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
const listElement = document.querySelector('#app ul');

const repositories = [];

function catRepositories() {
  const usuario = inputElement.value;

  axios
    .get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      repositories.splice(0, repositories.length);
      for (repo of response.data) {
        repositories.push(repo.name);
      }
      renderRepositories();
    })
    .catch(error => {
      console.log(error);
    });
}

function renderRepositories() {
  listElement.innerHTML = null;

  for (repo of repositories) {
    let repoElement = document.createElement('li');
    let textElement = document.createTextNode(repo);

    repoElement.appendChild(textElement);
    listElement.appendChild(repoElement);
  }
}

renderRepositories();

buttonElement.onclick = catRepositories;
