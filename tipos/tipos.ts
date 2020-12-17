// string
const nome: string = 'João';
console.log(nome);

// numbers
let idade: number = 27;
idade = 27.5;
console.log(idade);

// boolean
const possuiHobbies: boolean = false;
console.log(possuiHobbies);

// tipos explicitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';
// console.log(typeof minhaIdade);

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(typeof hobbies);

hobbies = [100];

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua Importante", 1260, "Bloco C"];

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 1
  Azul = 10, // 2
  Laranja,
  Amarelo,
  Vermelho = 100 
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// funcoes
function retornaNome(): string {
  return nome;
}

console.log(retornaNome());

function digaOi(): void {
  console.log('Oi');
}

digaOi();


function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}

console.log(multiplicar(2, 5));