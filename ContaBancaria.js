const SALDO_INICIAL_PADRAO = 0;

class ContaBancaria {
    constructor() {
        this.saldo = SALDO_INICIAL_PADRAO;
    }

    static _validarValor(valor) {
        if (valor <= 0) {
            throw new Error('Valor de depósito inválido');
        }
    }

    depositar(valor) {
        ContaBancaria._validarValor(valor);
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }
}

module.exports = ContaBancaria;