# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-10-02

### 🎉 Lançamento Inicial

#### ✨ Adicionado
- Estrutura base do projeto com React 19 + TypeScript + Vite
- Sistema de roteamento com React Router DOM
- 6 páginas principais:
  - Home com hero animado e cards de serviços
  - Serviços com layout alternado
  - Sobre Nós com MVV e diferenciais
  - Preços com 3 planos comparativos
  - FAQ com busca e filtros por categoria
  - Contato com formulário e informações
- Modal de disclaimer informativo
- Design responsivo mobile-first
- Animações CSS suaves
- Paleta de cores profissional (#1b4332)
- Integração com @tabler/icons-react

#### 🎨 Design
- Hero com ilustração SVG animada
- 4 cards de serviços alinhados horizontalmente
- Seções alternadas (branco/verde) em Serviços
- Footer com links para modal de disclaimer
- Menu hamburger lateral para mobile

#### ⚙️ Configurações
- TypeScript com modo strict
- ESLint com regras React 19
- Vite com plugin SWC para performance
- Estrutura de pastas organizada

#### 🐛 Correções
- Removidas variáveis CSS não utilizadas
- Corrigido memory leak no IntersectionObserver
- Substituídas referências inconsistentes a variáveis
- Removidos estilos inline desnecessários

#### 📝 Documentação
- README.md completo com badges e instruções
- LICENSE MIT
- .env.example para futuras configurações
- CHANGELOG.md para versionamento

---

## [Não Lançado]

### 🔮 Planejado para Futuras Versões

#### v1.1.0
- [ ] Testes unitários com Vitest
- [ ] Testes E2E com Playwright
- [ ] Modo escuro (dark theme)
- [ ] Animações com Framer Motion

#### v1.2.0
- [ ] Backend simulado com JSON Server
- [ ] Formulário de contato funcional
- [ ] Newsletter subscription
- [ ] Blog/Notícias

#### v2.0.0
- [ ] Carrinho de compras funcional
- [ ] Sistema de autenticação
- [ ] Painel administrativo
- [ ] Integração com gateway de pagamento

---

## Tipos de Mudanças

- `✨ Adicionado` - Novas funcionalidades
- `🔧 Modificado` - Mudanças em funcionalidades existentes
- `🗑️ Removido` - Funcionalidades removidas
- `🐛 Corrigido` - Correções de bugs
- `🔒 Segurança` - Melhorias de segurança
- `📝 Documentação` - Mudanças na documentação
- `⚡ Performance` - Melhorias de performance
- `♻️ Refatoração` - Refatoração de código

---

[1.0.0]: https://github.com/seu-usuario/goshopy/releases/tag/v1.0.0
