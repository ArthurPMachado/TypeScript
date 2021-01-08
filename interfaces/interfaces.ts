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

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo;

potencia = function(base: number, expoente: number): number {
  // Array(expoente).fill(base).reduce((total, next) => total * next);
  // Math.pow(base, expoente);
  return base ** expoente;
}

console.log(potencia(2, 8));

// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void{}
  b(): void{}
}

class RealABC implements ABC {
  a(): void{}
  b(): void{}
  c(): void{}
}

function teste(b: B) {

}

teste(new RealABC);

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}