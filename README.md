# Livraria API

## Descrição

Esta é uma API RESTful para uma livraria, construída com Node.js, Express e MongoDB. Ela permite gerenciar autores e livros, oferecendo funcionalidades para listar, cadastrar, atualizar e excluir esses recursos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web para Node.js, utilizado para criar a API.
- **MongoDB**: Banco de dados NoSQL, utilizado para armazenar as informações de autores e livros.
- **Mongoose**: Biblioteca ODM (Object Data Modeling) para MongoDB e Node.js, facilitando a interação com o banco de dados.
- **dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **Nodemon**: Ferramenta que reinicia automaticamente o servidor Node.js quando detecta alterações no código.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/eldergsilva/alura-api-rest-express-mongodb.git
   cd alura-api-rest-express-mongodb

2. **Instale as dependências:**
    ```bash
 npm install

3. **Configuração do Banco de Dados:**

Crie um arquivo .env na raiz do projeto e adicione a URL de conexão com o MongoDB:

MONGO_URI=mongodb://seu-usuario:senha@host:porta/nome-do-banco

4. **Inicie o servidor:**

npm start
Ou, para desenvolvimento com reinicialização automática:
npm run dev


## Endpoints

### Autores

. Listar todos os autores:
GET /autores


.Listar autor por ID: 
GET /autores/:id


.Cadastrar um novo autor: 
POST /autores

Exemplo de corpo da requisição:
{
  "nome": "Nome do Autor",
  "nacionalidade": "Nacionalidade"
}


.Atualizar um autor:
PUT /autores/:id

Exemplo de corpo da requisição:
{
  "nome": "Nome Atualizado",
  "nacionalidade": "Nacionalidade Atualizada"
}

. Excluir um autor:

DELETE /autores/:id



### Livros

.Listar todos os livros:
GET /livros

.Listar livro por ID:
GET /livros/:id


.Cadastrar um novo livro:
POST /livros
Exemplo de corpo da requisição:
{
  "titulo": "Título do Livro",
  "autor": "ID do Autor",
  "editora": "Nome da Editora",
  "anoPublicacao": 2023
}

.Atualizar um livro:
PUT /livros/:id
Exemplo de corpo da requisição:
{
  "titulo": "Título Atualizado",
  "autor": "ID do Autor Atualizado",
  "editora": "Nome da Editora Atualizada",
  "anoPublicacao": 2024
}

.Excluir um livro:
GET /livros?editora=Nome da Editora


.Listar livros por editora:
GET /livros?editora=Nome da Editora








 




