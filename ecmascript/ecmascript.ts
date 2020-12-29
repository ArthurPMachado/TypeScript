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

// this

function normalComThis() {
  console.log(this);
}

const normalComThisEspecial = normalComThis.bind(2);

normalComThisEspecial();

const arrowComThis = () => console.log(this);
arrowComThis();

// Parametros padrao
function contagemRegressiva(inicio: number = 3): void {
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

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Gabriel', ...turmaA, 'Miguel', 'Lorena'];

console.log(turmaB);

function retornarArray(...numbers: number[]): number[] {
  return numbers;
}

const numeros = retornarArray(1, 2, 76, 365, 54);
console.log(numeros);
console.log(retornarArray(...numbers));

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(number: number, text: string, validate: boolean): void {
  console.log(`1) ${number} ${text} ${validate}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// Destructuring (object)
const item = {
  nome: 'SSD 480GB',
  preco: 200
};

// const nomeItem = item.nome;
// const preco = item.preco;

const { nome: n, preco } = item;
console.log(n);
console.log(preco);

// Template String
const usuarioID: string = 'SuporteCod3r';
const notificacoes: string = '9';
const boasVindas = `Boas vindas ${usuarioID}, notificações: ${notificacoes}`;
console.log(boasVindas);