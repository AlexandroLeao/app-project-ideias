# Gerenciador de Ideias e Projetos

Aplicação web desenvolvida para organizar ideias, projetos, planejamentos e objetivos pessoais de forma simples, visual e estruturada.

🔗 **Aplicação:** https://app-project-ideias.vercel.app/

---

## Sobre o projeto

O **Organizador de Ideias e Projetos** surgiu de uma necessidade pessoal: diferentes ideias, projetos, estudos, objetivos e interesses podem se acumular e dificultar a definição de prioridades e próximos passos.

A proposta foi criar uma ferramenta que fosse além de uma lista de tarefas tradicional.

Em vez de apenas registrar "o que precisa ser feito", a aplicação permite registrar uma ideia ou projeto, contextualizá-lo, acompanhar seu estado, definir prioridades, estabelecer prazos e adicionar materiais de referência.

O projeto também foi concebido para evoluir conforme novas necessidades sejam identificadas durante seu uso.

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
- Pesquisar e filtrar registros;
- Evoluir continuamente a partir das necessidades identificadas durante o uso.

---

## Problemática

A grande quantidade de ideias e projetos pessoais pode dificultar a organização e a definição de por onde começar.

Além disso, ideias podem ser esquecidas ou permanecer apenas como pensamentos sem uma estrutura clara para transformá-las em ações.

A solução foi pensada para preencher esse espaço entre uma simples anotação e um sistema tradicional de gerenciamento de tarefas.

---

# Funcionalidades

## Cadastro de ideias e projetos

Cada registro pode conter:

- Título;
- Categoria;
- Status;
- Prioridade;
- Descrição e anotações;
- Data de início;
- Prazo;
- Favorito;
- Arquivos de referência.

---

## Categorias

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

Cada categoria possui uma identificação visual própria para facilitar a diferenciação entre os registros.

---

## Status

Cada registro pode representar diferentes etapas de evolução:

- Ideia;
- Planejando;
- Em andamento;
- Concluído;
- Pausado.

---

## Prioridade

As ideias podem receber três níveis de prioridade:

- 🔴 Alta;
- 🟡 Média;
- 🟢 Baixa.

A prioridade é apresentada visualmente nos cartões e na página de detalhes.

---

## Datas e prazos

É possível definir:

- Data de início;
- Prazo opcional.

Quando existe um prazo, a aplicação calcula e apresenta a quantidade de dias restantes.

---

## Favoritos

Ideias importantes podem ser marcadas como favoritas por meio de uma estrela.

Também existe um filtro específico para visualizar somente os itens favoritos.

---

## Pesquisa e filtros

A aplicação permite localizar e organizar as ideias por meio de recursos de pesquisa e filtros, incluindo:

- Categorias;
- Favoritos;
- Pesquisa.

---

## Anexos

É possível adicionar arquivos de referência associados às ideias e projetos.

Formatos suportados:

- PNG;
- JPEG;
- JFIF;
- PDF.

**Tamanho máximo:** 10 MB por arquivo.

Os arquivos possuem validação de conteúdo e são armazenados separadamente dos dados principais das ideias.

---

## Página de detalhes

Cada ideia possui uma página própria:

`/ideia/:id`

Nela é possível:

- Visualizar informações completas;
- Alterar status;
- Editar informações;
- Adicionar e consultar anotações;
- Visualizar anexos;
- Baixar arquivos;
- Excluir a ideia.

---

# Arquitetura

O projeto utiliza uma arquitetura híbrida, separando o armazenamento das informações das ideias do armazenamento dos arquivos.

```text
                         USUÁRIO
                            │
                            ▼
                 ┌────────────────────┐
                 │      React 19      │
                 │   TanStack Start   │
                 └─────────┬──────────┘
                           │
                 ┌─────────┴─────────┐
                 │                   │
                 ▼                   ▼
          Dados das ideias         Anexos
                 │                   │
                 ▼                   ▼
           LocalStorage        Lovable Cloud
                                     │
                              ┌──────┴──────┐
                              ▼             ▼
                       Cloud Storage  Server Functions
```

### Dados das ideias

As informações principais das ideias são armazenadas no **LocalStorage** do navegador.

A aplicação utiliza `useSyncExternalStore` para acompanhar as alterações e manter os componentes sincronizados.

