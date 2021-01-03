"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
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
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    aplicarDesconto() {
        if (this.desconto > 0) {
            this.preco = this.preco - (this.preco * this.desconto);
        }
    }
}
const produtoSemDesconto = new Produto("Sofá", 999.99);
console.log(produtoSemDesconto);
const produtoComDesconto = new Produto("Televisão", 1599.99, 0.15);
produtoSemDesconto.aplicarDesconto();
console.log(produtoComDesconto);
//# sourceMappingURL=classes.js.map