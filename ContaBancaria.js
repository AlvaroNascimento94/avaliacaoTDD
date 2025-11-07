const SALDO_INICIAL_PADRAO = 0;

class ContaBancaria {
    constructor() {
        this.saldo = SALDO_INICIAL_PADRAO;
    }

    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
}

module.exports = ContaBancaria;