Essa decisão permite que a aplicação seja utilizada sem exigir cadastro ou login para começar a organizar as ideias.

### Anexos

Os arquivos não são armazenados no LocalStorage.

Eles utilizam o **Lovable Cloud**, incluindo:

- Cloud Storage;
- Server Functions.

Essa separação evita utilizar o armazenamento local do navegador para arquivos como imagens e PDFs.

---

# Segurança

A aplicação possui mecanismos específicos para validação e proteção dos anexos.

## Validação de arquivos

Os arquivos não são validados apenas pela extensão.

A aplicação utiliza **Magic Bytes** para verificar os primeiros bytes do conteúdo e confirmar se o arquivo corresponde ao formato esperado.

## Limite de tamanho

Os anexos possuem limite máximo de **10 MB**.

## Armazenamento privado

Os arquivos são armazenados em ambiente privado no Lovable Cloud.

## Tokens criptográficos

Cada anexo utiliza um token/chave criptográfica de 256 bits.

## URLs assinadas

O acesso aos arquivos utiliza URLs assinadas com expiração automática de aproximadamente 5 minutos.

## Validação de dados

Os formulários utilizam **Zod** para validação estruturada dos dados.

As validações relacionadas aos arquivos também são realizadas nas operações de servidor.

### Limitações atuais

A aplicação não possui autenticação ou gerenciamento de usuários.

As ideias são armazenadas localmente no navegador, enquanto os anexos utilizam armazenamento privado em nuvem.

Por isso, a aplicação atualmente não é um sistema multiusuário ou colaborativo.

---

# Processo de Desenvolvimento

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
Documentação
        ↓
