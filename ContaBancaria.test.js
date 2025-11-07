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

test('não deve permitir depósito de valor zero', () => {
    const conta = new ContaBancaria();
    const acao = () => conta.depositar(0);
    expect(acao).toThrow('Valor do depósito deve ser maior que zero');
    expect(conta.saldo).toBe(0);
});

test('não deve permitir depósito de valor negativo', () => {
    const conta = new ContaBancaria();
    const acao = () => conta.depositar(-50);
    expect(acao).toThrow('Valor do depósito deve ser maior que zero');
    expect(conta.saldo).toBe(0);
});