var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
        this.saldo = 0;
    }
    SituacaoFinanceira.prototype.Saldo = function () {
        return this.saldo = this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var sf;
sf = new SituacaoFinanceira();
sf.valorCreditos = 500;
sf.valorDebitos = 250;
console.log("Saldo do cliente: " + sf.Saldo());
