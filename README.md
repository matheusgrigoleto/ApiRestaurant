# ApiRestaurant

**Minha primeira API REST desenvolvida com Node.js, Express.js, TypeScript e Knex.js**

Uma API simples para gerenciamento de um restaurante, com controle de produtos, mesas, sessões e pedidos — toda estruturada para aprender os fundamentos de backend.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** + **TypeScript** — para desenvolvimento robusto e com tipagem  
- **Express.js** — framework para criação das rotas e controle do servidor  
- **Knex.js** — query builder para comunicação com o banco de dados (SQLite, PostgreSQL, etc.)  
- **Insomnia** — para testar endpoints de forma prática (importação pronta incluída)  
- **Beekeeper Studio** — para inspecionar e manipular o banco de dados de forma visual  

---

## 📌 Funcionalidades

### Produtos
- **GET /products** — listar todos os produtos  
- **POST /products** — criar novo produto  
- **PUT /products/:id** — atualizar produto existente  
- **DELETE /products/:id** — remover produto

### Mesas
- **GET /products** — listar mesas 


### Mesas & Sessões
- **GET /tables-sessions** — listar sessões das mesas  
- **POST /tables-sessions** — abrir uma sessão em uma mesa  
- **PATCH /tables-sessions/:id** — fechar sessão ativa  

### Pedidos
- **POST /orders** — criar pedido em uma sessão ativa
- **GET /orders/table-session/:id/** — consulta os pedidos da sessão
- **GET /orders/table-session/:id/total** — consultar valor total consumido por sessão  

---

## ⚙️ Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/matheusgrigoleto/ApiRestaurant.git
    cd ApiRestaurant
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```
    
4. Execute as migrações:
    ```bash
    npx knex migrate:latest
    ```
    
5. Inicie a API em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
    
6. Importe a coleção **Insomnia** do Arquivo **(request_insomnia)** para testar os endpoints.  

7. Se quiser visualizar o banco de dados de forma gráfica, abra-o no **Beekeeper Studio**.
---  
