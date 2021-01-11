function echo(objeto: any) {
  return objeto;
}

console.log(echo('João'));
console.log(echo(27));
console.log(echo({ nome: 'Roberto', idade: 27 }));

// Usando generics
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado('João'));
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'Roberto', idade: 27 }));

// Generics API
const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);
