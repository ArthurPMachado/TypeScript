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
//# sourceMappingURL=generics.js.map