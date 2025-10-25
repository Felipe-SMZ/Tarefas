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
/src
├── controllers/ # lógica de controle das rotas
├── models/ # definição de modelos de dados (MongoDB)
├── routes/ # definição de rotas da API
├── views/ # templates (caso haja front-end simples)
└── …
.gitignore
package.json
README.md

## ⚙️ Como executar localmente  
1. Clone o repositório  
   ```bash
   git clone https://github.com/Felipe-SMZ/Tarefas.git
Acesse o diretório do projeto

bash
Copiar código
cd Tarefas
Instale as dependências

bash
Copiar código
npm install
Crie um arquivo de ambiente (exemplo .env) com as variáveis necessárias, por exemplo:

ini
Copiar código
MONGODB_URI=seu_endereço_mongo
PORT=3000
Inicie o servidor

bash
Copiar código
npm start
ou, se estiver usando nodemon:

bash
Copiar código
npm run dev
Acesse no browser ou via API:

arduino
Copiar código
http://localhost:3000
(ou a rota que estiver configurada para listar tarefas).

🧪 Funcionalidades
Criar nova tarefa

Listar todas as tarefas

Atualizar uma tarefa existente (por exemplo: marcar como concluída)

Deletar tarefa

(Opcional) Interface simples de visualização das tarefas

🎯 Possíveis melhorias
Autenticação de usuário

Persistência de usuário/tarefas individualizadas

Front-end em React/Vue para uma experiência mais rica

Testes automatizados (unitários, integração)

Dockerização do ambiente

Deployment (Heroku, Vercel, AWS, etc.)

📋 Licença
Este projeto está sob a MIT License ou a licença que você escolher.

🙌 Agradecimentos
Obrigado a todos que contribuíram ou ajudaram de alguma forma. Qualquer sugestão de melhoria ou correção é bem-vinda!