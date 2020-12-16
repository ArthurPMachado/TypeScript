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
