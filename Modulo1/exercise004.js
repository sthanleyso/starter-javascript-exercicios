/* Exercício de JavaScript 004 */

function experiencia(anos) {
  if (anos <= 1) {
    return 'Iniciante';
  } else if (anos <= 3) {
    return 'Intermediário';
  } else if (anos <= 6) {
    return 'Avançado';
  } else {
    return 'Jedi Master';
  }
}

const anosEstudo = 5;
console.log(experience(anosEstudo));