Evolução contínua
```

Por se tratar de um projeto pessoal, o processo foi mantido proporcional ao seu escopo, evitando burocracia desnecessária.

A documentação detalhada do processo pode ser consultada na pasta [`docs/`](./docs/).

---

# Requisitos

## Requisitos funcionais

**RF01** — O sistema deve permitir cadastrar uma ideia ou projeto.

**RF02** — O sistema deve permitir definir uma categoria.

**RF03** — O sistema deve permitir definir o status.

**RF04** — O sistema deve permitir definir a prioridade.

**RF05** — O sistema deve permitir adicionar descrição e anotações.

**RF06** — O sistema deve permitir definir data de início e prazo.

**RF07** — O sistema deve permitir marcar um registro como favorito.

**RF08** — O sistema deve permitir pesquisar e filtrar registros.

**RF09** — O sistema deve permitir adicionar arquivos de referência.

**RF10** — O sistema deve permitir visualizar e editar os registros cadastrados.

**RF11** — O sistema deve permitir excluir registros.

**RF12** — O sistema deve permitir visualizar e acessar os anexos associados.

## Requisitos não funcionais

**RNF01** — A aplicação deve possuir interface simples e intuitiva.

**RNF02** — A interface deve ser responsiva.

**RNF03** — A aplicação deve apresentar feedback visual adequado às interações.

**RNF04** — Os dados das ideias devem permanecer disponíveis após o encerramento e reabertura da aplicação, dentro das limitações do armazenamento local.

**RNF05** — Os arquivos devem passar por validação de formato e tamanho.

**RNF06** — Os anexos devem utilizar armazenamento privado.

**RNF07** — A aplicação deve possuir estrutura organizada e manutenível.

---

# UX/UI

Um dos principais desafios do projeto foi encontrar o equilíbrio entre simplicidade e funcionalidade.

A aplicação foi projetada para evitar excesso de informações na tela, mantendo as funcionalidades organizadas e permitindo que informações adicionais sejam acessadas conforme a necessidade.

Durante o desenvolvimento foram realizados ajustes de:

- Hierarquia visual;
- Posicionamento de elementos;
- Estados de interação;
- Feedback visual;
- Navegação;
- Microinterações;
- Responsividade;
- Identificação visual por categorias.

A identidade visual também utiliza:

- **Bricolage Grotesque** para títulos;
- **DM Sans** para textos;
- **Lucide React** para ícones;
- favicon próprio em pixel art representando uma lâmpada.

---

# Tecnologias e Ferramentas

## Aplicação

- React 19;
- TanStack Start v1;
- TanStack Router;
- TypeScript;
- Vite 7.

## Interface

- Tailwind CSS v4;
- Radix UI;
- shadcn/ui;
- Lucide React.

## Formulários e validação

- React Hook Form;
- Zod.

## Datas

- date-fns;
- react-day-picker.

## Armazenamento e servidor

- LocalStorage;
- `useSyncExternalStore`;
- Lovable Cloud;
- Cloud Storage;
- Server Functions;
- `createServerFn`.

## Desenvolvimento e publicação

- Git;
- GitHub;
- Lovable;
- Vercel.

---

# Desenvolvimento Assistido por IA

O projeto foi desenvolvido com auxílio do **Lovable**, utilizando uma abordagem de desenvolvimento assistido por IA/low-code.

A ferramenta auxiliou na implementação e evolução da aplicação a partir das especificações definidas durante o projeto.

A utilização de IA não substituiu as decisões relacionadas ao produto e ao processo de desenvolvimento.

As decisões relacionadas a:

- Problema;
- Escopo;
- Requisitos;
- Funcionalidades;
- Experiência do usuário;
- Arquitetura;
- Validação;
- Evolução;
- Documentação

foram consideradas durante o desenvolvimento do projeto.

O uso da ferramenta é apresentado de forma transparente como parte do processo de desenvolvimento.

---

# Versionamento

O projeto utiliza **Git e GitHub** para versionamento do código-fonte e acompanhamento de sua evolução.

O repositório também funciona como espaço para documentação técnica do projeto.

---

# Deploy

A aplicação foi publicada e está disponível na Vercel.

🔗 **Aplicação:** https://app-project-ideias.vercel.app/

A utilização de domínio próprio não foi considerada necessária nesta versão por se tratar de um projeto pessoal.

Os recursos de armazenamento e funções de servidor relacionados aos anexos utilizam o Lovable Cloud.

---

# Roadmap

O projeto foi concebido para evoluir conforme novas necessidades sejam identificadas.

Possíveis evoluções:

- [ ] Checklist dentro de cada projeto;
- [ ] Tags;
- [ ] Busca e filtros avançados;
- [ ] Histórico de alterações;
- [ ] Backend e banco de dados para centralização das ideias;
- [ ] Autenticação;
- [ ] Sincronização entre dispositivos;
- [ ] API;
- [ ] Automação de tarefas;
- [ ] Integração com Inteligência Artificial;
- [ ] Sugestão automática de próximos passos;
- [ ] Geração de planos a partir de uma ideia;
- [ ] Notificações e lembretes.

A evolução para uma arquitetura com banco de dados e autenticação será considerada caso a necessidade de sincronização, múltiplos dispositivos ou múltiplos usuários passe a fazer parte do escopo.

---

# Aprendizados

O principal objetivo deste projeto foi utilizar uma aplicação pessoal como laboratório para aplicar conceitos de desenvolvimento e Engenharia de Software em um problema real.

Além da implementação da aplicação, o projeto proporcionou prática em:

- Análise de problemas;
- Levantamento de requisitos;
- Definição de escopo;
- Modelagem;
- Arquitetura;
- UX/UI;
- Desenvolvimento incremental;
- Validação;
- Segurança de arquivos;
- Versionamento;
- Deploy;
- Documentação;
- Pensamento orientado a produto;
- Tomada de decisões técnicas;
- Uso consciente de ferramentas de desenvolvimento assistido por IA.

---

# Documentação Técnica

A documentação detalhada do projeto está organizada em etapas:

```text
docs/
├── 01-visao-do-projeto.md
├── 02-problema-e-objetivos.md
├── 03-requisitos.md
├── 04-casos-de-uso.md
├── 05-modelagem.md
├── 06-arquitetura.md
├── 07-ux-ui.md
├── 08-desenvolvimento.md
├── 09-seguranca.md
├── 10-testes.md
├── 11-versionamento.md
├── 12-deploy.md
├── 13-resultados.md
├── 14-limitacoes.md
├── 15-roadmap.md
└── 16-stack-e-estrutura.md
```

A documentação acompanha o projeto desde a identificação do problema até sua arquitetura, desenvolvimento, segurança, testes, publicação e evolução.

---

# Status

**Projeto em evolução.**

A primeira versão foi desenvolvida com foco em simplicidade, organização e validação da ideia.

Novas funcionalidades poderão ser adicionadas conforme necessidades reais sejam identificadas durante sua utilização.
