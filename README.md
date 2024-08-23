# MultiApp ReactJS

Bem-vindo ao projeto **MultiApp ReactJS**! Este repositório contém um conjunto de aplicações ReactJS, cada uma com um propósito específico. Os componentes incluem um localizador de IP, um gerador de QR Code, uma tela de login, uma ferramenta busca de filmes, um aplicativo de quiz e um aplicativo de tarefas (to-do).

## Componentes

### 1. IP Address Finder

Um componente que utiliza a API IPInfo para encontrar e exibir informações sobre um endereço IP. 

- **Component:** `IPAdressFinder`
- **Features:**
  - Pesquisa informações de IP em tempo real.
  - Exibe detalhes como localização e provedor.

### 2. QR Code Generator

Um gerador de QR Codes que cria códigos QR a partir de um texto ou URL fornecido pelo usuário.

- **Component:** `QRCodeGenerator`
- **Features:**
  - Geração de QR Codes personalizados.
  - Interface amigável para inserção de dados.

### 3. Login

Um componente de login com autenticação básica. Utiliza um sistema simulado de autenticação.

- **Component:** `Login`
- **Features:**
  - Formulário de login com campos de nome de usuário e senha.
  - Armazenamento de token de autenticação no `localStorage`.

### 4. Movie Search Engine

Um motor de busca de filmes que utiliza a API TMDb para procurar e exibir informações sobre filmes.

- **Component:** `MovieSearchEngine`
- **Features:**
  - Pesquisa de filmes com base em critérios fornecidos.
  - Exibe detalhes do filme como título, sinopse e imagem.

### 5. Quiz App

Uma aplicação de quiz que permite aos usuários responder a perguntas e ver suas pontuações.

- **Component:** `QuizApp`
- **Features:**
  - Perguntas de múltipla escolha.
  - Avaliação das respostas e exibição do resultado.

### 6. To-Do App

Um aplicativo de tarefas que permite aos usuários adicionar, remover e marcar tarefas como concluídas.

- **Component:** `TodoApp`
- **Features:**
  - Adição e remoção de tarefas.
  - Marcação de tarefas como concluídas e filtragem de tarefas.

## Execução

Para rodar o projeto localmente, siga estes passos:

1. Clone o repositório:

   ```bash
   git clone https://github.com/cristinasstemmer/multiAppRefactor.git
   
2. Navegue para o diretório do projeto:

   ```bash
   cd multiAppRefactor
   
3. Instale as dependências:
   
     ```bash
   npm install
     
4. Inicie o servidor de desenvolvimento:

     ```bash
   npm start
