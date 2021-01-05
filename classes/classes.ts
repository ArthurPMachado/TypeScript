class Data {
  // Publico por padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data; // pode omitir os "()"
casamento.ano = 2017;
console.log(casamento);
class DataEnxuta {
  constructor(public dia: number = 1, public mes: number = 1, 
    public ano: number = 1970) {
    
  }
}

const aniversarioEnxuto = new DataEnxuta(3, 11, 1991);
aniversarioEnxuto.dia = 4;
console.log(aniversarioEnxuto.dia);
console.log(aniversarioEnxuto);

const casamentoEnxuto = new DataEnxuta; // pode omitir os "()"
casamentoEnxuto.ano = 2017;
console.log(casamentoEnxuto);

class Produto {
  constructor(public nome: string, public preco: number, 
    public desconto: number = 0) {
    
  }

  aplicarDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.aplicarDesconto()} (${this.desconto * 100}% off)`
  }

}

const produtoSemDesconto = new Produto("Sofá", 999.99);
console.log(produtoSemDesconto.resumo());

const produtoComDesconto = new Produto("Televisão", 1600.00, 0.1);
console.log(produtoComDesconto.resumo());


class Carro {
  private velocidadeAtual: number = 0;

  constructor(public marca: string, public modelo: string, 
    private velocidadeMaxima: number = 200) {

  }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 
      && novaVelocidade <= this.velocidadeMaxima;

    if(velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'Ka', 185);
console.log(carro1.acelerar());

console.log(carro1.frear());

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }
  
  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari('F40', 330);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

// Getters & Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(novaIdade: number) {
    if(novaIdade >= 0 && novaIdade <= 120) {
      this._idade = novaIdade;
    }
  }
}

const pessoa1 = new Pessoa()
// pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1);


// Atributos e metodos estaticos
class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio;
  }
}

// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));

console.log(Matematica.areaCirc(4));

// Classe abstrata
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((total, next) => total + next);
  }
}
class Subtracao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((total, next) => total - next);
  }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Subtracao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());


class Unico {
  private static instancia: Unico = new Unico;

  private constructor() {}

  static getInstance(): Unico {
    return Unico.instancia;
  }

  agora() {
    return new Date;
  }
}

// const errado = new Unico();

console.log(Unico.getInstance().agora());


// Somente Leitura
class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('Tu-114', 'Pt-ABC');
// turboHelice.modelo = 'DC-8';
// turboHelice.prefixo = 'DF-7';
console.log(turboHelice);
