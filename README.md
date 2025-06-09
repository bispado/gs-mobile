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
