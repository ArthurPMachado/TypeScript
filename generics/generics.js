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
//# sourceMappingURL=generics.js.map