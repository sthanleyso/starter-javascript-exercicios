/* Exercício de JavaScript 001 */

const endereco = {
  rua: 'Rua dos pinheiros',
  numero: 1293,
  bairro: 'Centro',
  cidade: 'São Paulo',
  uf: 'SP'
};

function showAddress(address) {
  console.log(`O usuário mora em ${address.cidade} / ${address.uf}, no bairro ${address.bairro}, na rua "${address.rua}" Nº ${address.numero}.`);
}

showAddress(endereco);
