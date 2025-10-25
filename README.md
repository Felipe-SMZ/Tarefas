# Tarefas  
Criação de CRUD de tarefas com Node.js e MongoDB

## 🧩 Sobre o projeto  
Este projeto tem como objetivo construir uma API simples de tarefas (to-do list) utilizando Node.js no backend e MongoDB como banco de dados.  
Ele permite realizar as operações básicas de **Criar**, **Ler**, **Atualizar** e **Deletar** (CRUD) tarefas, e serve como base de aprendizado ou como ponto de partida para evoluções.

## 🚀 Tecnologias  
- Node.js  
- Express (ou framework similar)  
- MongoDB  
- Handlebars (ou template engine que esteja sendo usada)  
- Outras dependências (ver arquivo `package.json`)

## 📁 Estrutura do projeto  

```bash
/src
├── controllers/ # lógica de controle das rotas
├── models/ # definição de modelos de dados (MongoDB)
├── routes/ # definição de rotas da API
├── views/ # templates (caso haja front-end simples)
└── …
.gitignore
package.json
README.md

```

## ⚙️ Como executar localmente  
1. Clone o repositório  
```bash
git clone https://github.com/Felipe-SMZ/Tarefas.git
```
2. Acesse o diretório do projeto

```bash
cd Tarefas
Instale as dependências
```

3. Instale as dependências

```bash
npm install
```
4. Crie um arquivo de ambiente (exemplo .env) com as variáveis necessárias, por exemplo:

```bash
MONGODB_URI=seu_endereço_mongo
```

5. Inicie o servidor

```bash
npm start
```
   ou, se estiver usando nodemon:

   ```bash
   npm run dev
   ```
6. Acesse no browser ou via API:

```bash
http://localhost:8081/rota_tarefas/tarefas
```

🧪 Funcionalidades

Criar nova tarefa

Listar todas as tarefas

Atualizar uma tarefa existente (por exemplo: marcar como concluída)

Deletar tarefa

🎯 Possíveis melhorias

Autenticação de usuário

Persistência de usuário/tarefas individualizadas

Front-end em React/Vue para uma experiência mais rica

Testes automatizados (unitários, integração)

Dockerização do ambiente

Deployment (Heroku, Vercel, AWS, etc.)

📋 Licença

Este projeto está sob a MIT License.

🙌 Agradecimentos

Obrigado a todos que contribuíram ou ajudaram de alguma forma. Qualquer sugestão de melhoria ou correção é bem-vinda!



