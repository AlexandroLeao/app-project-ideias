# Organizador de Ideias e Projetos

Aplicação web desenvolvida para organizar ideias, projetos, planejamentos e objetivos pessoais de forma simples, visual e estruturada.

🔗 **Aplicação:** https://app-project-ideias.vercel.app/

---

## Sobre o projeto

Este projeto surgiu de uma necessidade pessoal: possuo diversas ideias, projetos, cursos, objetivos e interesses que muitas vezes acabam se acumulando e dificultando a definição de prioridades e próximos passos.

A proposta foi criar uma ferramenta que fosse além de uma lista de tarefas tradicional.

Em vez de apenas registrar "o que precisa ser feito", a aplicação permite registrar uma ideia ou projeto, contextualizá-lo, acompanhar seu estado, definir prioridades, estabelecer prazos e adicionar materiais de referência.

O projeto também foi concebido para ser evolutivo, permitindo que novas necessidades identificadas durante seu uso possam originar futuras funcionalidades.

---

## Objetivo

Criar uma aplicação simples e intuitiva capaz de centralizar ideias, projetos e planejamentos pessoais, permitindo:

- Registrar novas ideias e projetos;
- Organizar informações por categorias;
- Acompanhar o status de cada item;
- Definir prioridades;
- Estabelecer datas e prazos;
- Adicionar descrições e informações complementares;
- Anexar materiais de referência;
- Destacar itens favoritos;
- Evoluir continuamente a partir das necessidades identificadas durante o uso.

---

## Problemática

A grande quantidade de ideias e projetos pessoais pode dificultar a organização e a definição de por onde começar.

Além disso, ideias podem ser esquecidas ou permanecer apenas como pensamentos sem uma estrutura clara para transformá-las em ações.

A solução foi pensada para preencher esse espaço entre uma simples anotação e um sistema tradicional de gerenciamento de tarefas.

---

## Funcionalidades

### Cadastro de ideias e projetos

Cada registro pode conter:

- Título;
- Categoria;
- Status;
- Prioridade;
- Descrição;
- Data de início;
- Prazo;
- Favorito;
- Arquivos de referência.

### Categorias

As ideias podem ser organizadas por diferentes contextos, como:

- Ideias;
- Programação;
- Estudos;
- Carreira;
- Projetos;
- Financeiro;
- Pessoal;
- Hobby;
- Saúde;
- Outros.

### Status

Cada registro pode representar diferentes etapas de evolução:

- Ideia;
- Planejando;
- Em andamento;
- Concluído;
- Pausado.

### Prioridade

- Alta;
- Média;
- Baixa.

### Anexos

Permite adicionar arquivos de referência associados às ideias e projetos, incluindo imagens e PDF.

---

## Processo de desenvolvimento

O projeto foi desenvolvido buscando aplicar, em escala pessoal, etapas utilizadas no desenvolvimento de software:

```text
Identificação do problema
        ↓
Levantamento de requisitos
        ↓
Definição do escopo
        ↓
Modelagem da solução
        ↓
Definição da experiência do usuário
        ↓
Desenvolvimento
        ↓
Validação e ajustes
        ↓
Versionamento
        ↓
Deploy
        ↓
Evolução contínua
```

Por se tratar de um projeto pessoal, o processo foi mantido proporcional ao seu escopo, evitando burocracia desnecessária.

---

## Requisitos

### Requisitos funcionais

**RF01** — O sistema deve permitir cadastrar uma ideia ou projeto.

**RF02** — O sistema deve permitir definir uma categoria.

**RF03** — O sistema deve permitir definir o status.

**RF04** — O sistema deve permitir definir a prioridade.

**RF05** — O sistema deve permitir adicionar uma descrição.

**RF06** — O sistema deve permitir definir data de início e prazo.

**RF07** — O sistema deve permitir marcar um registro como favorito.

**RF08** — O sistema deve permitir adicionar arquivos de referência.

**RF09** — O sistema deve permitir visualizar e gerenciar os registros cadastrados.

### Requisitos não funcionais

**RNF01** — A aplicação deve possuir interface simples e intuitiva.

**RNF02** — A interface deve ser responsiva.

