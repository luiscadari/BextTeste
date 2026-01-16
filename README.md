# 📑 Gerenciador de Tarefas

> Aplicação web moderna para gerenciamento de tarefas desenvolvida com Vue 3, TypeScript e Tailwind CSS.

Aplicação criada como solução de desafio técnico front-end pleno na Bext, demonstrando habilidades em desenvolvimento frontend moderno com as melhores práticas do ecossistema Vue.

## ✨ Funcionalidades

- 🔐 **Autenticação de Usuários** - Sistema de login com proteção de rotas
- ✅ **CRUD Completo de Tarefas** - Criar, listar, editar e excluir tarefas
- 🏷️ **Categorização** - Organize tarefas por categorias (Trabalho, Pessoal, Estudos)
- ⚡ **Prioridades** - Defina níveis de prioridade (Baixa, Média, Alta)
- 📊 **Visualização em Tabela** - Interface intuitiva com @tanstack/vue-table
- 🎨 **Interface Moderna** - Design responsivo com componentes shadcn/vue
- 🚀 **Performance** - Gerenciamento de estado eficiente com Pinia

## 🛠️ Tecnologias Utilizadas

### Core

- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool de última geração

### Estado e Roteamento

- **[Pinia](https://pinia.vuejs.org/)** - Gerenciamento de estado
- **[Vue Router](https://router.vuejs.org/)** - Roteamento oficial para Vue.js

### UI/UX

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[shadcn/vue](https://www.shadcn-vue.com/)** - Componentes UI reutilizáveis
- **[Reka UI](https://reka-ui.com/)** - Componentes acessíveis e sem estilo
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos e personalizáveis

### Utilitários

- **[Axios](https://axios-http.com/)** - Cliente HTTP baseado em promises
- **[JSON Server](https://github.com/typicode/json-server)** - API REST fake para desenvolvimento

## 📋 Pré-requisitos

- **[Bun](https://bun.sh/)** (runtime JavaScript moderno)
- Node.js >= 20 (caso não use Bun)

## 🚀 Como inicializar a aplicação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd BextTeste
```

### 2. Instale as dependências

```bash
bun install
```

### 3. Inicie a API local

Em um terminal, execute:

```bash
bunx json-server db.json
```

Isso iniciará a API REST em `http://localhost:3000` utilizando o arquivo `db.json` como banco de dados.

### 4. Inicie o servidor de desenvolvimento

Em outro terminal, execute:

```bash
bun run dev
```

Isso iniciará o servidor Vite em modo de desenvolvimento.

### 5. Acesse a aplicação

Abra seu navegador e acesse: **http://localhost:5173**

> **Nota:** A porta pode variar. Verifique a saída do terminal para confirmar a porta exata.

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Recursos estáticos
├── components/      # Componentes Vue reutilizáveis
│   ├── ui/         # Componentes UI do shadcn/vue
│   ├── Home/       # Componentes da página inicial
│   ├── Login/      # Componentes de autenticação
│   └── Tasks/      # Componentes de gerenciamento de tarefas
├── lib/            # Utilitários e helpers
├── stores/         # Stores Pinia
│   ├── auth.store.ts    # Gerenciamento de autenticação
│   └── tasks.store.ts   # Gerenciamento de tarefas
├── types/          # Definições de tipos TypeScript
├── views/          # Páginas/Views da aplicação
│   ├── Home/
│   ├── Login/
│   └── Tasks/
├── App.vue         # Componente raiz
├── main.ts         # Entry point
├── router.ts       # Configuração de rotas
└── style.css       # Estilos globais
```

## 🔑 Uso da Aplicação

1. **Página Inicial** - Acesse `/` para ver a landing page
2. **Login** - Acesse `/login` para autenticar (credenciais conforme implementação)
   - As credenciais por padrão são:
     - email: teste@teste.com;
     - senha: 123456;
3. **Lista de Tarefas** - Após autenticação, acesse `/user/tasks` para ver suas tarefas
4. **Criar Tarefa** - Acesse `/user/tasks/create` para adicionar novas tarefas

### Rotas Protegidas

As rotas `/user/*` são protegidas por autenticação. Usuários não autenticados serão redirecionados para `/login`.

## 🏗️ Scripts Disponíveis

```bash
# Desenvolvimento
bun run dev

# Build para produção
bun run build

# Preview do build de produção
bun run preview
```

## 🗄️ Estrutura do Banco de Dados (db.json)

```json
{
  "tasks": [],
  "categories": ["Trabalho", "Pessoal", "Estudos"],
  "priorities": ["Baixa", "Média", "Alta"]
}
```

## 🎨 Componentes UI

A aplicação utiliza uma biblioteca completa de componentes shadcn/vue:

- Alert, Alert Dialog
- Badge, Button, Checkbox
- Dialog, Input, Select
- Table, Textarea, Spinner
- Navigation Menu
- Empty States

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico.

---

Desenvolvido com ❤️ para o desafio técnico Bext
