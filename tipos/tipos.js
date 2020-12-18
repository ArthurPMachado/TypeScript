"use strict";
// string
var nome = 'João';
console.log(nome);
// numbers
var idade = 27;
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';
// console.log(typeof minhaIdade);
// array
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(typeof hobbies);
hobbies = [100];
// tuplas
var endereco = ["Av Principal", 99, ""];
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
var minhaCor = Cor.Verde;
console.log(minhaCor);
// any
var carro = 'BMW';
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
var calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
var usuario = {
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
var funcionario = {
    nome: 'Alberto',
    idade: 37,
    supervisores: ['Romildo', 'Carlos', 'Roberto'],
    cargo: 'Analista de Cloud',
    baterPonto: baterPonto
};
console.log(funcionario.baterPonto(10));
var funcionario2 = {
    nome: 'Gabriela',
    idade: 24,
    supervisores: ['Bia', 'Ronaldo'],
    cargo: 'Analista de Marketing',
    baterPonto: baterPonto
};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = '10';
console.log("Minha nota \u00E9 " + nota);
