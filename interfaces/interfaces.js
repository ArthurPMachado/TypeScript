"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Beatriz';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 });
pessoa.saudar('Silva');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
    ;
}
const meuCliente = new Cliente();
meuCliente.nome = 'Lucas';
saudarComOla(meuCliente);
meuCliente.saudar('Oliveira');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    // Array(expoente).fill(base).reduce((total, next) => total * next);
    // Math.pow(base, expoente);
    return Math.pow(base, expoente);
};
console.log(potencia(2, 8));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function teste(b) {
}
teste(new RealABC);
class AbstrataABD {
    a() { }
    b() { }
}
//# sourceMappingURL=interfaces.js.map