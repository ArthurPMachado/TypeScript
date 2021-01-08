interface Humano {
  nome: string,
  idade?: number, 
  [prop: string]: any, 
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log(`Olá ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Beatriz'
}

const pessoa: Humano = {
  nome: 'João',
  idade: 27, 
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 });
pessoa.saudar('Silva');

// Usando Classes...
class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date;
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  };
}

const meuCliente = new Cliente();
meuCliente.nome = 'Lucas';
saudarComOla(meuCliente);
meuCliente.saudar('Oliveira');
console.log(meuCliente.ultimaCompra);