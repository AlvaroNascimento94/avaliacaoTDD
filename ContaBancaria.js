const SALDO_INICIAL_PADRAO = 0;

class ContaBancaria {
    constructor() {
        this.saldo = SALDO_INICIAL_PADRAO;
    }

    static _validarValorPositivo(valor) {
        if (valor <= 0) {
            throw new Error('O valor da operação deve ser maior que zero');
        }
    }

    depositar(valor) {
        ContaBancaria._validarValorPositivo(valor);
        this.saldo += valor;
    }

   sacar(valor) {
        ContaBancaria._validarValorPositivo(valor);
        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= valor;
    }
}

module.exports = ContaBancaria;