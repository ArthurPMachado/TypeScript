// // string
// const nome: string = 'João';
// console.log(nome);

// // numbers
// let idade: number = 27;
// idade = 27.5;
// console.log(idade);

// // boolean
// const possuiHobbies: boolean = false;
// console.log(possuiHobbies);

// // tipos explicitos
// let minhaIdade: number;
// minhaIdade = 27;
// console.log(typeof minhaIdade);
// // minhaIdade = 'idade é 27';
// // console.log(typeof minhaIdade);

// // array
// let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
// console.log(typeof hobbies);

// hobbies = [100];

// // tuplas
// let endereco: [string, number, string] = ["Av Principal", 99, ""];
// console.log(endereco);

// endereco = ["Rua Importante", 1260, "Bloco C"];

// // enums
// enum Cor {
//   Cinza, // 0
//   Verde = 100, // 1
//   Azul = 10, // 2
//   Laranja,
//   Amarelo,
//   Vermelho = 100 
// }

// let minhaCor: Cor = Cor.Verde;
// console.log(minhaCor);

// // any
// let carro: any = 'BMW';
// console.log(carro);
// carro = { marca: 'BMW', ano: 2019 };
// console.log(carro);

// // funcoes
// function retornaNome(): string {
//   return nome;
// }

// console.log(retornaNome());

// function digaOi(): void {
//   console.log('Oi');
// }

// digaOi();


// function multiplicar(numero1: number, numero2: number): number {
//   return numero1 * numero2;
// }

// console.log(multiplicar(2, 5));

// // tipo funcao
// let calculo: (numero1: number, numero2: number) => number;
// // calculo = digaOi;
// // calculo();

// calculo = multiplicar;
// console.log(calculo(5, 6));

// // objetos
// let usuario: { nome: string, idade: number } = {
//   nome: 'João',
//   idade: 27
// }

// console.log(usuario);

// usuario = {
//   idade: 31,
//   nome: 'Maria'
// }

// console.log(usuario);


// function baterPonto (hora: number): string {
//   if (hora <= 8) {
//     return "Ponto Normal";
//   }

//   return "Fora do horário";
// }

// // Alias
// type Funcionario = {
//   nome: string, 
//   idade: number, 
//   supervisores: string[], 
//   cargo: string, 
//   baterPonto: (hora: number) => string 
// }

// const funcionario: Funcionario = {
//   nome: 'Alberto',
//   idade: 37,
//   supervisores: ['Romildo', 'Carlos', 'Roberto'],
//   cargo: 'Analista de Cloud',
//   baterPonto
// };

// console.log(funcionario.baterPonto(10));

// const funcionario2: Funcionario = {
//   nome: 'Gabriela',
//   idade: 24,
//   supervisores: ['Bia', 'Ronaldo'],
//   cargo: 'Analista de Marketing',
//   baterPonto
// };

// // Union Types
// let nota: number | string = 10;
// console.log(`Minha nota é ${nota}`);

// nota = '10';
// console.log(`Minha nota é ${nota}`);

// // Never
// function falha(message: string): never {
//   throw new Error(message);
// }

// const produto = {
//   nome: 'Sabão', 
//   preco: 1,
//   validarProduto() {
//     if(!this.nome || this.nome.trim().length === 0) {
//       falha('Precisa ter um nome');
//     }
//     if(this.preco <= 0) {
//       falha('Preço inválido');
//     }
//   }
// }

// produto.validarProduto();

// let altura = 12;
// // altura = null;

// let alturaOpcional: number | null = 12;
// alturaOpcional = null;

// type Contato = {
//   nome: string, 
//   tel1: string,
//   tel2: string | null,
// }

// const contato1: Contato = {
//   nome: 'Jilmar',
//   tel1: '98765432',
//   tel2: null,
// }

// let podeSerNulo = null;
// podeSerNulo = 12;
// podeSerNulo = 'abc';