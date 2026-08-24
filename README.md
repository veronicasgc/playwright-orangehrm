# 🎭 Playwright OrangeHRM

Projeto de automação de testes E2E desenvolvido com **Playwright + TypeScript**, utilizando o site demo do OrangeHRM como aplicação de estudo.

O objetivo do projeto é aplicar, de forma prática, conceitos de **automação de testes web, Page Object Model, assertions, locators, validações positivas e negativas e organização de suítes de testes**.

---

## 🚀 Tecnologias

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- Git
- GitHub
- Chromium

---

## 🎯 Objetivos do projeto

Este projeto foi desenvolvido para praticar:

- Automação de testes E2E
- Criação de cenários positivos e negativos
- Localização de elementos utilizando diferentes estratégias
- Assertions
- Page Object Model (POM)
- Reutilização de métodos
- Organização de testes
- Execução de testes em navegador
- Geração de relatórios
- Identificação e análise de falhas de automação

---

## 📁 Estrutura do projeto

```text
playwright-orangeHRM/
│
├── pages/
│   ├── EmployeeListPage.ts
│   ├── EmployeePage.ts
│   ├── HomePage.ts
│   └── LoginPage.ts
│
├── tests/
│   ├── employee.spec.ts
│   ├── employeeList.spec.ts
│   └── login.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

---

## 🧩 Page Object Model

O projeto utiliza o padrão Page Object Model (POM) para separar a lógica de interação com a aplicação dos cenários de teste.

Pages

- **LoginPage**

Login na aplicação
Preenchimento de username e password

- **HomePage**

Navegação para o módulo PIM

- **EmployeePage**

Cadastro de funcionários
Criação de credenciais de acesso
Recuperação do Employee ID

- **EmployeeListPage**

Pesquisa de funcionários
Reset dos filtros
Edição de funcionários
Exclusão de funcionários

Essa organização permite reutilizar os métodos entre diferentes cenários e facilita a manutenção dos testes.

## 🧪 Cenários automatizados

🔐 **Login**
- Login com sucesso
- Login com username inválido
- Login com password inválido
- Validação de username obrigatório
- Validação de password obrigatório
- Validação de confirmação de password
- Validação de passwords diferentes

👤 **Employee**
- Cadastro de um novo funcionário
- Validação de nome obrigatório
- Validação de sobrenome obrigatório
- Criação de funcionário com login
- Validação de username obrigatório
- Validação de password obrigatório
- Validação de confirmação de password obrigatório
- Validação de passwords diferentes

📋 **Employee List**
- Pesquisa de funcionário pelo nome
- Reset dos campos de pesquisa
- Validação de pesquisa com ID inválido
- Edição de dados do funcionário
- Exclusão de funcionário

Observação: o cenário de pesquisa de funcionário pelo ID gerado dinamicamente foi retirado da suíte por depender de um ambiente demo público e compartilhado, no qual os registros podem ser alterados por outros usuários durante a execução dos testes.

## 🔎 Estratégias de localização

Durante o desenvolvimento foram utilizadas diferentes estratégias de locators do Playwright, incluindo:

 - `getByRole()`
 - `getByText()`
 - `getByPlaceholder()`
 - `locator()`

Também foram utilizados elementos com diferentes posições dentro da página quando necessário:

- `getByRole("textbox").nth(2)`

A escolha dos locators foi feita considerando a estrutura e acessibilidade dos elementos disponíveis na aplicação.

✅ **Assertions**

Os testes utilizam diferentes tipos de assertions para validar o comportamento da aplicação:

- toBeVisible()
- toContainText()
- toHaveText()
- toHaveValue()

As assertions são utilizadas para verificar tanto resultados positivos quanto mensagens de validação e erros.

---

## ▶️ Instalação

Clone o repositório:

git clone https://github.com/veronicasgc/playwright-orangehrm.git

Entre na pasta:

cd playwright-orangehrm

Instale as dependências:

npm install

Instale os browsers do Playwright:

npx playwright install

## 🧪 Executando os testes

Executar toda a suíte:

npx playwright test

Executar utilizando Chromium:

npx playwright test --project=chromium

Executar os testes com o navegador visível:

npx playwright test --project=chromium --headed

---

## 📊 Relatório de testes

Após a execução da suíte, o Playwright pode gerar um relatório HTML.

Para abrir o último relatório:

npx playwright show-report

### Resultado Atual
A suíte atual possui **19 testes automatizados**, cobrindo cenários positivos e negativos dos módulos de Login, Employee e Employee List.

---

## 🛠️ Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos como:

- Estruturação de projetos Playwright
- TypeScript aplicado à automação
- Page Object Model
- Locators
- Assertions
- Hooks (beforeEach)
- Testes positivos e negativos
- Geração e utilização de dados dinâmicos
- Debugging com Playwright Inspector
- Codegen
- Análise de falhas
- HTML Reports
- Organização de testes E2E
- Controle de versão com Git

---

## 📌 Próximos passos

Este projeto representa uma introdução prática à automação E2E com Playwright.

Os próximos projetos terão como objetivo explorar outras áreas de QA, incluindo:

- Testes de API
- Automação de API
- Testes de regressão
- Testes de performance
- Testes de performance
- Testes de carga
- Testes de estresse
- Integração com CI/CD
- GitHub Actions
- Testes de aplicações baseadas em Inteligência Artificial

---

## 👩‍💻 Sobre

Projeto desenvolvido por Verônica Silveira como parte do processo de aprendizado e construção de portfólio na área de Quality Assurance e Automação de Testes.

O foco do projeto é aprendizado prático, aplicando conceitos de QA diretamente em uma aplicação web.