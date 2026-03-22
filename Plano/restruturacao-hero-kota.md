# Plano de Correção e Implementação: Hero Section - Bydo Marketing

**Objetivo:** Reestruturar a seção Hero (topo) da página Home, substituindo o layout atual pela fidelidade visual da Kota (referências `image_bfccc6.png` e `image_bfd0cb.png`).

---

## 1. Header e Sistema de Navegação (Fidelidade Kota)
- [ ] **Remover:** Tarja Branca no topo (Header Sólido).
- [ ] **Implementar (Fidelidade `image_bfccc6.png`):** - Header **transparente** sobre a animação de fundo.
    - Logo da Bydo (apenas o ícone ou logo pequeno) no canto superior esquerdo.
    - Ícone de Menu Sanduíche (Hambúrguer `☰`) no canto superior direito, na cor **Pink**.
- [ ] **Overlay de Menu (Fidelidade `image_bfccc6.png`):** - Ao clicar no ícone, abrir um overlay (painel lateral) em tela cheia com:
    - Links verticais em fonte gigante (Bold Black, em Branco): 'WORK', 'SERVICES', 'ABOUT', 'NEWS', 'CONTACT'.
    - Botão Secundário abaixo dos links: 'START A PROJECT →' (Branco com borda).
    - Redes Sociais no rodapé do overlay: 'TWITTER', 'INSTAGRAM', 'LINKEDIN', 'CLUTCH'.

## 2. Seção Hero (Fidelidade Kota + Marca Bydo)
- [ ] **Container:** 100vh de altura (ocupando toda a tela inicial).
- [ ] **Animação de Fundo (The Brand Play - Fidelidade `image_bfd0cb.png`):** - Implementar uma animação de fundo que ocupe toda a seção.
    - **Estilo:** Formas orgânicas e fluidas (blobs/waves) que se movem lentamente.
    - **Transição de Cores:** Loop suave e constante entre **Azul Royal (#002395), Pink (#FF007F) e Branco (#FFFFFF)**.
    - A tipografia principal (H1) deve estar sobreposta a essa animação.
- [ ] **Tipografia Gigante e Hierárquica (Alinhamento `image_bfd0cb.png`):**
    - **Alinhamento:** Todo o bloco de texto (H1 e Sub-headline) deve estar alinhado à **esquerda**.
    - **H1 Central:** - Linha 1: 'ATRAIR • POSICIONAM SEU NEGÓCIO • VENDER'.
        - **Cores:** Use o Pink Vibrante para palavras-chave (como 'AUTORIDADE' ou 'VENDAS') e o Branco para o restante.
        - **Peso:** Bold Black (Negrito Extra) em CAIXA ALTA (uppercase), ocupando boa parte da largura disponível.
- [ ] **Sub-headline (Texto de Apoio - Fidelidade `image_bfd0cb.png`):** - Texto: 'Estratégia, Design e Performance para transformar sua presença digital em um ativo de vendas real.'
    - **Estilo:** Fonte média, legível, em Branco ou cinza muito claro, alinhada à **esquerda** abaixo do H1, respeitando o espaçamento da Kota.
- [ ] **Botão de Ação (CTA):** - Abaixo do texto de apoio, centralizado ou alinhado à esquerda.
    - Botão: 'COMECE SEU PROJETO →'.
    - **Estilo:** Cor Pink Vibrante, com cantos retos (sem border-radius), fonte Bold.

---

## 3. Regras de Estilo CSS (Global)
- [ ] **Cores Principais:** Azul Royal (Primária), Pink/Rosa (Destaque), Branco (Base).
- [ ] **Border-radius:** 0px em todos os elementos (Botões e Cards).
- [ ] **Contenção:** O conteúdo central da Hero deve respeitar a largura máxima de 80% (max-width: 1280px).
