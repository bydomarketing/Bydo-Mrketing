# Guia de Contribuição - Bydo Marketing Digital

Obrigado por contribuir com o projeto Bydo! Este documento oferece diretrizes para contribuir.

---

## 1. Setup do Projeto

```bash
# Clone o repositório
git clone https://github.com/bydomarketing/Bydo-Mrketing.git
cd Bydo-Mrketing

# Instale as dependências
npm install

# Copie o arquivo de exemplo de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## 2. Estrutura do Projeto

```
src/
├── App.tsx          # Componentes principais e páginas
├── index.css        # Estilos globais e variáveis CSS
└── main.tsx         # Entry point

public/              # Arquivos estáticos
dist/                # Build de produção (não editar)
Plano/               # Documentação e planos
```

---

## 3. Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (ex: `Navbar.tsx`)
- **Funções/Variáveis**: camelCase (ex: `isMenuOpen`)
- **Constantes**: SCREAMING_SNAKE_CASE (ex: `WHATSAPP_URL`)

### Componentes React
```tsx
// Estrutura padrão de componente
const ComponentName = () => {
  // Hooks no topo
  const [state, setState] = useState();
  
  // Effects
  useEffect(() => {}, []);
  
  // Retorno JSX
  return (
    <div>
      {/* conteúdo */}
    </div>
  );
};

export default ComponentName;
```

### Estilização
- Usar Tailwind CSS para estilos
- Manter classes em ordem lógica
- Usar variáveis CSS para cores customizadas

---

## 4. Fluxo de Trabalho Git

### Branchs
```
main          -> Código em produção
develop       -> Desenvolvimento (se aplicável)
feature/*     -> Novas funcionalidades
fix/*         -> Correções de bugs
```

### Commits
```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
perf: melhorias de performance
test: adiciona testes
chore: tarefas de manutenção
```

### Exemplo
```bash
git checkout -b feature/novo-menu
git add .
git commit -m "feat: adiciona menu mobile responsivo"
git push origin feature/novo-menu
```

---

## 5. Pull Requests

### Antes de Submeter
- [ ] Código segue as convenções
- [ ] Testes passaram
- [ ] `npm run build` executa sem erros
- [ ] Sem warnings de lint

### Template de PR
```markdown
## Descrição
Breve descrição das mudanças.

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Screenshots (se aplicável)

## Checklist
- [ ] Testei localmente
- [ ] Código está funcionando
- [ ] Documentação atualizada
```

---

## 6. Ambiente de Desenvolvimento

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificação de código
```

### Extensões Recomendadas (VS Code)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag

---

## 7.获得帮助

- **Issues**: https://github.com/bydomarketing/Bydo-Mrketing/issues
- **Email**: agenciabydo@gmail.com

---

## 8. Código de Conduta

Seja respeitoso e profissional em todas as interações. Não toleramos:
- Linguagem ofensiva
- Ataques pessoais
- Spam ou advertising não solicitado
