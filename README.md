<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
=======
# [PRAZO DE ENTREGA - 7 DIAS CORRIDOS]

## 🛒 E-commerce SSR

Queremos avaliar sua compreensão de **renderização no lado do servidor (SSR)**, manejo básico de estado no front-end e boas práticas gerais.

Não se espera uma aplicação completa de produção, mas sim uma solução simples, clara e funcional.

- Faça um fork do repositório do projeto.
- Clone o repositório forkado para o seu ambiente local.
- Quando finalizado, envie o link do repositório para jefferson@acheipneus.com.br.

---

🎯 Objetivo do desafio

Construir uma loja virtual simples com pelo menos três páginas:

🏠 Homepage

Listagem de produtos em destaque

📦 Detalhe do produto

Informações básicas do produto selecionado

🛒 Carrinho

Lista de produtos adicionados e suas quantidades

Os dados devem ser obtidos da API pública:
🔗 https://fakeapi.platzi.com/en

---

## 🛠️ Ferramentas obrigatórias

- Framework React com suporte a SSR
  - Next.js ou React Router Framework + Vite
- TypeScript

---

## ✅ Requisitos obrigatórios

### Renderização

- O conteúdo principal de cada página deve ser renderizado no servidor (SSR).
- ❌ Não utilizar `useEffect` para o fetch principal de dados.

---

### 🧭 Navegação e feedback

- Mostrar feedback visual em ações importantes:
    - Navegação entre páginas.
    - Adicionar ou remover produtos do carrinho.
- Exemplo: loading, estado desabilitado, mensagem simples.

---

### 🔍 SEO básico

- Incluir metadados gerados no servidor:
    - `<title>`
    - `<meta description>`
- Na página de detalhe, os metadados devem mudar de acordo com o produto.

---

### 📱 Responsividade

- A aplicação deve funcionar corretamente em desktop e mobile.

---

### 🧱 Código

- Código claro e bem organizado.
- Componentes simples.
- Nomes descritivos.

---

## ⭐ Requisitos opcionais (pontos extras)

- Implementar **Optimistic UI** ao adicionar produtos ao carrinho.
- Fazer deploy da aplicação (Vercel, Netlify, etc.).
- Incluir **Schema.org `Product`** na página de detalhe do produto.
- Reduzir ao máximo o **CLS (Layout Shifts)**.
- Evitar o uso de APIs experimentais sem fallback.
- Uso básico de atributos **ARIA** quando aplicável (ex: botões, inputs).

---

## 📊 O que será avaliado

- Compreensão de SSR vs CSR.
- Uso correto do stack.
- Clareza do código.
- Manejo básico de estado.
- Uso correto das tags HTML.
- Capacidade de explicar decisões técnicas.
- Uso correto de CSS para layout básico (box model, flex ou grid).

---

## 📤 Entrega

- Repositório público no GitHub.
- `README.md` contendo:
    - Como rodar o projeto.
    - Breve explicação da solução.
    - O que você melhoraria com mais tempo.

---

## 📦 Requisitos de desenvolvimento

- ✅ Código sem warnings ou erros
- 📦 Uso de lib de gerenciamento de estado (Context API, Redux ou equivalente)
- 🎨 Uso de lib front-end (opcional, se desejar)
- 🔁 Versionamento com Git/GitHub
- 🧾 Conventional Commits para mensagens de commit

---

### ⚙️ Funcionamento da aplicação

- A aplicação consiste em três fluxos principais:
- A homepage carrega os produtos via SSR e apresenta a listagem
- Ao clicar em um produto, o usuário é direcionado para a página de detalhe, também renderizada no servidor, com SEO dinâmico
- O carrinho mantém os produtos selecionados em estado global, permitindo adicionar, remover e alterar quantidades com feedback visual
O fetch principal de dados ocorre sempre no servidor para garantir SSR real.
  
[Adicione aqui uma descrição do funcionamento da aplicação, explicando como as funcionalidades são implementadas e como o usuário pode interagir com elas.]

---

## 👤 Autor

- Nome: [Seu nome]
- GitHub: [link do GitHub]
- LinkedIn: [link do LinkedIn]
>>>>>>> 8245341a0f4512e6401e8463323e764801997fda
