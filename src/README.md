# E-commerce Next.js - Teste Técnico

Este é um projeto de e-commerce desenvolvido como parte de um teste técnico. O objetivo é demonstrar a criação de uma aplicação Next.js com renderização no servidor (SSR), gerenciamento de estado global com Context API e funcionalidades de carrinho de compras.

## Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/NiaraPaiva/Teste-Tecnico-E-commerce
   ```

Breve explicação da solução

Para esse teste, optei por construir o projeto com Next.js 14 e TypeScript porque queria aproveitar o máximo do SSR para SEO e performance, além de ter uma base sólida com tipagem. Usei o App Router, que facilita a criação de rotas e a separação entre componentes de servidor e cliente.

Next.js App Router: As páginas de listagem de produtos e de detalhes do produto são Server Components, então os dados são buscados diretamente no servidor – isso ajuda no carregamento inicial e na indexação pelos buscadores. Já o carrinho e o botão de adicionar são Client Components, porque precisam de interatividade e acesso ao contexto.

Context API: Criei um CarrinhoContext para gerenciar o estado global do carrinho. Usei ele junto com localStorage para que os itens não sumam quando a página é atualizada. Achei mais simples do que trazer uma biblioteca externa como Redux.

CSS Modules: Prefiro essa abordagem porque evita que estilos vazem entre componentes. Organizei cada página e componente com seu próprio arquivo .module.css.

API externa: Consumi a Fake Store API para pegar os produtos. Nas páginas de listagem e detalhe, a chamada é feita no servidor, garantindo SSR de verdade – isso foi um dos requisitos.

Componentização: Separei o botão "Adicionar ao carrinho" em um arquivo próprio (adicionar-ao-carrinho.tsx). Ele é um Client Component que usa o useCart para disparar a ação.

Responsividade: Fiz um layout que se adapta a telas pequenas, médias e grandes usando media queries. Testei no celular e no desktop para garantir que não quebra.

Fluxos implementados

Homepage (SSR): A rota /app (que coloquei como página inicial) carrega a lista de produtos via getProdutos() no servidor. Cada card tem imagem, título e um link para a página de detalhe. Quando o usuário passa o mouse, uma animação simples muda a escala o card, é um detalhe pequeno, mas que torna a interface mais viva.

Página de detalhe do produto (SSR): Acessando /produtos/[id], o Next.js faz um fetch no servidor para buscar as informações daquele produto específico. Mostro a imagem em tamanho maior, título, preço, descrição e o botão de adicionar ao carrinho. Esse botão, ao ser clicado, chama a função addItem do contexto e já atualiza o ícone do carrinho no menu.

Carrinho de compras (CSR): Na página /carrinho, listo todos os itens que foram adicionados. Ali é possível alterar a quantidade ou remover o item. Tudo isso atualiza o estado global e o localStorage. O resumo com o total é calculado automaticamente.

Responsividade: Nas telas menores, os grids viram uma coluna, os paddings reduzem e, no menu, o texto "Meu Carrinho" dá lugar apenas ao ícone quando a tela fica muito estreita. Também ajustei o carrinho para que o resumo fique em cima dos itens no mobile.

Persistência: Desde o início pensei em manter o carrinho mesmo depois de fechar a aba. Por isso, salvo os itens no localStorage sempre que há mudança. Quando a página carrega, o contexto verifica se existe algo salvo e restaura.

Se o prazo fosse maior, eu teria investido em:

Otimização de imagens: Apesar de estar usando next/image em alguns lugares, ainda tem alguns img soltos. Eu padronizaria tudo com o componente do Next e adicionaria placeholders enquanto a imagem carrega.

Acessibilidade: Revisaria contraste de cores, colocaria labels mais descritivos e garantiria que a navegação por teclado funciona bem.

Páginas de erro: Criaria uma página 404 personalizada e uma de erro genérica, mais amigáveis.

Paginação: A API devolve muitos produtos, então seria legal implementar paginação ou rolagem infinita para não sobrecarregar a página.

Checkout: Mesmo sendo um e-commerce de teste, um fluxo de finalização daria um ar mais completo.

Animações mais refinadas: O hover nos cards é simples; daria para adicionar transições mais suaves ou efeitos ao entrar no carrinho.

Desenvolvido por [Niara Paiva]
📧 niarapaiva24@gmail.com
🐙 github.com/NiaraPaiva
