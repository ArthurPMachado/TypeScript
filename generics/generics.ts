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

// Array
function imprimir<T>(args: T[]) { 
  args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia', 'Carlos']);
imprimir<{ nome: string, idade: number}>([
  { nome: 'Ricardo', idade: 22 },
  { nome: 'Renata', idade: 30 },
  { nome: 'Matheus', idade: 27 },
]);

type Aluno = { nome: string, idade: number}
imprimir<Aluno>([
  { nome: 'Ricardo', idade: 22 },
  { nome: 'Renata', idade: 30 },
  { nome: 'Matheus', idade: 27 },
]);

// Tipo Genérico
type Echo =  <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma coisa'));


// Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T,
    public operando2: T) {}


  abstract executar(): R
  
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar());
// console.log(new OperacaoBinaria(2, 3).executar());
// console.log(new OperacaoBinaria(2, ' Uepa').executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 40).executar());