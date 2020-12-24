// let & const
let seraQuePode = '?';
console.log(seraQuePode);

let estarFrio = true;
if(estarFrio) {
  let acao = 'Colocar o casaco!'
  console.log(acao);
}

const cpf: string = '123.456.000-99';
// cpf = '789.101.132-78';
console.log(cpf);

// Arrow function 
function somar(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(somar(1, 1));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(1, 1));

const saudacao = () => console.log("Olá");
saudacao();