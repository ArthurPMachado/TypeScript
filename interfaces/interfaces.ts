interface Humano {
  nome: string
}

function saudarComOla(pessoa: Humano) {
  console.log(`Olá ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Beatriz'
}

const pessoa = {
  nome: 'João',
  idade: 27
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);