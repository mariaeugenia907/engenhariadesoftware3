var Transacao = /** @class */ (function () {
    function Transacao(valor, desconto) {
        this.valor = valor;
        this.desconto = desconto;
    }
    Object.defineProperty(Transacao.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Transacao.prototype, "getDesconto", {
        get: function () {
            return this.desconto;
        },
        enumerable: false,
        configurable: true
    });
    Transacao.prototype.valorComDesconto = function () {
        return this.valor * (1 - this.desconto / 100);
    };
    return Transacao;
}());
var dinheiro = new Transacao(2000, 15);
console.log(dinheiro.getValor);
console.log(dinheiro.getDesconto);
console.log(dinheiro.valorComDesconto());
