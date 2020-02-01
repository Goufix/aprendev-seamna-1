const users = [
  { nome: "Goufix", password: "@pr#nd#v" },
  { nome: "Eliton", password: "123" },
  { nome: "Luiz", password: "Luiz" }
];
function mapCallback(valorAtual, indice, array) {
  console.log(`Valor atual: ${valorAtual}, Indice: ${indice}, array: ${array}`);
}
users.map(mapCallback);
users.map((valorAtual, indice, array) => {});
