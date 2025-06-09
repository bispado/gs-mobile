# Sistema de Gerenciamento de Abrigos

## Integrantes
- Vinicius Murtinho Vicente - RM551151
- Lucas Barreto Consentino - RM557107
- Gustavo Bispo Cordeiro - RM558515

## Apresentação do Projeto
[Link para a apresentação do projeto](https://www.youtube.com/watch?v=-1yBofFZXvg)

## Descrição da Solução

O Sistema de Gerenciamento de Abrigos é uma aplicação mobile desenvolvida para facilitar o gerenciamento e coordenação de abrigos em situações de emergência. A solução permite:

- Cadastro e gerenciamento de abrigos com informações detalhadas como localização, capacidade e status
- Controle de ocupação e recursos disponíveis
- Sistema de doações para arrecadação de recursos necessários
- Avaliação dos abrigos pelos usuários
- Gestão de necessidades específicas de cada abrigo
- Interface intuitiva para visualização e edição de informações

### Principais Funcionalidades

1. **Gestão de Abrigos**
   - Cadastro completo de abrigos com localização geográfica
   - Monitoramento de capacidade e ocupação
   - Status atualizado em tempo real

2. **Sistema de Doações**
   - Registro de doações recebidas
   - Controle de recursos disponíveis
   - Histórico de doações por abrigo

3. **Avaliações e Feedback**
   - Sistema de avaliação dos abrigos
   - Comentários e feedback dos usuários
   - Métricas de satisfação

4. **Gestão de Necessidades**
   - Registro de necessidades específicas
   - Níveis de urgência
   - Acompanhamento de recursos necessários

5. **Usuários e Permissões**
   - Diferentes níveis de acesso
   - Gestão de usuários
   - Controle de permissões

# 🏠 Abrigo Hub

Bem-vindo ao **Abrigo Hub**, um aplicativo móvel desenvolvido para conectar abrigos a pessoas em necessidade, gerenciamento de doações e informações essenciais. O objetivo é facilitar a comunicação e a coordenação de recursos em momentos críticos.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **React Native:** Framework para construção de aplicativos móveis nativos utilizando JavaScript e React.
*   **Expo:** Plataforma que agiliza o desenvolvimento de aplicativos React Native, com ferramentas e serviços pré-configurados.
*   **React Navigation:** Solução de navegação robusta para aplicativos React Native, permitindo a criação de stacks e abas.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.
*   **Integração com API (C#/.NET):** Comunicação com um backend em C#/.NET para gerenciamento de dados de abrigos, doações e informações de clima.

## 🛠️ Primeiros Passos

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Instalação de Dependências

Primeiro, navegue até o diretório `my-app` do projeto:

```bash
cd my-app
```

Em seguida, instale as dependências do projeto. É recomendado usar `npm`:

```bash
npm install
```

Se encontrar problemas de compatibilidade de dependências (o que é comum em projetos Expo), você pode tentar o comando de correção do Expo CLI:

```bash
npx expo install --fix
```

## 🏃 Como Executar o Projeto

Após a instalação das dependências, você pode iniciar o projeto com os seguintes comandos:

*   Para iniciar o servidor de desenvolvimento (Metro Bundler):

    ```bash
    npm start
    # ou
    expo start
    ```

*   Para rodar no emulador/dispositivo Android:

    ```bash
    npm run android
    ```

*   Para rodar no emulador/dispositivo iOS (requer macOS e Xcode):

    ```bash
    npm run ios
    ```

*   Para rodar no navegador (Web):

    ```bash
    npm run web
    ```

Ao executar `npm start` ou `expo start`, um QR code será exibido no terminal. Você pode escanear com o aplicativo Expo Go (disponível para Android e iOS) para visualizar o aplicativo em seu dispositivo.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Documentação da API

## Endpoints

### Abrigos
- `GET /api/Abrigos` - Lista todos os abrigos
- `GET /api/Abrigos/{id}` - Obtém detalhes de um abrigo específico
- `POST /api/Abrigos` - Cria um novo abrigo
- `PUT /api/Abrigos/{id}` - Atualiza um abrigo existente
- `DELETE /api/Abrigos/{id}` - Remove um abrigo
- `GET /api/Abrigos/{id}/necessidades` - Lista as necessidades de um abrigo
- `GET /api/Abrigos/{id}/recursos` - Lista os recursos de um abrigo

### Usuários
- `GET /api/Usuarios` - Lista todos os usuários
- `POST /api/Usuarios` - Cria um novo usuário

### Doações
- `GET /api/Doacoes` - Lista todas as doações
- `POST /api/Doacoes` - Registra uma nova doação

### Avaliações
- `GET /api/AbrigoAvaliacoes` - Lista todas as avaliações de abrigos
- `POST /api/AbrigoAvaliacoes` - Cria uma nova avaliação para um abrigo

### Necessidades
- `GET /api/AbrigoNecessidades` - Lista todas as necessidades dos abrigos
- `POST /api/AbrigoNecessidades` - Registra uma nova necessidade para um abrigo

## Estrutura de Dados

### Abrigo
```typescript
{
  id: number;
  nome: string;
  descricao: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  capacidade: number;
  ocupacaoAtual: number;
  status: string;
  usuarioId: number;
  latitude: number;
  longitude: number;
}
```

### Usuário
```typescript
{
  id: number;
  nome: string;
  email: string;
  tipoUsuario: string;
  telefone: string;
}
```

### Doação
```typescript
{
  id: number;
  nomeDoador: string;
  tipoRecurso: string;
  quantidade: number;
  dataDoacao: string;
  abrigoId: number;
}
```

### Avaliação
```typescript
{
  id: number;
  nota: number;
  comentario: string;
  dataAvaliacao: string;
  abrigoId: number;
  usuarioId: number;
}
```

### Necessidade
```typescript
{
  tipoRecurso: string;
  quantidade: number;
  nivelUrgencia: string;
  descricao: string;
  abrigoId: number;
}
```

### Recurso
```typescript
{
  id: number;
  tipoRecurso: string;
  quantidade: number;
  descricao: string;
  abrigoId: number;
}
```
![image](https://github.com/user-attachments/assets/3e27508a-8c15-4533-a22a-966feea49366)!

[Captura de tela 2025-06-08 235436](https://github.com/user-attachments/assets/bffdc74d-3b20-4814-afc7-796527c820f9)



![image](https://github.com/user-attachments/assets/deec7e60-03d0-435b-9e17-0295f859988f)


![image](https://github.com/user-attachments/assets/ae471b08-5567-48a9-8d61-64091414221a)

