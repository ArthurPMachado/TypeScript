"use strict";
// string
const nome = 'João';
console.log(nome);
// numbers
let idade = 27;
idade = 27.5;
console.log(idade);
// boolean
const possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';
// console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(typeof hobbies);
hobbies = [100];
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funcoes
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplicar(2, 5));
// tipo funcao
let calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
function baterPonto(hora) {
    if (hora <= 8) {
        return "Ponto Normal";
    }
    return "Fora do horário";
}
const funcionario = {
    nome: 'Alberto',
    idade: 37,
    supervisores: ['Romildo', 'Carlos', 'Roberto'],
    cargo: 'Analista de Cloud',
    baterPonto
};
console.log(funcionario.baterPonto(10));
const funcionario2 = {
    nome: 'Gabriela',
    idade: 24,
    supervisores: ['Bia', 'Ronaldo'],
    cargo: 'Analista de Marketing',
    baterPonto
};
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// Never
function falha(message) {
    throw new Error(message);
}
const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Jilmar',
    tel1: '98765432',
    tel2: null,
};
let podeSerNulo = null;
podeSerNulo = 12;
podeSerNulo = 'abc';
//# sourceMappingURL=tipos.js.map