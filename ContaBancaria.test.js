const ContaBancaria = require('./ContaBancaria');

test('deve criar uma conta com saldo inicial zero', () => {
    const conta = new ContaBancaria();
    expect(conta.saldo).toBe(0);
});