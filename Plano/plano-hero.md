# Plano de Implementação: Reestruturação da Home - Bydo Marketing

**Objetivo:** Transformar a Home em um layout de agência boutique, fundindo o impacto visual da Kota (Hero e Navegação) com a clareza estratégica da Agência Digitals (Corpo da página).

---

## 1. Sistema de Navegação (Global Header)
- [ ] **Remover:** Menu horizontal padrão (`nav` tradicional).
- [ ] **Implementar:** Ícone de Menu Sanduíche (Hambúrguer `☰`) no canto superior direito.
- [ ] **Overlay de Menu:** Ao clicar no ícone, abrir um painel lateral/overlay em tela cheia com:
    - Links verticais: Home, Sobre Nós, Serviços, Blog, Contato.
    - Botão Secundário: "Comece seu projeto →" (Branco com borda).
- [ ] **Botão de Ação Fixo (Header):** Manter apenas o botão "Falar com a Bydo" visível ao lado do ícone sanduíche.
    - **Estilo:** Cor Pink, Cantos Retos (sem border-radius), Fonte Bold.

---

## 2. Seção Hero (Estilo Kota + Identidade Bydo)
- [ ] **Container:** 100vh de altura (ocupando toda a tela inicial).
- [ ] **Animação de Fundo (The Brand Play):** - Criar um fundo com formas orgânicas (blobs) animadas em CSS ou Canvas.
    - **Transição de Cores:** Loop suave entre Azul Royal (#002395), Pink (#FF007F) e Branco (#FFFFFF).
    - Velocidade: Lenta e fluida (Linear ou Ease-in-out).
- [ ] **Tipografia Gigante (Hierarquia Ogilvy):**
    - **H1 Central:** - Linha 1: "CRIAMOS PÁGINAS QUE" (Peso: 300 - Light, Cor: Branco).
        - Linha 2: "POSICIONAM SEU NEGÓCIO" (Peso: 900 - Black, Cor: Pink).
        - Linha 3: "COMO AUTORIDADE" (Peso: 900 - Black, Cor: Branco).
    - **Alinhamento:** Centralizado ou levemente deslocado à esquerda, conforme referência Kota.
- [ ] **Texto de Apoio (Sub-headline):** - Fonte média (25% maior que o padrão), cor Cinza Claro, centralizada abaixo do H1.
    - Texto: "Estratégia, Design e Performance para transformar sua presença digital em um ativo de vendas real."

---

## 3. Corpo da Página (Diagramação Agência Digitals)
- [ ] **Grid System:** Adotar o sistema de grade da Digitals para as seções abaixo da Hero.
- [ ] **Seção de Serviços:** - Grade de 3 colunas (Desktop).
    - Cards brancos com bordas retas (0px border-radius).
    - Ícones minimalistas em Pink.
    - Títulos em Azul Royal (Negrito) e descrições curtas.
- [ ] **Seção Sobre/Metodologia:** - Layout limpo com muito espaço em branco (White Space).
    - Uso de imagens de alta resolução com sombras suaves (Soft Shadows).

---

## 4. Rodapé e CTAs Finais
- [ ] **Botão Flutuante:** Manter botão de WhatsApp no canto inferior.
- [ ] **CTA Final:** Grande botão centralizado "Comece seu projeto →" em Pink.
- [ ] **Link de Destino:** `https://wa.me/551139553258?text=Olá,%20Herika!%20Vi%20a%20nova%20Home%20da%20Bydo%20e%20quero%20começar%20meu%20projeto.`

---

## 5. Regras de Estilo CSS (Global)
- **Cores principais:** Azul Royal (Primária), Pink/Rosa (Destaque), Branco (Base).
- **Border-radius:** 0px em todos os elementos (Botões e Cards).
- **Contenção:** Seções de conteúdo limitadas a 80% da largura da tela (max-width: 1280px).
