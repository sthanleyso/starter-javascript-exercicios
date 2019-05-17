/* Exercício de JavaScript 010 */

const checaIdade = idade => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return idade >= 18 ? resolve('Maior que 18') : reject('Menor que 18');
    }, 2000);
  });
};

checaIdade(20)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.warn(error);
  });
