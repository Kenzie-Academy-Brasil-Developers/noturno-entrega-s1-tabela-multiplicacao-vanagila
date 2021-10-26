function multiplication() {
  // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
  // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
  let resultado = [[]];
  for (let coluna = 0; coluna <= 10; coluna++) {
    resultado[coluna] = [];

    for (let linha = 0; linha <= 10; linha++) {
      resultado[coluna][linha] = coluna * linha;
    }
  }
  return resultado;
}
console.table(multiplication());
