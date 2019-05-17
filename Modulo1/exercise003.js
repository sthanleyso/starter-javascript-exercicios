/* Exercício de JavaScript 003 */

function temHabilidade(skills) {
  return (skills.indexOf('JavaScript')) ? true : false;
}
const skills = ['Ruby On Rails', 'ReactJS', 'JavaScript', 'React Native'];
console.log(temHabilidade(skills));
