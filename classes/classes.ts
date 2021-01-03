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