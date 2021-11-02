class Produto {
    codigo: number;
    descricao: String;
    valor: number;
    quantidade: number = 0;
    quantidademinima: number;


    constructor(codigo: number, descricao: string, valor: number, quantidademinima: number) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.valor = valor;
    this.quantidademinima = quantidademinima;
    }


    repor(adicao: number): boolean {
        if (this.quantidade + adicao < this.quantidademinima) {
            console.log("Quantidade abaixo do mínimo, não é possivel adicionar.")
            return false;
        } else {
            this.quantidade += adicao;
        }
    }


    baixar(remocao: number): boolean {
        if (this.quantidade - remocao < this.quantidademinima) {
            console.log("Quantidade abaixo do mínimo, não é possivel adicionar.")
            return false;
        } else {
            this.quantidade -= remocao;
        }
    }
    
    reajusta(taxa: number) {
        this.valor = this.valor * (taxa / 100);
    }


    toString(): String {
        return "Código: " + this.codigo + "Descrição: " + this.descricao + "Valor da unidade: " + this.valor
        + "Quantidade: " + this.quantidade + "Quantidade mínima: " + this.quantidademinima;
    }
    
    equals(produto: Produto): boolean {
        if (produto.codigo == this.codigo) {
            return true;
        } else { return false }
    }
}
let lapis: Produto = new Produto(1, "lapis", 15, 8);
let caneta: Produto = new Produto(2, "caneta", 20, 10);
lapis.repor(15);
lapis.baixar(8);
lapis.reajusta(50);
console.log("lapis e caneta possuem codigos iguais?: ", lapis.equals(caneta));
console.log(lapis.toString());

    