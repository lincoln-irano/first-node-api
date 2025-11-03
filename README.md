## 🚀 Minha Primeira API RESTful com Node.js

### 📚 Visão Geral do Projeto

Este projeto consiste em uma API RESTful de alta performance, desenvolvida do zero como parte de um curso focado nas melhores práticas e tecnologias modernas do ecossistema Node.js.

O objetivo foi construir um serviço robusto, utilizando TypeScript para garantir segurança de código e Docker para um ambiente de desenvolvimento consistente.

### ✨ Principais Tecnologias Utilizadas

O projeto é um excelente exemplo de como combinar ferramentas de ponta para criar serviços performáticos e escaláveis:

- <b>Node.js & TypeScript</b>: Para o runtime e tipagem estática, garantindo código mais seguro e manutenível.

- <b>Fastify</b>: Framework web minimalista e de alta performance, escolhido pela sua velocidade superior.

- <b>Drizzle ORM</b>: Um ORM headless e moderno, oferecendo uma experiência de desenvolvimento tipada e developer-friendly.

- <b>PostgreSQL</b>: Banco de dados relacional robusto e amplamente utilizado, rodando de forma isolada via Docker.

- <b>Zod</b>: Biblioteca de validação de schemas, utilizada para garantir a integridade dos dados de entrada (DTOs).

- <b>Swagger/OpenAPI</b>: Documentação automática da API, facilitando a compreensão e o consumo dos endpoints.

- <b>Docker & Docker Compose</b>: Utilizado para containerizar a aplicação e o banco de dados, garantindo um ambiente de desenvolvimento consistente e de fácil inicialização.

### ⚙️ Como Rodar o Projeto

Estas instruções vão te ajudar a obter uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

#### 📋 Pré-requisitos

Você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [Docker](https://www.docker.com/)

#### 💻 Instalação e Inicialização

Clone o repositório:

```bash
git clone git@github.com:lincoln-irano/first-node-api.git
cd first-node-api
```

Suba os containers para utilizar os serviços:

```bash
docker-compose up -d
```

Instale as dependencias do projeto com o node:

```bash
npm install
```

Utilize o comando de migrations para popular o Postgres com tabelas para começar a acessar o serviço sem problemas:

```bash
npm run db:migrate
```
