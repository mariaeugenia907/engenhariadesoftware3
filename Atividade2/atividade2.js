var Produto = /** @class */ (function () {
    function Produto(codigo, descricao, valor, quantidademinima) {
        this.quantidade = 0;
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.quantidademinima = quantidademinima;
    }
    Produto.prototype.repor = function (adicao) {
        if (this.quantidade + adicao < this.quantidademinima) {
            console.log("Quantidade abaixo do mínimo, não é possivel adicionar.");
            return false;
        }
        else {
            this.quantidade += adicao;
        }
    };
    Produto.prototype.baixar = function (remocao) {
        if (this.quantidade - remocao < this.quantidademinima) {
            console.log("Quantidade abaixo do mínimo, não é possivel adicionar.");
            return false;
        }
        else {
            this.quantidade -= remocao;
        }
    };
    Produto.prototype.reajusta = function (taxa) {
        this.valor = this.valor * (taxa / 100);
    };
    Produto.prototype.toString = function () {
        return "Código: " + this.codigo + "Descrição: " + this.descricao + "Valor da unidade: " + this.valor
            + "Quantidade: " + this.quantidade + "Quantidade mínima: " + this.quantidademinima;
    };
    Produto.prototype.equals = function (produto) {
        if (produto.codigo == this.codigo) {
            return true;
        }
        else {
            return false;
        }
    };
    return Produto;
}());
var lapis = new Produto(1, "lapis", 15, 8);
var caneta = new Produto(2, "caneta", 20, 10);
lapis.repor(15);
lapis.baixar(8);
lapis.reajusta(50);
console.log("lapis e caneta possuem codigos iguais?: ", lapis.equals(caneta));
console.log(lapis.toString());
