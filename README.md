# Projeto TDD: TDD-Alvaro-Nascimento

Este projeto é uma atividade prática para aplicar o ciclo de Desenvolvimento Guiado por Testes (Test-Driven Development - TDD) na construção de uma aplicação simples.

## 1. Projeto Escolhido

A opção escolhida foi a **Sistema de Conta Bancária Simples**.

O objetivo foi implementar uma classe `ContaBancaria` que permitisse:
* Criar uma conta com saldo inicial zero.
* Realizar depósitos válidos.
* Realizar saques válidos.
* Consultar o saldo.
* Bloquear operações (saque/depósito) com valores menores ou iguais a zero.
* Bloquear saques com valor maior que o saldo disponível.

## 2. Ferramentas Utilizadas

* **Linguagem:** JavaScript (executado com Node.js)
* **Ferramenta de Teste:** [Jest](https://jestjs.io/)

## 3. Como Executar o Projeto

**Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/) (que inclui o NPM) instalado.

1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/AlvaroNascimento94/avaliacaoTDD.git)
    cd avaliacaoTDD
    ```

2.  **Instalar as dependências:**
    Este comando instalará o Jest, que é a única dependência de desenvolvimento.
    ```bash
    npm install
    ```

3.  **Executar os testes:**
    Para rodar a suíte de testes e verificar se todas as regras de negócio estão sendo atendidas, execute:
    ```bash
    npm test
    ```

    Você deverá ver uma saída indicando que todos os testes passaram.

## 4. Minha Experiência com TDD

*(Sugestão de texto para você se basear - sinta-se à vontade para editar com suas próprias palavras)*

Seguir o ciclo TDD (RED -> GREEN -> REFACTOR) rigorosamente foi uma experiência de aprendizado muito valiosa. No início, parecia lento escrever um teste que falhava (RED) para uma funcionalidade óbvia, como o construtor da classe.

No entanto, a disciplina de só escrever o código de produção (GREEN) *depois* de ter um teste falho mudou minha forma de pensar. Eu não estava mais escrevendo código e "torcendo" para que funcionasse; eu estava escrevendo código para satisfazer um requisito específico que o teste definia.

O momento mais revelador foi a etapa de REFACTOR. Após implementar a validação de depósito (Ciclo 3), o código funcionava, mas a mensagem de erro era muito específica (`'Valor de depósito inválido'`). Quando fomos implementar o saque, percebemos que a validação era a mesma.

A etapa de REFACTOR (Ciclo 5) nos permitiu "limpar" esse código, criando um método estático genérico (`_validarValorPositivo`). Isso tornou o código mais limpo, removeu duplicação e melhorou o design, tudo isso com a segurança de que os testes anteriores continuavam passando.

O TDD me deu muito mais confiança para adicionar novas regras (como a validação de saldo insuficiente), pois a suíte de testes garantia que as funcionalidades antigas (como depósito) não haviam sido quebradas no processo.