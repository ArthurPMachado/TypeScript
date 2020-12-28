"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estarFrio = true;
if (estarFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
// cpf = '789.101.132-78';
console.log(cpf);
// Arrow function 
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(1, 1));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(1, 1));
const saudacao = () => console.log("Olá");
saudacao();
// this
function normalComThis() {
    console.log(this);
}
const normalComThisEspecial = normalComThis.bind(2);
normalComThisEspecial();
const arrowComThis = () => console.log(this);
arrowComThis();
// Parametros padrao
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva();
// Rest & Spread
const numbers = [1, 10, 99, -5, 220, 765];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Gabriel', ...turmaA, 'Miguel', 'Lorena'];
console.log(turmaB);
//# sourceMappingURL=ecmascript.js.map