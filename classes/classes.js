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
    resumo() {
        return `${this.nome} custa ${this.preco} (${this.desconto * 100}% off)`;
    }
    aplicarDesconto() {
        if (this.desconto > 0) {
            this.preco = this.preco - (this.preco * this.desconto);
            return this.resumo();
        }
        return this.resumo();
    }
}
const produtoSemDesconto = new Produto("Sofá", 999.99);
console.log(produtoSemDesconto.aplicarDesconto());
const produtoComDesconto = new Produto("Televisão", 1599.99, 0.15);
console.log(produtoComDesconto.aplicarDesconto());
//# sourceMappingURL=classes.js.map