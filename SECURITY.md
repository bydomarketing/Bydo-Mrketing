# Política de Segurança - Bydo Marketing Digital

Este documento estabelece as práticas de segurança para o projeto Bydo.

---

## 1. Gestão de Segredos

### Regras de Ouro
- Nunca commit arquivos contendo segredos (chaves API, tokens, senhas)
- Todos os segredos devem estar em variáveis de ambiente
- Em produção, usar serviços de environment do hosting (Netlify/Vercel)

### Variáveis de Ambiente
```
# Desenvolvedor local
cp .env.example .env.local

# Produção (Netlify)
# Configurar em: Site Settings > Environment Variables
```

---

## 2. Validação de Inputs

### Frontend
```typescript
// Sempre sanitize inputs de usuários
const sanitizeInput = (input: string) => {
  return input.replace(/[<>]/g, '').trim();
};

// Validar URLs externas
const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return url.startsWith('https://');
  } catch {
    return false;
  }
};
```

### Regras
- Validar todos os inputs do usuário
- Usar HTTPS para todas as requisições externas
- Implementar rate limiting em APIs

---

## 3. Headers de Segurança

### Content Security Policy (CSP)
```
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' https: data:;
  connect-src 'self' https://api.bydo.com;
```

### Outros Headers Recomendados
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 4. Segurança de Dependências

### Auditoria Regular
```bash
# Verificar vulnerabilidades
npm audit

# Atualizar dependências
npm update

# Verificar packages desatualizados
npm outdated
```

### Boas Práticas
- Revisar permissões de npm packages antes de instalar
- Usar `npm ci` em vez de `npm install` em produção
- Manter dependências atualizadas

---

## 5. Armazenamento de Dados

### LocalStorage/SessionStorage
- ❌ NÃO armazenar: tokens, senhas, dados sensíveis
- ✅ PODE armazenar: preferências de UI, estado de theme

### Alternatives Seguras
- Para dados sensíveis: usar cookies HTTPOnly
- Para estado: React Context ou Zustand

---

## 6. Redes e Requisições

### HTTPS
- ✅ Sempre usar HTTPS em produção
- ✅ Redirecionar HTTP para HTTPS
- ❌ Não fazer requisições HTTP em produção

### CORS
- Configurar CORS apenas para origens permitidas
- Não usar `*` em produção

---

## 7. Relatório de Vulnerabilidades

Se você encontrar uma vulnerabilidade de segurança, por favor:

1. **NÃO** abra uma issue pública
2. Envie email para: agenciabydo@gmail.com
3. Descreva o problema detalhadamente
4. Aguarde resposta antes de qualquer divulgação

---

## 8. Checklist de Segurança

- [ ] `.env` está no `.gitignore`
- [ ] Variáveis de ambiente configuradas no Netlify
- [ ] Dependências atualizadas (`npm audit`)
- [ ] HTTPS forçado em produção
- [ ] Inputs validados e sanitizados
- [ ] Sem segredos commitados
- [ ] Headers de segurança configurados
