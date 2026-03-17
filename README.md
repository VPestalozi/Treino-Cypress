# Documentação de Testes Automatizados - PHPTRAVELS

Este repositório contém o framework de testes de aceitação (E2E) desenvolvido em Cypress para a plataforma PHPTRAVELS. O projeto foca na validação dos fluxos críticos de autenticação, navegação em módulos administrativos e encerramento de sessão.

## 1. Escopo de Testes
O projeto automatiza os seguintes cenários de usuário:
* **Autenticação**: Login no sistema validando o estado da interface pré e pós-autenticação.
* **Integridade de Navegação**: Acesso ao módulo de Pedidos (Orders) e validação de carregamento de componentes.
* **Gestão de Sessão**: Execução de Logout através de menus dinâmicos e confirmação de redirecionamento.

## 2. Tecnologias e Dependências
* **Framework**: Cypress 15.12.0
* **Linguagem**: JavaScript (ES6+)
* **Gerenciamento de Dados**: Fixtures (JSON) para separação entre massa de teste e lógica de script.

## 3. Arquitetura de Comandos Customizados
Para garantir a reusabilidade e a manutenibilidade (DRY - Don't Repeat Yourself), foram implementados comandos personalizados em cypress/support/commands.js:

### cy.login(email, password)
* Navega para a URL de autenticação.
* Realiza a entrada de dados utilizando seletores baseados em relação de vizinhança (next(), closest()).
* Valida a transição de estado confirmando a presença do elemento Dashboard.

### cy.OrderVerify()
* Verifica a integridade da rota /orders.
* Assegura que o cabeçalho de nível 2 contém o texto esperado para o usuário.

### cy.logout()
* Localiza o container de perfil através de navegação hierárquica no DOM.
* Aciona o menu suspenso e finaliza a sessão de forma segura, validando o retorno à tela de login.

## 4. Estratégia de Seletores
A estratégia adotada prioriza a resiliência dos testes frente a mudanças de design (CSS/Layout):
* **Contraste de Conteúdo**: Uso de cy.contains() para validar elementos pela perspectiva do usuário final.
* **Navegação Relativa**: Utilização de comandos como .parent(), .find() e .next() para localizar elementos sem atributos de identificação únicos (IDs ou Data-Attributes).

## 5. Instruções de Configuração e Execução

### Pré-requisitos
* Node.js instalado.
* Massa de dados configurada em cypress/fixtures/authLogin.json.

### Instalação
```bash
# Instalação das dependências do projeto
npm install
```

### Execusão de testes

# Execução em modo interface (Interativo)
npx cypress open

# Execução em modo headless (Continuous Integration)
npx cypress run