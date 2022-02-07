class contaBancaria  {
    constructor(agencia, numero, tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
        get saldo(){
            return this._saldo;
        }

        set saldo(val){
            this._saldo = val;
        }

    sacar(valor){
        
        if(valor > this._saldo){
            return console.log('Saldo insuficiente');
        }
        this._saldo = this._saldo - valor;

        return console.log(`você retirou ${valor} reais, seu saldo atual é ${this._saldo}`);
    }

    depositar(valor){
        this._saldo += valor;

        return console.log(`você depositou ${valor} reais, seu saldo atual é ${this._saldo}`);

    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'conta Corrente';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia,numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia,numero);
        this.tipo = 'Conta Universitária';


    }
    sacar(valor){
        super.sacar();
        if(valor> 500){
           return console.log(`Saque inválido, não é possivel sacar mais que 500 reais`);
        }

        this._saldo = this._saldo - valor;
        return console.log(`você retirou ${valor} reais, seu saldo atual é ${this._saldo}`);
    }
}

