# 🌐 FUTURION HUB
Conectando pessoas, competências e propósito por meio da tecnologia

Global Solution – O Futuro do Trabalho
Front-End Design • Web Development

# 📘 Resumo do Projeto

O Futurion Hub é uma plataforma web inspirada em redes profissionais modernas, como o LinkedIn, projetada para representar o futuro do trabalho de forma colaborativa, tecnológica e inclusiva.

A aplicação, desenvolvida em React + Tailwind CSS, funciona como uma SPA (Single Page Application) que permite explorar perfis fictícios de profissionais, visualizar detalhes completos, interagir por meio de recomendações e mensagens, além de acompanhar trilhas de aprendizado e realizar check-ins de bem-estar.

O projeto busca demonstrar como tecnologias atuais podem aproximar profissionais, incentivar o desenvolvimento contínuo, promover competências humanas e técnicas e fortalecer conexões no mercado de trabalho.

# ⚙️ Tecnologias Utilizadas

 - React.js (SPA completa)

 - Tailwind CSS (design responsivo moderno)

 - JavaScript 

 - JSON local com +60 profissionais

 - Express.js (Backend) para servir o arquivo JSON

 - Dark Mode dinâmico

 - LocalStorage (histórico e preferências do usuário)

 - Fetch API (integração front → backend)

# 👥 Funcionalidades Principais
**🔹 1. Catálogo de Profissionais**

- Exibição de cards com nome, carreira, localização, foto e skills.

 - Filtros avançados:

Área

Localização (cidade/estado)

Tecnologia

Busca por texto (nome, cargo, skills).

**🔹 2. Modal Detalhada do Profissional**

Ao clicar em um card, abre-se um modal contendo:

Informações pessoais

Bio / Resumo profissional

Formação

Experiências

Habilidades técnicas

Soft skills

Hobbies

Certificações

Projetos

Idiomas

Botões funcionais:

Enviar mensagem

Recomendar profissional

**🔹 3. Trilhas de aprendizado**

Atualização de progresso

Iniciar / continuar trilhas

Barra de progresso animada

**🔹 4. Check-in de Bem-Estar**

Seleção de humor (😊 / 😐 / 😞)

Mensagens motivacionais dinâmicas

Histórico salvo no LocalStorage

**🔹 5. Autenticação simples**

Login baseado em usuários simulados no backend

Exibição do nome do usuário no sistema

**🔹 6. Dark Mode Completo**

Integração visual com todo o layout

Persistência no LocalStorage

🔐 Usuários e Senhas (Ambiente de Teste)

No backend (usuarios.json), foram cadastrados usuários fictícios:

**Email: admin@gmail.com & usuario@gmail.com**
**Senhas: "1234" & "senha"**
**Nomes: "Administrador" & "User2"**



O login é verificado no backend.

# 🚀 Instalação e Execução do Projeto
📌 1. Clonar o Repositório
git clone https://github.com/SEU-USUARIO/futurion-hub.git
cd futurion-hub

🖥️ 2. Instalar Dependências (Front-End)
npm install

🌐 3. Rodar o Servidor Backend

**Entre na pasta do backend:**

*cd backend*
**npm install*
*node server.js* **OU** *npm run backend*


Backend estará em:
👉 http://localhost:3001

💻 4. Rodar o Front-End

Na pasta raiz:

*cd frontend*
*npm install*
*npm run dev*


Aplicação rodando em:
👉 http://localhost:5173


# 🧩 Propriedades do JSON (Conforme o briefing da faculdade)

O arquivo profissionais.json segue:

id

name

title

location

area

photo

skills

bio

education[]

experience[]

technicalSkills[]

softSkills[]

hobbies

certifications[]

idiomas[]

interests[]

Cumpre totalmente o escopo solicitado.

## 🔗 Link do Repositório

https://github.com/Futurion-Hub-GS/futurionhub.git

------------------------------------------------------------------------------
## Integrantes
Nome	RM
Breno Gonçalves Báo - 564037
Arthur Araújo Tenório - 562272

------------------------------------------------------------------------------
