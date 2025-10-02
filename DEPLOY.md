# 🚀 Guia de Deploy - GoShopy

Este guia contém instruções para fazer upload do projeto no GitHub e deploy em diferentes plataformas.

---

## 📦 Pré-Deploy Checklist

Antes de fazer o deploy, certifique-se de que:

- [x] ✅ Todas as dependências estão instaladas (`npm install`)
- [x] ✅ O build está funcionando (`npm run build`)
- [x] ✅ Não há erros de linting (`npm run lint`)
- [x] ✅ README.md está atualizado
- [x] ✅ .gitignore está configurado
- [x] ✅ LICENSE está presente

---

## 🐙 Upload para GitHub

### 1. Inicialize o Git (se ainda não foi feito)

```bash
cd c:\PROJETOS\GoShopy\goshopy
git init
```

### 2. Adicione todos os arquivos

```bash
git add .
```

### 3. Faça o primeiro commit

```bash
git commit -m "🎉 Initial commit - GoShopy v1.0.0"
```

### 4. Crie um novo repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `goshopy` ou `goshopy-landing-page`
3. Descrição: "Landing page moderna para e-commerce com React, TypeScript e Vite"
4. Visibilidade: **Public** (para portfólio)
5. **NÃO** inicialize com README, .gitignore ou LICENSE (já temos)
6. Clique em "Create repository"

### 5. Conecte ao repositório remoto

```bash
# Substitua SEU-USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU-USUARIO/goshopy.git
git branch -M main
git push -u origin main
```

### 6. Verifique o upload

Acesse `https://github.com/SEU-USUARIO/goshopy` e confirme que todos os arquivos foram enviados.

---

## 🌐 Deploy - Opções Recomendadas

### Opção 1: Vercel (Recomendado) ⭐

**Vantagens:** Grátis, deploy automático, SSL, preview branches

#### Passos:

1. Acesse: https://vercel.com/
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório `goshopy`
5. Configurações:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Clique em "Deploy"

✅ **Pronto!** Seu site estará online em ~2 minutos.

**URL:** `https://goshopy-[seu-usuario].vercel.app`

#### Configuração de Domínio Personalizado (Opcional)

1. Vá em "Settings" → "Domains"
2. Adicione seu domínio customizado
3. Configure os DNS conforme instruções

---

### Opção 2: Netlify

**Vantagens:** Grátis, formulários integrados, deploy automático

#### Passos:

1. Acesse: https://netlify.com/
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Selecione GitHub e escolha o repositório
5. Configurações:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique em "Deploy site"

✅ **Pronto!** Site no ar em ~2 minutos.

**URL:** `https://goshopy-[random].netlify.app`

#### Customizar URL (Opcional)

1. Vá em "Site settings" → "Change site name"
2. Escolha: `goshopy-seu-nome`

---

### Opção 3: GitHub Pages

**Vantagens:** 100% gratuito, integrado ao GitHub

#### Passos:

1. Instale o pacote gh-pages:

```bash
npm install --save-dev gh-pages
```

2. Adicione no `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://SEU-USUARIO.github.io/goshopy"
}
```

3. Configure o `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/goshopy/', // Nome do repositório
})
```

4. Faça o deploy:

```bash
npm run deploy
```

5. Ative o GitHub Pages:
   - Repositório → Settings → Pages
   - Source: `gh-pages` branch
   - Clique em "Save"

✅ **URL:** `https://SEU-USUARIO.github.io/goshopy`

---

### Opção 4: Render

**Vantagens:** Gratuito, SSL automático, fácil configuração

#### Passos:

1. Acesse: https://render.com/
2. Faça login com GitHub
3. "New" → "Static Site"
4. Conecte o repositório `goshopy`
5. Configurações:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Clique em "Create Static Site"

✅ **URL:** `https://goshopy.onrender.com`

---

## 🔄 Deploy Automático (CI/CD)

### GitHub Actions (Recomendado)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

Cada push na branch `main` irá:
1. ✅ Instalar dependências
2. ✅ Fazer build
3. ✅ Rodar lint
4. ✅ Deploy automático (se conectado ao Vercel/Netlify)

---

## 📊 Monitoramento e Analytics

### Google Analytics (Opcional)

1. Crie uma conta: https://analytics.google.com/
2. Obtenha o ID de rastreamento
3. Adicione no `index.html` antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎯 Otimizações Pós-Deploy

### 1. Performance

- ✅ Imagens já otimizadas (SVG inline)
- ✅ Build Vite já minificado
- ✅ CSS otimizado

### 2. SEO

Adicione no `index.html`:

```html
<meta name="description" content="GoShopy - Landing page moderna para e-commerce">
<meta name="keywords" content="e-commerce, loja virtual, React, TypeScript">
<meta name="author" content="Erik">

<!-- Open Graph -->
<meta property="og:title" content="GoShopy - E-commerce Platform">
<meta property="og:description" content="Landing page moderna para e-commerce">
<meta property="og:type" content="website">
<meta property="og:url" content="https://seu-dominio.com">
```

### 3. PWA (Opcional)

Adicione `manifest.json` para tornar o site instalável:

```json
{
  "name": "GoShopy",
  "short_name": "GoShopy",
  "description": "Landing page e-commerce",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1b4332",
  "theme_color": "#1b4332",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## ✅ Checklist Final

Após o deploy, verifique:

- [ ] ✅ Site carrega corretamente
- [ ] ✅ Todas as páginas funcionam (navegação)
- [ ] ✅ Links do footer abrem o modal
- [ ] ✅ Formulário de contato funciona
- [ ] ✅ Responsivo em mobile
- [ ] ✅ Performance boa (Lighthouse > 90)
- [ ] ✅ Sem erros no console
- [ ] ✅ Meta tags corretas

---

## 🆘 Problemas Comuns

### Build falha

```bash
# Limpe cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Rotas não funcionam após refresh

Configure `_redirects` (Netlify) ou `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### CSS não carrega

Verifique `base` no `vite.config.ts` está correto para sua URL.

---

## 🎉 Parabéns!

Seu projeto GoShopy está online! 🚀

**Compartilhe:**
- LinkedIn
- Twitter
- Portfolio
- GitHub README

---

<div align="center">
  <strong>Desenvolvido por Erik Domingos Candido para portfólio</strong>
  <br>
  <sub>GoShopy © 2025</sub>
</div>
