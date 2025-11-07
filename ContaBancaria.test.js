const ContaBancaria = require('./ContaBancaria');

test('deve criar uma conta com saldo inicial zero', () => {
    const conta = new ContaBancaria();
    expect(conta.saldo).toBe(0);
});

test('deve realizar um depósito válido', () => {
    const conta = new ContaBancaria();
    conta.depositar(100);
    expect(conta.saldo).toBe(100);
});