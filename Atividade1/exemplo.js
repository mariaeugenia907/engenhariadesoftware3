var Conta2 = /** @class */ (function () {
    function Conta2(n, saldoI) {
        this.numero = n;
        this.saldo = saldoI;
    }
    Conta2.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            return true;
        }
        else {
            console.log("Não é possível realizar essa operação", valor, ", saldo: ", this.saldo);
            return false;
        }
    };
    Conta2.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta2.prototype.Saldo = function () {
        return this.saldo;
    };
    Conta2.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor) == false) {
            console.log("saldo insuficiente.");
            return false;
        }
        contaDestino.depositar(valor);
    };
    return Conta2;
}());
var c01 = new Conta2("1", 100);
var c02 = new Conta2("2", 100);
c01.transferir(c02, 100);
c02.transferir(c01, 150);
c01.sacar(125);
console.log("conta 1: ", c01.saldo);
console.log("conta 2: ", c02.saldo);
