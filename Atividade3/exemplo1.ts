class Transacao {
    readonly valor: number;
    readonly desconto: number;

constructor(valor: number, desconto: number){
    this.valor = valor;
    this.desconto = desconto;
}
get getValor(): number{
    return this.valor;
}
get getDesconto(): number{
    return this.desconto;
}

valorComDesconto(): Number{
    return this.valor * (1 - this.desconto / 100);
}

}
 
const dinheiro = new Transacao(2000, 15);
console.log(dinheiro.getValor);
console.log(dinheiro.getDesconto);
console.log(dinheiro.valorComDesconto());


