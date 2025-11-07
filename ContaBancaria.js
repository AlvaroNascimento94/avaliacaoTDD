const SALDO_INICIAL_PADRAO = 0;

class ContaBancaria {
    constructor() {
        this.saldo = SALDO_INICIAL_PADRAO;
    }

    depositar(valor) {
        if(valor <= 0) {
            throw new Error('Valor de depósito inválido');
        }
        this.saldo += valor;
    }
}

module.exports = ContaBancaria;