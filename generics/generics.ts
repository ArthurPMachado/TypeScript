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