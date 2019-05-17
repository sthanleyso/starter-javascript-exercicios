/* Exercício de JavaScript 005 */

function showUsers(users) {
  for (user of users) {
    console.log(
      `O ${user.nome} possui as habilidades: ${user.habilidades.join(", ")}`
    );
  }
}

const usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

showUsers(usuarios);
