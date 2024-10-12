#Atividade criação de api simples com swagger

API de Gerenciamento de Notícias
Esta é uma API simples para gerenciar notícias. A API permite listar, criar, atualizar e deletar notícias. Os dados são armazenados em uma variável local no servidor.

Funcionalidades
Listar notícias: GET /news
Obter notícia por ID: GET /news/{id}
Criar nova notícia: POST /news
Atualizar notícia: PUT /news/{id}
Deletar notícia: DELETE /news/{id}
Cada notícia contém:

ID (gerado automaticamente)
Título
Corpo da notícia
Autor
Data de criação
Tecnologias Utilizadas
Node.js: Plataforma para execução de JavaScript no servidor.
Express.js: Framework para criação de servidores web e APIs RESTful.
Swagger: Ferramenta para documentar APIs REST.
Nodemon (opcional): Para reiniciar o servidor automaticamente em desenvolvimento.
Documentação da API
A documentação da API está disponível via Swagger. Após iniciar o servidor, acesse:

bash
Copiar código
http://localhost:3000/api-docs
Como rodar o projeto
Pré-requisitos
Node.js instalado.
NPM ou Yarn como gerenciador de pacotes.
Passo a Passo
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/api-gerenciamento-noticias.git
cd api-gerenciamento-noticias
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor:

bash
Copiar código
npm start
Ou, para desenvolvimento com reinicialização automática (usando Nodemon):

bash
Copiar código
npm run dev
A API estará rodando em http://localhost:3000.

Endpoints da API

1. GET /news
   Descrição: Retorna todas as notícias.
   Resposta:
   json
   Copiar código
   [
   {
   "id": 1,
   "title": "Título da Notícia",
   "body": "Corpo da notícia",
   "author": "Nome do Autor",
   "createdAt": "2024-10-11T10:30:00Z"
   }
   ]
2. GET /news/{id}
   Descrição: Retorna uma notícia específica com base no ID.
3. POST /news
   Descrição: Cria uma nova notícia.
   Corpo da Requisição:
   json
   Copiar código
   {
   "title": "Novo Título",
   "body": "Conteúdo da notícia",
   "author": "Nome do Autor"
   }
4. PUT /news/{id}
   Descrição: Atualiza uma notícia existente com base no ID.
   Corpo da Requisição:
   json
   Copiar código
   {
   "title": "Título Atualizado",
   "body": "Conteúdo atualizado da notícia",
   "author": "Nome do Autor"
   }
5. DELETE /news/{id}
   Descrição: Deleta uma notícia com base no ID.
