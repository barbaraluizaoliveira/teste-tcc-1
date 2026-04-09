# 🛒 Karranka E-commerce (TCC)

Repositório oficial do projeto de conclusão de curso - Sistema de e-commerce minimalista para a marca de camisas oversized **Karranka**.

## 🎨 Conceito do Projeto
Design minimalista (P&B) focado na experiência do usuário para venda de camisas oversized personalizadas.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Framework:** React.js (Vite)
- **Linguagem:** TypeScript
- **Estilização:** Styled Components
- **Rotas:** React Router Dom
- **Estado:** Context API (Carrinho)
- **Consumo de API:** Axios

### Backend
- **Framework:** NestJS
- **Linguagem:** TypeScript
- **ORM:** Prisma
- **Autenticação:** Passport.js + JWT (BCrypt para senhas)
- **Validação:** Class-validator

### Banco de Dados
- **BD:** PostgreSQL (Arquitetura REST API)

---

## 🚀 Como Rodar o Projeto

### 1. Pré-requisitos
Antes de começar, você vai precisar ter instalado:
- [Node.js](https://nodejs.org/) (Recomendado v18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) ou [Docker](https://www.docker.com/)
- Git

### 2. Configuração do Backend
```bash
# Entre na pasta do servidor
cd server

# Instale as dependências
npm install

# Configure o arquivo .env (veja o .env.example)
# Rode as migrations do Prisma para criar as tabelas
npx prisma migrate dev

# Inicie o servidor
npm run start:dev
```

### 3. Configuração do Frontend
```bash
# Entre na pasta
cd pasta

# Instale as dependências
npm install

# Inicie o ambiente de desenvolvimento
npm run dev
```
