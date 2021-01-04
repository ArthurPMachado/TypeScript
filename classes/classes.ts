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

  private alterarVelocidade(delta: number): number {
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