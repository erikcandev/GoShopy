# 🛍️ GoShopy - Landing Page E-commerce

> Landing page moderna e responsiva para plataforma de e-commerce, desenvolvida com React, TypeScript e Vite.

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

---

## 📋 Sobre o Projeto

**GoShopy** é uma landing page completa desenvolvida para demonstrar habilidades em desenvolvimento web frontend. O projeto simula uma plataforma de e-commerce com funcionalidades como loja virtual, gestão de estoque, logística integrada e suporte especializado.

> ⚠️ **Aviso**: Este é um projeto de portfólio. Todos os dados, preços, contatos e informações apresentadas são meramente ilustrativos.

---

## ✨ Funcionalidades

### Páginas Implementadas

- 🏠 **Home** - Hero com animações SVG, cards de serviços e depoimentos
- 🛒 **Serviços** - Detalhamento completo dos 4 serviços oferecidos
- 📖 **Sobre Nós** - História, Missão/Visão/Valores e diferenciais
- 💰 **Preços** - 3 planos com comparação de recursos
- ❓ **FAQ** - Sistema de perguntas frequentes com busca e filtros
- 📞 **Contato** - Formulário, informações e integração com redes sociais

### Recursos Destacados

- ✅ Design responsivo (mobile-first)
- ✅ Animações CSS suaves e elegantes
- ✅ Sistema de roteamento com React Router
- ✅ Modal informativo sobre o projeto
- ✅ Integração com ícones Tabler
- ✅ Paleta de cores profissional (verde #1b4332)
- ✅ Tipografia Inter (sans-serif)
- ✅ SEO-friendly

---

## 🚀 Tecnologias Utilizadas

### Core

- **React 19.1.1** - Biblioteca para construção de interfaces
- **TypeScript 5.8.3** - Superset JavaScript com tipagem estática
- **Vite 7.1.7** - Build tool e dev server ultrarrápido

### Dependências

- **React Router DOM 7.9.2** - Roteamento SPA
- **@tabler/icons-react 3.35.0** - Biblioteca de ícones
- **@mantine** - Componentes UI (core, hooks, notifications)
- **Axios 1.12.2** - Cliente HTTP
- **Zustand 5.0.8** - Gerenciamento de estado

### DevDependencies

- **ESLint** - Linting e formatação de código
- **TypeScript ESLint** - Suporte TypeScript no ESLint
- **@vitejs/plugin-react-swc** - Plugin React com SWC compiler

---

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/goshopy.git

# Entre no diretório
cd goshopy

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

### Preview do Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📁 Estrutura do Projeto

```
goshopy/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   └── DisclaimerModal.tsx
│   ├── data/               # Dados estáticos (serviços, depoimentos)
│   │   ├── services.tsx
│   │   └── testimonials.tsx
│   ├── pages/              # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   ├── App.tsx             # Componente principal + rotas
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                 # Assets estáticos
├── index.html             # HTML template
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── README.md              # Documentação
```

---

## 🎨 Paleta de Cores

```css
--primary-dark: #1b4332      /* Verde escuro - Títulos e destaques */
--primary-medium: #52b788    /* Verde médio - Elementos interativos */
--primary-light: #95d5b2     /* Verde claro - Acentos */
--primary-hover: #40916c     /* Verde hover - Estados ativos */
```

---

## 🖼️ Screenshots

### Desktop
- **Home**: Hero animado com SVG + 4 cards de serviços
- **Serviços**: Seções alternadas (branco/verde) com imagens
- **FAQ**: Sistema de busca e filtros por categoria

### Mobile
- Menu hamburger lateral
- Grid responsivo (4→2→1 colunas)
- Otimizado para touch

---

## 🔧 Configurações

### TypeScript

Projeto configurado com modo strict, target ES2020 e module bundler resolution.

### ESLint

Configurado com regras para React 19, hooks e refresh.

### Vite

Build otimizado com plugin React SWC para performance máxima.

---

## 📝 Próximas Melhorias

- [ ] Adicionar testes unitários (Vitest)
- [ ] Implementar testes E2E (Playwright)
- [ ] Adicionar animações com Framer Motion
- [ ] Implementar backend simulado (JSON Server)
- [ ] Adicionar mais interatividade nos formulários

---

## 🤝 Contribuindo

Este é um projeto de portfólio pessoal, mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a [MIT License](LICENSE).

---

## 👤 Autor

**Erik**

- Portfolio: [Seu site]
- LinkedIn: [Seu LinkedIn]
- Email: [Seu email]

---

## 🙏 Agradecimentos

- Ícones por [@tabler/icons-react](https://tabler-icons.io/)
- Tipografia [Inter](https://fonts.google.com/specimen/Inter)
- Inspiração de design: Diversas landing pages modernas

---

<div align="center">
  Desenvolvido com ❤️ por Erik
  <br>
  <sub>Projeto de Portfólio - 2025</sub>
</div>