**RNF03** — A aplicação deve apresentar feedback visual adequado às interações do usuário.

**RNF04** — Os dados devem permanecer disponíveis após o encerramento e reabertura da aplicação, dentro das limitações do armazenamento local utilizado.

---

## Modelagem e Engenharia de Software

Durante o desenvolvimento foram considerados conceitos de Engenharia de Software, incluindo:

- Levantamento de requisitos;
- Requisitos funcionais e não funcionais;
- Casos de uso;
- Modelagem UML;
- Definição de escopo;
- Prototipação e UX/UI;
- Desenvolvimento incremental;
- Validação da solução;
- Testes;
- Documentação;
- Versionamento;
- Deploy;
- Planejamento de evolução do produto.

---

## UX/UI

Um dos principais desafios do projeto foi encontrar o equilíbrio entre simplicidade e funcionalidade.

A aplicação foi projetada para evitar excesso de informações na tela, mantendo as funcionalidades organizadas e permitindo que informações adicionais sejam acessadas conforme a necessidade do usuário.

Durante o desenvolvimento foram realizados ajustes de:

- Hierarquia visual;
- Posicionamento de elementos;
- Estados de interação;
- Feedback visual;
- Navegação;
- Microinterações;
- Responsividade.

---

## Segurança

Foram consideradas práticas básicas de segurança compatíveis com uma aplicação frontend e pessoal, incluindo:

- Validação das entradas do usuário;
- Tratamento de conteúdo fornecido pelo usuário;
- Validação de arquivos anexados;
- Limitação de tamanho dos arquivos;
- Ausência de armazenamento de credenciais ou informações sensíveis;
- Tratamento de dados armazenados localmente;
- Testes com entradas inválidas e inesperadas.

> Como a aplicação utiliza armazenamento local e não possui backend nesta versão, recursos como autenticação, autorização e gerenciamento de usuários não fazem parte do escopo atual.

---

## Tecnologias e ferramentas

- React;
- TypeScript;
- Tailwind CSS;
- Vite;
- Git;
- GitHub;
- Lovable;
- Vercel.

### Desenvolvimento assistido por IA

O Lovable foi utilizado como ferramenta de desenvolvimento low-code/AI-assisted.

A ferramenta auxiliou na implementação e evolução da aplicação a partir das especificações definidas durante o projeto.

As decisões relacionadas ao problema, escopo, requisitos, funcionalidades, experiência do usuário, validação e evolução da solução foram definidas durante o processo de desenvolvimento.

---

## Deploy

A aplicação foi versionada no GitHub e publicada na Vercel.

**Aplicação:** https://app-project-ideias.vercel.app/

A utilização de um domínio próprio não foi considerada necessária nesta versão por se tratar de um projeto pessoal.

---

## Roadmap

O projeto foi concebido para evoluir conforme novas necessidades sejam identificadas.

Possíveis evoluções:

- [ ] Checklist dentro de cada projeto;
- [ ] Tags;
- [ ] Busca e filtros avançados;
- [ ] Histórico de alterações;
- [ ] Backend e banco de dados;
- [ ] Autenticação;
- [ ] API;
- [ ] Automação de tarefas;
- [ ] Integração com Inteligência Artificial;
- [ ] Sugestão automática de próximos passos;
- [ ] Geração de planos a partir de uma ideia.

---

## Aprendizados

O principal objetivo deste projeto foi utilizar uma aplicação pessoal como laboratório para aplicar conceitos de desenvolvimento e Engenharia de Software em um problema real.

Além da implementação da aplicação, o projeto proporcionou prática em:

- Análise de problemas;
- Levantamento de requisitos;
- Modelagem;
- UX/UI;
- Desenvolvimento incremental;
- Validação;
- Versionamento;
- Deploy;
- Documentação;
- Pensamento orientado a produto;
- Uso consciente de ferramentas de desenvolvimento assistido por IA.

---

## Status

**Projeto em evolução.**

A primeira versão foi desenvolvida com foco em simplicidade, organização e validação da ideia. Novas funcionalidades poderão ser adicionadas conforme necessidades reais forem identificadas durante sua utilização.
