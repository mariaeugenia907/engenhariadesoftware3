class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;
    saldo: number = 0;
  
  
    Saldo(): number{
      return this.saldo = this.valorCreditos - this.valorDebitos;
    }
  }
  let sf: SituacaoFinanceira;
  sf = new SituacaoFinanceira();
  sf.valorCreditos = 500;
  sf.valorDebitos = 250;

  console.log("Saldo do cliente: " + sf.Saldo());
