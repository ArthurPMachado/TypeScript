"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João'));
console.log(echo(27));
console.log(echo({ nome: 'Roberto', idade: 27 }));
// Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João'));
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'Roberto', idade: 27 }));
// Generics API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Ricardo', idade: 22 },
    { nome: 'Renata', idade: 30 },
    { nome: 'Matheus', idade: 27 },
]);
imprimir([
    { nome: 'Ricardo', idade: 22 },
    { nome: 'Renata', idade: 30 },
    { nome: 'Matheus', idade: 27 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom ', 'dia').executar());
// console.log(new OperacaoBinaria(2, 3).executar());
// console.log(new OperacaoBinaria(2, ' Uepa').executar());
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 40).executar());
//# sourceMappingURL=generics.js.map