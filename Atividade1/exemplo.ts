class Conta2 {
    numero: String;
    saldo: number;
    constructor(n: String, saldoI: number) {
    this.numero = n;
    this.saldo = saldoI;
    }
    sacar(valor: number): boolean {
    if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            return true;
        } else {
            console.log("Não é possível realizar essa operação", valor, ", saldo: ", this.saldo);
            return false;
        }
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    Saldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta2, valor: number): boolean {
        if (this.sacar(valor) == false) {
            console.log("saldo insuficiente.")
            return false;
        }
        contaDestino.depositar(valor);
    }
}
let c01: Conta2 = new Conta2("1", 100);
let c02: Conta2 = new Conta2("2", 100);


c01.transferir(c02, 100);
c02.transferir(c01, 150);
c01.sacar(125);

console.log("conta 1: ", c01.saldo);
console.log("conta 2: ", c02.saldo);