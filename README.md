# 🧮 Calculadora Vue.js

Uma calculadora moderna e funcional desenvolvida com Vue.js 2, apresentando um design limpo e uma interface intuitiva.

![Vue.js](https://img.shields.io/badge/Vue.js-2.6.14-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## 📋 Sobre o Projeto

Esta calculadora foi desenvolvida como um projeto de estudo em Vue.js, implementando:

- ✅ Operações matemáticas básicas (+, -, *, /)
- ✅ Interface responsiva com CSS Grid
- ✅ Componentes reutilizáveis
- ✅ Design moderno com gradiente
- ✅ Fonte personalizada (RobotoMono)
- ✅ Funcionalidade completa de calculadora

## 🚀 Funcionalidades

- **Operações Básicas**: Adição, subtração, multiplicação e divisão
- **Display Responsivo**: Mostra os valores e resultados das operações
- **Botão AC**: Limpa toda a memória e reinicia a calculadora
- **Números Decimais**: Suporte para números com vírgula
- **Interface Intuitiva**: Design familiar de calculadora padrão

## 🛠️ Tecnologias Utilizadas

- **Vue.js 2.6.14** - Framework JavaScript progressivo
- **Vue CLI 5.0.9** - Ferramentas de desenvolvimento
- **CSS Grid** - Layout responsivo
- **ESLint** - Padronização de código
- **Babel** - Transpilação JavaScript

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Button.vue      # Componente dos botões da calculadora
│   └── Display.vue     # Componente do display
├── main/
│   └── Calculator.vue  # Componente principal da calculadora
├── fonts/
│   └── RobotoMono-Thin.ttf  # Fonte personalizada
├── assets/
│   └── logo.png
├── App.vue            # Componente raiz
└── main.js           # Ponto de entrada da aplicação
```

## 🎯 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## ⚡ Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/paulgabr/calcutalor-vue.git
   cd calculator
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run serve
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:8080
   ```

## 📦 Scripts Disponíveis

```bash
# Servidor de desenvolvimento
npm run serve

# Build para produção
npm run build

# Executar linting
npm run lint
```

## 🎨 Interface

A calculadora apresenta:

- **Design moderno** com gradiente azul
- **Layout em grid** 4x6 para organização dos botões
- **Botões diferenciados** por função (números, operações, funções especiais)
- **Display grande** para visualização clara dos números
- **Fonte monospaciada** para melhor legibilidade dos números

## 🧩 Componentes

### AppCalculator
Componente principal que gerencia:
- Estado da calculadora (valores, operação atual, display)
- Lógica das operações matemáticas
- Controle do fluxo de entrada

### AppDisplay
- Exibe o valor atual da calculadora
- Recebe o valor via props

### AppButton
Componente reutilizável que aceita props:
- `label`: Texto do botão
- `operation`: Estilo para botões de operação
- `double`: Botão com largura dupla
- `triple`: Botão com largura tripla
- `@onClick`: Evento de clique


## 👤 Autor

**Paulo Gabriel**

- GitHub: [@paulgabr](https://github.com/paulgabr)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/paulgab)

## 🌟 Agradecimentos

- Vue.js pela excelente documentação
- Comunidade Vue.js pelo suporte
- Todos que contribuíram com feedback e sugestões

---

⭐ Não esqueça de dar uma estrela no projeto se ele foi útil para você!