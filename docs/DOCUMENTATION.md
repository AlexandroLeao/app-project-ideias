# 01 — Visão do Projeto

## 1. Identificação

**Nome do projeto:** Organizador de Ideias e Projetos

**Tipo:** Aplicação Web / Projeto Pessoal

**Objetivo:** Organização, acompanhamento e evolução de ideias, planos e projetos pessoais.

**Status:** Projeto desenvolvido e publicado.

**URL:** https://app-project-ideias.vercel.app/

---

## 2. Descrição

O Organizador de Ideias e Projetos é uma aplicação web criada para centralizar ideias, planos, estudos e projetos que, normalmente, poderiam ficar dispersos em anotações, aplicativos ou arquivos diferentes.

A proposta não é funcionar apenas como uma lista tradicional de tarefas. Cada ideia possui informações próprias, como título, categoria, descrição, prioridade, status, datas, favoritos e anexos, permitindo que uma ideia evolua de um registro inicial para um projeto acompanhado ao longo do tempo.

---

## 3. Objetivo do projeto

O objetivo principal é proporcionar uma forma simples e visual de:

- registrar novas ideias;
- organizar ideias por categoria;
- definir prioridades;
- acompanhar status;
- registrar informações e observações;
- estabelecer datas;
- marcar ideias como favoritas;
- adicionar arquivos de referência;
- consultar e editar cada ideia individualmente.

---

## 4. Escopo

O escopo atual contempla:

- criação de ideias;
- edição e exclusão;
- categorização;
- prioridades;
- status;
- datas de início e prazo;
- cálculo de prazo restante;
- favoritos;
- pesquisa e filtros;
- descrição e anotações;
- anexos;
- página individual de cada ideia;
- armazenamento local das ideias;
- armazenamento privado de anexos;
- interface responsiva;
- publicação da aplicação.

---

## 5. Princípio do projeto

A aplicação foi desenvolvida priorizando simplicidade de uso, resposta rápida e clareza visual.

# 02 — Problema e Objetivos

## 1. Problema identificado

O projeto surgiu a partir de uma necessidade pessoal de organizar diferentes ideias, projetos, estudos e planos.

Quando essas informações ficam distribuídas entre anotações, arquivos, aplicativos de mensagens ou simplesmente na memória, alguns problemas podem surgir:

- dificuldade para lembrar ideias antigas;
- falta de visão geral dos projetos;
- dificuldade para definir o que merece atenção primeiro;
- informações relacionadas ao mesmo projeto espalhadas;
- ausência de acompanhamento de evolução;
- perda de referências e arquivos;
- dificuldade para diferenciar ideias em diferentes estágios.

Uma lista de tarefas convencional também não atende completamente à necessidade, pois uma ideia pode existir por bastante tempo antes de se transformar em uma tarefa concreta.

---

## 2. Objetivo geral

Desenvolver uma aplicação web capaz de centralizar ideias e projetos em um único ambiente, permitindo registrar, organizar, priorizar, acompanhar e evoluir essas informações.

---

## 3. Objetivos específicos

A aplicação busca permitir:

1. Registrar uma nova ideia rapidamente.
2. Classificar ideias por categorias.
3. Definir prioridade.
4. Acompanhar o status de cada ideia.
5. Registrar descrições e observações.
6. Definir data de início e prazo.
7. Visualizar o tempo restante para um prazo.
8. Marcar ideias importantes como favoritas.
9. Pesquisar e filtrar ideias.
10. Adicionar arquivos relacionados.
11. Consultar uma página detalhada de cada ideia.
12. Editar informações posteriormente.
13. Excluir ideias que não sejam mais necessárias.
14. Disponibilizar a aplicação em ambiente publicado.

---

## 4. Critérios de sucesso

O projeto é considerado funcional quando permite ao usuário:

- criar uma ideia;
- visualizar a ideia criada;
- editar suas informações;
- alterar status e prioridade;
- utilizar categorias e filtros;
- definir datas;
- marcar como favorita;
- adicionar e consultar anexos;
- excluir uma ideia;
- utilizar a aplicação publicada.

- # 03 — Requisitos do Sistema

## 1. Requisitos Funcionais

### RF01 — Criar ideia
O sistema deve permitir o cadastro de uma nova ideia.

### RF02 — Informar título
Cada ideia deve possuir um título identificável.

### RF03 — Categorizar ideia
O usuário deve poder associar uma categoria à ideia.

### RF04 — Informar descrição
O sistema deve permitir registrar descrição, observações e informações adicionais.

### RF05 — Definir status
O usuário deve poder definir ou alterar o status da ideia.

### RF06 — Definir prioridade
O usuário deve poder definir prioridade:

- Alta;
- Média;
- Baixa.

### RF07 — Definir datas
O sistema deve permitir informar:

- data de início;
- prazo opcional.

### RF08 — Calcular prazo
Quando houver prazo definido, o sistema deve apresentar a quantidade de dias restantes.

### RF09 — Favoritar
O usuário deve poder marcar e desmarcar uma ideia como favorita.

### RF10 — Pesquisar e filtrar
O sistema deve permitir localizar ideias por pesquisa, favoritos e categorias.

### RF11 — Adicionar anexos
O usuário deve poder adicionar arquivos aos projetos.

Formatos suportados:

- PNG;
- JPEG;
- JFIF;
- PDF.

Tamanho máximo:

**10 MB por arquivo.**

### RF12 — Consultar detalhes
Cada ideia deve possuir uma página própria para consulta e edição.

### RF13 — Editar
O usuário deve poder alterar as informações cadastradas.

### RF14 — Excluir
O sistema deve permitir excluir uma ideia.

### RF15 — Visualizar e baixar anexos
Os anexos devem poder ser visualizados ou baixados quando aplicável.

---

# 2. Requisitos Não Funcionais

### RNF01 — Usabilidade
A interface deve ser simples, clara e intuitiva.

### RNF02 — Responsividade
A aplicação deve ser utilizável em diferentes tamanhos de tela.

### RNF03 — Desempenho
As operações relacionadas às ideias devem apresentar resposta rápida.

### RNF04 — Validação
Os dados de formulários e arquivos devem ser submetidos a validações.

### RNF05 — Segurança de arquivos
Os anexos não devem depender apenas da extensão do arquivo para validação.

### RNF06 — Manutenibilidade
A aplicação deve possuir uma estrutura organizada de componentes, rotas, estilos e funções.

### RNF07 — Disponibilidade
A aplicação deve permanecer acessível por meio de ambiente de publicação.

### RNF08 — Privacidade dos anexos
Os arquivos armazenados em nuvem devem utilizar armazenamento privado e mecanismos de acesso controlado.

---

# 3. Regras de negócio

### RN01 — Prioridade
Cada ideia deve possuir uma prioridade definida.

### RN02 — Prazo
O prazo é opcional.

### RN03 — Anexos
Arquivos devem respeitar os formatos e tamanho permitidos.

### RN04 — Validação do arquivo
A aplicação deve verificar o conteúdo real do arquivo, e não somente seu nome ou extensão.

### RN05 — Acesso aos anexos
Links para visualização de arquivos possuem validade limitada.

---

# 4. Evolução dos requisitos

O projeto foi desenvolvido de forma incremental.

O escopo inicial concentrou-se no cadastro e organização das ideias. Posteriormente foram incorporados recursos como:

- prioridade;
- datas;
- prazo;
- favoritos;
- filtros;
- anexos;
- página detalhada;
- refinamentos de interface.

- # 04 — Casos de Uso

## 1. Ator

**Usuário**

O usuário é responsável por criar, consultar, organizar, editar e excluir suas ideias e projetos.

---

## 2. UC01 — Criar ideia

**Objetivo:** Registrar uma nova ideia.

**Fluxo principal:**

1. Usuário acessa a aplicação.
2. Seleciona a opção de nova ideia.
3. Preenche os dados disponíveis.
4. Define categoria e prioridade.
5. Pode informar datas.
6. Pode adicionar anexos.
7. Confirma o cadastro.
8. O sistema registra a ideia.

**Resultado:** Nova ideia disponível no painel.

---

## 3. UC02 — Consultar ideias

**Objetivo:** Visualizar ideias cadastradas.

**Fluxo:**

1. Usuário acessa a página inicial.
2. O sistema apresenta as ideias.
3. Usuário pode pesquisar ou utilizar filtros.
4. Usuário seleciona uma ideia.
5. O sistema apresenta seus detalhes.

---

## 4. UC03 — Editar ideia

**Objetivo:** Alterar informações existentes.

1. Usuário abre uma ideia.
2. Altera os campos desejados.
3. Confirma as alterações.
4. O sistema atualiza os dados.

---

## 5. UC04 — Alterar status

O usuário pode modificar o estágio atual da ideia diretamente na página de detalhes.

---

## 6. UC05 — Alterar prioridade

O usuário pode definir ou modificar a prioridade entre:

- Alta;
- Média;
- Baixa.

---

## 7. UC06 — Favoritar ideia

O usuário pode marcar uma ideia como favorita por meio do ícone de estrela.

As ideias favoritas também podem ser filtradas.

---

## 8. UC07 — Adicionar anexo

1. Usuário seleciona um arquivo.
2. Sistema verifica formato e tamanho.
3. O conteúdo do arquivo é validado.
4. O arquivo é enviado para armazenamento privado.
5. O anexo passa a ficar associado à ideia.

---

## 9. UC08 — Excluir ideia

1. Usuário seleciona a opção de exclusão.
2. Sistema solicita confirmação quando aplicável.
3. A ideia é removida.

---

## 10. UC09 — Consultar anexo

O usuário pode acessar o anexo associado à ideia.

O acesso utiliza mecanismos de controle e links temporários.

# 05 — Modelagem do Sistema

## 1. Entidade principal

A aplicação trabalha conceitualmente com a entidade **Ideia/Projeto**.

Uma ideia possui informações destinadas a representar seu ciclo de organização e acompanhamento.

---

## 2. Estrutura conceitual

```text
IDEIA / PROJETO
│
├── id
├── título
├── categoria
├── status
├── prioridade
├── descrição / notas
├── data de início
├── prazo
├── favorito
└── anexos
```

---

## 3. Informações da ideia

### Identificação
- ID
- Título

### Organização
- Categoria
- Prioridade
- Favorito

### Acompanhamento
- Status
- Data de início
- Prazo

### Conteúdo
- Descrição
- Anotações

### Arquivos
- Anexos relacionados

---

## 4. Status

A aplicação trabalha com estados que representam a evolução da ideia.

Um fluxo conceitual pode ser representado por:

```text
Ideia
  ↓
Planejamento
  ↓
Em andamento
  ↓
Concluído
```

Também existe a possibilidade de manter uma ideia em estado de pausa quando necessário.

---

## 5. Separação entre dados e arquivos

Uma decisão importante da arquitetura foi não tratar todos os dados da mesma maneira.

### Dados das ideias

São armazenados no navegador utilizando **LocalStorage**.

### Arquivos

São armazenados no **Lovable Cloud**, utilizando armazenamento privado.

Essa separação permite utilizar o armazenamento local para os dados leves e uma solução específica de armazenamento para arquivos maiores.

---

## 6. Modelagem conceitual simplificada

```text
┌─────────────────────────┐
│     IDEIA / PROJETO     │
├─────────────────────────┤
│ id                      │
│ título                  │
│ categoria               │
│ status                  │
│ prioridade              │
│ descrição               │
│ data de início          │
│ prazo                   │
│ favorito                │
└────────────┬────────────┘
             │
             │ possui
             ▼
┌─────────────────────────┐
│         ANEXO           │
├─────────────────────────┤
│ arquivo                 │
│ validação               │
│ armazenamento privado   │
│ acesso temporário       │
└─────────────────────────┘
```

# 06 — Arquitetura do Sistema

## 1. Visão geral

A aplicação utiliza uma arquitetura híbrida.

Os dados principais das ideias são armazenados localmente no navegador, enquanto os arquivos anexados utilizam infraestrutura em nuvem.

A arquitetura foi escolhida para permitir utilização imediata sem exigir autenticação, sem abrir mão de uma solução mais adequada para armazenamento de arquivos.

---

## 2. Arquitetura conceitual

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
          DADOS DAS IDEIAS         ANEXOS
                 │                   │
                 ▼                   ▼
           LocalStorage        Lovable Cloud
                 │                   │
                 │             ┌─────┴─────┐
                 │             │           │
                 │             ▼           ▼
                 │       Cloud Storage  Server Functions
                 │
                 ▼
        useSyncExternalStore
                 │
                 ▼
      Sincronização entre
      componentes e abas
```

---

## 3. Camada de aplicação

A aplicação utiliza:

- React 19;
- TanStack Start;
- TanStack Router;
- Vite.

O TanStack Router utiliza rotas baseadas em arquivos e tipagem para navegação.

Principais rotas:

```text
src/routes/index.tsx
src/routes/ideia.$id.tsx
```

---

## 4. Armazenamento das ideias

As ideias utilizam LocalStorage.

O acesso é organizado pelo arquivo:

```text
src/lib/ideas.ts
```

A aplicação utiliza `useSyncExternalStore` para manter os componentes sincronizados com o armazenamento.

Isso permite que alterações realizadas na aplicação sejam refletidas sem necessidade de recarregar manualmente a página.

---

## 5. Armazenamento dos anexos

Os arquivos não são armazenados no LocalStorage.

Eles utilizam:

- Lovable Cloud;
- Cloud Storage;
- Server Functions.

A comunicação com operações de servidor utiliza `createServerFn`.

---

## 6. Justificativa arquitetural

A decisão de utilizar LocalStorage para as ideias está relacionada ao objetivo de permitir acesso imediato sem cadastro.

Para os anexos, essa estratégia não seria adequada devido às limitações de armazenamento do navegador.

Por isso, a aplicação utiliza uma arquitetura híbrida:

**LocalStorage → informações das ideias**

**Cloud Storage → arquivos**

Essa separação é uma decisão arquitetural baseada nas características de cada tipo de dado.

---

## 7. Componentização

A aplicação possui componentes específicos para responsabilidades da interface.

Exemplo:

```text
src/components/IdeaForm.tsx
```

Esse componente concentra a interação do formulário de criação/edição.

---

## 8. Organização das responsabilidades

```text
Interface
   ↓
Componentes React
   ↓
Rotas / lógica da aplicação
   ↓
┌───────────────────┐
│                   │
▼                   ▼
LocalStorage     Server Functions
                     │
                     ▼
                Cloud Storage
```

# 07 — UX/UI

## 1. Objetivo da interface

A interface foi projetada para tornar a organização das ideias rápida e visualmente compreensível.

O foco principal foi evitar uma interface excessivamente burocrática e facilitar a identificação do estado e importância de cada ideia.

---

## 2. Hierarquia visual

A página inicial utiliza como elemento central a ideia:

> “O que temos para hoje?”

Essa abordagem direciona a atenção para aquilo que está disponível no momento.

A ação de criação de uma nova ideia também recebeu destaque por meio do botão:

**+ Nova ideia**

---

## 3. Categorização visual

Cada categoria possui uma identificação visual própria.

As cores são aplicadas de maneira suave ao cartão da ideia.

A implementação utiliza `color-mix(in srgb, ...)` para produzir tonalidades suaves.

A escolha evita fundos excessivamente fortes e busca preservar a legibilidade.

---

## 4. Prioridade

As prioridades utilizam identificação visual:

- **Alta:** vermelho;
- **Média:** amarelo;
- **Baixa:** verde.

A prioridade aparece nos cartões e na página de detalhes.

---

## 5. Tipografia

O projeto utiliza:

**Bricolage Grotesque** para títulos.

**DM Sans** para textos e conteúdo.

A combinação foi utilizada para diferenciar títulos e informações sem comprometer a leitura.

---

## 6. Feedback visual

A interface utiliza elementos de feedback durante interações, incluindo:

- seleção de arquivos;
- animações;
- estados de botões;
- indicadores de prioridade;
- identificação de favoritos;
- informações de prazo.

---

## 7. Página de detalhes

Cada ideia possui uma página dedicada:

```text
/ideia/:id
```

Essa página permite visualizar e editar informações mais extensas sem sobrecarregar o painel principal.

---

## 8. Identidade visual

Foi criada uma identidade visual própria para o projeto, incluindo um favicon em pixel art representando uma lâmpada azul brilhante.

A escolha está relacionada diretamente ao conceito de ideias e criatividade.

# 08 — Desenvolvimento"}
# 08 — Desenvolvimento

## 1. Estratégia

O desenvolvimento foi realizado de forma incremental, partindo das necessidades principais e adicionando funcionalidades conforme o projeto evoluiu.

A implementação contou com assistência de ferramentas de IA/low-code, especialmente o Lovable.

Essa assistência não elimina as decisões de produto e engenharia envolvidas no projeto, que incluem definição do problema, requisitos, escopo, experiência de usuário, validação das funcionalidades e decisões sobre arquitetura.

---

## 2. Evolução funcional

A aplicação começou com o conceito central de registrar e organizar ideias.

Posteriormente foram adicionadas funcionalidades como:

- categorias;
- prioridades;
- datas;
- prazo;
- favoritos;
- filtros;
- anexos;
- página individual;
- melhorias de interface;
- validação de arquivos;
- armazenamento privado.

---

## 3. Formulários

A aplicação utiliza:

- React Hook Form;
- Zod.

O React Hook Form gerencia a interação dos formulários.

O Zod é utilizado para validação estruturada dos dados.

---

## 4. Validação

As validações abrangem informações como:

- limites de caracteres;
- regras de datas;
- formatos de arquivo;
- tamanho dos arquivos.

As validações relacionadas aos arquivos também consideram operações no lado do servidor.

---

## 5. Datas

O projeto utiliza:

- date-fns;
- react-day-picker.

As datas são apresentadas considerando o idioma/região brasileira (`pt-BR`).

---

## 6. Interface

A interface utiliza:

- Tailwind CSS v4;
- Radix UI;
- shadcn/ui;
- Lucide React.

Radix UI e shadcn/ui fornecem componentes e primitivas reutilizáveis, incluindo elementos como diálogos, dropdowns, popovers e tooltips.

---

## 7. Arquivos principais

```text
src/
├── routes/
│   ├── index.tsx
│   └── ideia.$id.tsx
│
├── lib/
│   ├── ideas.ts
│   ├── attachments.ts
│   └── attachments.functions.ts
│
├── components/
│   └── IdeaForm.tsx
│
└── styles.css
```

---

## 8. Desenvolvimento assistido por IA

O projeto foi desenvolvido com assistência de IA/low-code.

A utilização dessa abordagem foi tratada como uma ferramenta de desenvolvimento, enquanto as decisões sobre:

- problema;
- funcionalidades;
- requisitos;
- interface;
- organização;
- escopo;
- validação;
- publicação;
- documentação

fazem parte do processo de desenvolvimento do projeto.

A documentação deve deixar essa participação explícita para manter uma apresentação profissional e transparente.

Uma das principais decisões foi permitir que o usuário comece a utilizar a aplicação sem necessidade de cadastro ou autenticação. Para isso, os dados das ideias são armazenados localmente no navegador, enquanto os arquivos anexados utilizam uma estrutura de armazenamento em nuvem separada.

# 09 — Segurança

## 1. Objetivo

A segurança do projeto está principalmente relacionada à validação e ao controle de acesso aos arquivos enviados pelo usuário.

Como a aplicação atualmente não exige autenticação para utilização, a arquitetura não deve ser apresentada como um sistema multiusuário com controle de identidade.

---

## 2. Validação de arquivos

A aplicação não confia somente na extensão do arquivo.

É realizada validação por **Magic Bytes**, verificando os primeiros bytes do conteúdo para identificar se o arquivo realmente corresponde ao formato esperado.

São considerados formatos como:

- PNG;
- JPEG/JFIF;
- PDF.

Essa abordagem reduz o risco de aceitar arquivos cujo conteúdo não corresponde à extensão informada.

---

## 3. Limite de tamanho

Os anexos possuem limite máximo de:

**10 MB.**

Essa regra evita o envio de arquivos excessivamente grandes.

---

## 4. Armazenamento privado

Os anexos são armazenados em ambiente privado do Lovable Cloud.

Eles não dependem de uma URL pública permanente.

---

## 5. Tokens criptográficos

Cada anexo utiliza um identificador/token criptográfico de 256 bits.

Esse mecanismo dificulta a descoberta de referências válidas aos arquivos.

---

## 6. URLs assinadas

O acesso aos arquivos utiliza links assinados.

Esses links possuem expiração automática após aproximadamente:

**5 minutos.**

Dessa maneira, o acesso ao arquivo não permanece indefinidamente disponível por meio do mesmo link.

---

## 7. Validação dos dados

Os formulários utilizam Zod para validação estruturada.

As validações relacionadas aos arquivos também são aplicadas nas operações de servidor.

---

## 8. Limitação atual

Como as ideias são armazenadas localmente e não existe autenticação de usuários, a aplicação atual não deve ser considerada um sistema multiusuário completo.

Essa limitação é conhecida e faz parte da arquitetura atual.

Uma futura evolução poderá incluir autenticação e armazenamento centralizado das ideias.

# 10 — Testes"}

# 10 — Testes

## 1. Objetivo

Os testes têm como objetivo verificar se as principais funcionalidades funcionam de acordo com os requisitos definidos.

É importante diferenciar:

- **casos de teste definidos para validação**;
- **testes efetivamente executados e registrados**.

A documentação não deve considerar um teste como executado apenas porque foi planejado.

---

## 2. Testes funcionais previstos

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT01 | Criar ideia | Ideia cadastrada |
| CT02 | Editar ideia | Informações atualizadas |
| CT03 | Alterar status | Novo status apresentado |
| CT04 | Alterar prioridade | Nova prioridade apresentada |
| CT05 | Definir data | Data registrada |
| CT06 | Definir prazo | Prazo calculado |
| CT07 | Favoritar | Ideia aparece como favorita |
| CT08 | Filtrar favoritos | Apenas favoritas apresentadas |
| CT09 | Filtrar categoria | Categoria selecionada apresentada |
| CT10 | Pesquisar ideia | Resultado correspondente apresentado |
| CT11 | Adicionar PNG | Arquivo aceito |
| CT12 | Adicionar JPEG/JFIF | Arquivo aceito |
| CT13 | Adicionar PDF | Arquivo aceito |
| CT14 | Arquivo acima de 10 MB | Arquivo rejeitado |
| CT15 | Formato inválido | Arquivo rejeitado |
| CT16 | Visualizar anexo | Arquivo acessível |
| CT17 | Excluir ideia | Ideia removida |
| CT18 | Abrir página de detalhes | Dados corretos apresentados |

---

## 3. Testes de interface

Devem ser observados:

- funcionamento dos botões;
- abertura e fechamento de diálogos;
- comportamento do formulário;
- seleção de prioridade;
- seleção de categorias;
- favoritos;
- feedback de anexos;
- navegação entre páginas;
- comportamento responsivo.

---

## 4. Testes de armazenamento

É importante verificar:

1. criação da ideia;
2. atualização;
3. consulta;
4. persistência no navegador;
5. sincronização entre componentes;
6. comportamento entre abas.

---

## 5. Testes de segurança dos anexos

Os principais cenários são:

- arquivo válido;
- extensão incompatível com o conteúdo;
- arquivo inválido;
- arquivo acima do limite;
- tentativa de acesso ao arquivo por link expirado.

---

## 6. Teste em produção

Como a aplicação está publicada, também é relevante realizar testes utilizando a versão disponível em:

https://app-project-ideias.vercel.app/

Esses testes devem validar o comportamento da aplicação fora do ambiente de desenvolvimento.

---

## 7. Registro dos testes

Para uma evolução futura do projeto, recomenda-se registrar:

- data;
- versão;
- cenário;
- resultado;
- comportamento encontrado;
- correção aplicada.

Isso permite transformar testes manuais em histórico de qualidade do projeto.

# 11 — Versionamento

## 1. Repositório

O projeto utiliza Git e GitHub para versionamento e armazenamento do código-fonte.

O versionamento permite acompanhar a evolução da aplicação e manter histórico das alterações.

---

## 2. Objetivos do versionamento

O uso do Git permite:

- registrar alterações;
- recuperar versões anteriores;
- acompanhar evolução;
- organizar modificações;
- manter o código disponível remotamente;
- integrar o desenvolvimento ao processo de publicação.

---

## 3. Fluxo conceitual

```text
Alteração
   ↓
Desenvolvimento
   ↓
Validação
   ↓
Commit
   ↓
GitHub
   ↓
Publicação
```

---

## 4. Boas práticas

Como evolução do projeto, recomenda-se utilizar mensagens de commit claras e relacionadas à alteração realizada.

Exemplos:

```text
feat: adicionar sistema de favoritos
fix: corrigir cálculo de prazo
feat: adicionar suporte a anexos
style: ajustar identidade visual
docs: atualizar documentação
```

Esses exemplos representam uma recomendação de organização e não devem ser tratados como histórico real caso determinada convenção não tenha sido utilizada durante o desenvolvimento.

---

## 5. Repositório como documentação

Além de armazenar o código, o GitHub funciona como parte da apresentação técnica do projeto, reunindo:

- código;
- README;
- documentação;
- histórico de alterações;
- informações técnicas.

- # 12 — Deploy e Publicação

## 1. Publicação

A aplicação foi publicada utilizando a infraestrutura de publicação associada ao projeto, com disponibilidade por meio da Vercel.

**Aplicação:**

https://app-project-ideias.vercel.app/

---

## 2. Serviços utilizados

É importante separar os serviços conforme sua responsabilidade.

### Vercel

Responsável pela disponibilização/publicação da aplicação web.

### Lovable Cloud

Utilizado para recursos relacionados aos anexos e operações de servidor.

Inclui:

- Cloud Storage;
- Server Functions.

---

## 3. Arquitetura de publicação

A visão simplificada é:

```text
                    USUÁRIO
                       │
                       ▼
               Aplicação publicada
                    Vercel
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
   Dados locais                 Anexos
   LocalStorage             Lovable Cloud
                                    │
                           ┌────────┴────────┐
                           ▼                 ▼
                    Cloud Storage     Server Functions
```

---

## 4. Homologação

Antes de considerar uma alteração concluída, recomenda-se verificar:

- criação de ideias;
- edição;
- filtros;
- favoritos;
- datas;
- anexos;
- exclusão;
- navegação;
- comportamento responsivo.

---

## 5. Produção

Após a publicação, a versão disponível no endereço da aplicação representa o ambiente de produção do projeto.

Alterações futuras devem ser validadas antes de serem consideradas estáveis.

# 13 — Resultados do Projeto

## 1. Resultado funcional

O projeto resultou em uma aplicação web funcional para organização de ideias e projetos.

A aplicação permite centralizar informações que anteriormente poderiam estar espalhadas em diferentes locais.

---

## 2. Funcionalidades implementadas

Entre as principais funcionalidades estão:

- criação de ideias;
- edição;
- exclusão;
- categorias;
- prioridades;
- status;
- datas;
- cálculo de prazo;
- favoritos;
- pesquisa;
- filtros;
- descrição e anotações;
- anexos;
- página individual;
- visualização de arquivos;
- interface responsiva.

---

## 3. Resultado técnico

O projeto também permitiu aplicar conceitos relacionados a:

- React;
- arquitetura de aplicações web;
- roteamento;
- componentização;
- gerenciamento de estado;
- armazenamento local;
- armazenamento em nuvem;
- funções de servidor;
- validação de dados;
- validação de arquivos;
- segurança;
- UX/UI;
- Git/GitHub;
- publicação de aplicações.

---

## 4. Resultado de Engenharia de Software

Além do resultado visual, o projeto passou a ser estruturado considerando um processo de engenharia:

```text
Problema
   ↓
Objetivos
   ↓
Requisitos
   ↓
Casos de uso
   ↓
Modelagem
   ↓
Arquitetura
   ↓
UX/UI
   ↓
Desenvolvimento
   ↓
Segurança
   ↓
Testes
   ↓
Versionamento
   ↓
Deploy
   ↓
Evolução
```

Essa estrutura transforma o projeto de uma simples aplicação desenvolvida para demonstração em um caso de estudo de desenvolvimento de software.

---

## 5. Resultado profissional

O projeto demonstra capacidade de participar de um processo de desenvolvimento envolvendo:

- identificação de problema;
- definição de requisitos;
- tomada de decisões técnicas;
- construção de interface;
- organização de código;
- validação;
- preocupação com segurança;
- versionamento;
- publicação;
- documentação;
- planejamento de evolução.

- # 14 — Limitações do Projeto

## 1. Armazenamento local das ideias

Atualmente, as informações principais das ideias são armazenadas no LocalStorage do navegador.

Isso significa que os dados não constituem uma base de dados centralizada acessível de qualquer dispositivo.

---

## 2. Ausência de autenticação

A aplicação não possui atualmente um sistema completo de:

- cadastro;
- login;
- senha;
- recuperação de conta;
- controle de identidade.

Essa decisão está relacionada ao objetivo de permitir utilização imediata sem barreira de autenticação.

---

## 3. Ausência de sincronização entre dispositivos

Como os dados das ideias são armazenados localmente, uma ideia criada em um dispositivo não é automaticamente disponibilizada em outro.

---

## 4. Escalabilidade limitada para dados das ideias

O armazenamento local atende ao objetivo atual do projeto, mas não é a melhor solução para uma aplicação que futuramente precise suportar:

- muitos usuários;
- grande volume de dados;
- colaboração;
- sincronização;
- histórico centralizado.

---

## 5. Dependência de serviços externos

Os anexos dependem do Lovable Cloud para armazenamento e operações relacionadas.

A aplicação publicada também depende da infraestrutura utilizada para hospedagem.

---

## 6. Escopo atual

O projeto é voltado para uso pessoal e não foi projetado atualmente como uma plataforma colaborativa.

Por isso, funcionalidades como:

- compartilhamento;
- colaboração em tempo real;
- múltiplos usuários;
- permissões;
- equipes;
- auditoria

não fazem parte do escopo atual.

---

## 7. Natureza do projeto

O projeto foi desenvolvido como projeto pessoal e de portfólio.

Ele não deve ser apresentado como um sistema corporativo de larga escala.

Suas decisões arquiteturais devem ser avaliadas dentro do contexto do problema que pretende resolver.

# 15 — Evolução e Roadmap

## 1. Objetivo

O roadmap representa possíveis evoluções do projeto a partir das limitações e necessidades identificadas na versão atual.

As funcionalidades abaixo são propostas de evolução e não devem ser apresentadas como funcionalidades já implementadas.

---

## 2. Curto prazo

### Organização

- [ ] adicionar tags;
- [ ] ampliar filtros;
- [ ] melhorar pesquisa;
- [ ] permitir ordenação personalizada;
- [ ] criar filtros combinados.

### Experiência

- [ ] melhorar feedback das ações;
- [ ] aprimorar responsividade;
- [ ] adicionar mais estados visuais;
- [ ] melhorar acessibilidade.

---

## 3. Médio prazo

### Persistência centralizada

Evoluir o armazenamento das ideias para uma base de dados centralizada.

Arquitetura futura:

```text
Usuário
   ↓
Frontend
   ↓
Backend / API
   ↓
Banco de dados
```

Isso permitiria:

- sincronização entre dispositivos;
- persistência centralizada;
- histórico;
- autenticação;
- maior capacidade de crescimento.

---

## 4. Autenticação

Adicionar:

- cadastro;
- login;
- recuperação de acesso;
- sessão de usuário;
- controle de propriedade das ideias.

---

## 5. Sincronização

Com autenticação e banco centralizado, as ideias poderiam ser sincronizadas entre:

- computador;
- celular;
- outros dispositivos.

---

## 6. Gestão avançada

Possíveis funcionalidades:

- subtarefas;
- checklist;
- comentários;
- histórico de alterações;
- atividades;
- etiquetas;
- arquivamento;
- projetos relacionados.

---

## 7. Automação

Possíveis automações futuras:

- lembretes;
- notificações de prazo;
- criação automática de tarefas;
- acompanhamento de projetos parados;
- resumos periódicos.

---

## 8. Inteligência Artificial

Uma futura integração com IA poderia permitir:

- transformar uma ideia em plano de ação;
- sugerir tarefas;
- resumir anotações;
- identificar prioridades;
- sugerir categorias;
- gerar checklists;
- identificar projetos semelhantes.

---

## 9. Evolução arquitetural

A arquitetura poderia evoluir de:

```text
VERSÃO ATUAL

Frontend
 ├── LocalStorage → ideias
 └── Lovable Cloud → anexos
```

para:

```text
VERSÃO FUTURA

Frontend
      │
      ▼
Backend / API
      │
 ┌────┴─────┐
 ▼          ▼
Banco      Storage
de dados   de arquivos
      │
      ▼
Autenticação
```

---

## 10. Visão de longo prazo

O projeto pode evoluir de um organizador pessoal para uma plataforma completa de gestão de ideias e projetos.

Entretanto, essa evolução deve ocorrer conforme surgir necessidade real, evitando adicionar complexidade sem benefício correspondente.

A principal premissa do roadmap é:

**evoluir a arquitetura conforme os requisitos evoluem.**

# 16 — Stack Tecnológica e Estrutura do Projeto

## 1. Stack

### Framework

**TanStack Start v1**

Framework full-stack utilizado sobre React 19, oferecendo recursos de aplicação web moderna, SSR/Edge e roteamento tipado.

### Frontend

**React 19**

Utilizado para construção da interface e componentes da aplicação.

### Build

**Vite 7**

Responsável pelo processo de desenvolvimento e build da aplicação.

### Roteamento

**TanStack Router**

Utiliza roteamento baseado em arquivos e tipagem.

Principais rotas:

```text
src/routes/index.tsx
src/routes/ideia.$id.tsx
```

### Estilização

**Tailwind CSS v4**

Utilizado para construção da interface.

O projeto também utiliza variáveis de cor em OKLCH.

### Componentes

**Radix UI + shadcn/ui**

Utilizados como base para componentes e primitivas acessíveis.

### Formulários

**React Hook Form**

Utilizado no gerenciamento de formulários.

### Validação

**Zod**

Utilizado para validação estruturada dos dados.

### Datas

**date-fns + react-day-picker**

Utilizados para manipulação e seleção de datas.

### Ícones

**Lucide React**

Utilizado para os ícones da interface.

---

# 2. Armazenamento

## LocalStorage

Utilizado para os dados principais das ideias.

A aplicação utiliza `useSyncExternalStore` para integrar o armazenamento ao estado observado pelos componentes.

---

## Lovable Cloud

Utilizado para funcionalidades relacionadas aos anexos.

Inclui:

- Cloud Storage;
- Server Functions.

---

# 3. Principais arquivos

```text
src/
│
├── routes/
│   ├── index.tsx
│   └── ideia.$id.tsx
│
├── lib/
│   ├── ideas.ts
│   ├── attachments.ts
│   └── attachments.functions.ts
│
├── components/
│   └── IdeaForm.tsx
│
└── styles.css
```

---

# 4. Responsabilidade dos arquivos

### `src/routes/index.tsx`

Responsável pela página inicial.

Concentra recursos como:

- pesquisa;
- filtros;
- favoritos;
- categorias;
- listagem;
- criação de ideias.

### `src/routes/ideia.$id.tsx`

Responsável pela página individual da ideia.

Inclui:

- detalhes;
- edição;
- status;
- notas;
- anexos;
- exclusão.

### `src/lib/ideas.ts`

Concentra a lógica relacionada às ideias, incluindo:

- armazenamento;
- categorias;
- prioridades;
- regras de prazo.

### `src/lib/attachments.ts`

Responsável por funcionalidades relacionadas aos anexos no lado da aplicação.

### `src/lib/attachments.functions.ts`

Concentra operações relacionadas aos anexos executadas por funções de servidor.

### `src/components/IdeaForm.tsx`

Componente responsável pelo formulário de criação/edição.

### `src/styles.css`

Concentra estilos globais, identidade visual, tipografia e classes relacionadas aos efeitos visuais.

---

# 5. Matriz de decisões técnicas

| Necessidade | Decisão | Tecnologia |
|---|---|---|
| Acesso imediato | Não exigir login inicialmente | LocalStorage |
| Armazenar ideias | Persistência local | LocalStorage |
| Atualização reativa | Sincronização de armazenamento | `useSyncExternalStore` |
| Armazenar arquivos | Utilizar armazenamento específico | Lovable Cloud |
| Arquivos privados | Storage privado | Cloud Storage |
| Operações de servidor | Processamento controlado | Server Functions |
| Validar dados | Schema estruturado | Zod |
| Gerenciar formulários | Estado/validação de formulário | React Hook Form |
| Validar arquivos | Verificar conteúdo real | Magic Bytes |
| Proteger acesso aos arquivos | URLs temporárias | Signed URLs |
| Limitar arquivos | Controle de tamanho | 10 MB |
| Navegação tipada | Rotas estruturadas | TanStack Router |
| Interface | Estilização utilitária | Tailwind CSS |
| Componentes acessíveis | Primitivas reutilizáveis | Radix UI / shadcn/ui |
| Datas | Manipulação de datas | date-fns |
| Seleção de datas | Componente de calendário | react-day-picker |
| Ícones | Biblioteca de ícones | Lucide React |

---

# 6. Decisões arquiteturais

As principais decisões do projeto podem ser resumidas em:

### Decisão 1 — LocalStorage para ideias

**Problema:** necessidade de utilização rápida sem login.

**Decisão:** armazenar as ideias localmente.

**Resultado:** aplicação pode ser utilizada imediatamente sem depender de autenticação ou de uma requisição de rede para carregar os dados principais.

---

### Decisão 2 — Cloud Storage para anexos

**Problema:** arquivos como PDFs e imagens não são adequados para serem armazenados indefinidamente no LocalStorage.

**Decisão:** utilizar armazenamento privado em nuvem.

**Resultado:** os arquivos possuem uma infraestrutura própria de armazenamento.

---

### Decisão 3 — Magic Bytes

**Problema:** uma extensão de arquivo pode ser alterada sem modificar o conteúdo real.

**Decisão:** verificar os primeiros bytes do arquivo.

**Resultado:** a aplicação não depende exclusivamente da extensão informada pelo usuário.

---

### Decisão 4 — URLs assinadas

**Problema:** disponibilizar arquivos privados sem manter um link público permanente.

**Decisão:** utilizar URLs assinadas com expiração.

**Resultado:** o acesso ao arquivo é temporário.

---

### Decisão 5 — Interface visual por categorias

**Problema:** identificar rapidamente diferentes tipos de ideias.

**Decisão:** utilizar tonalidades associadas às categorias.

**Resultado:** maior diferenciação visual sem utilizar fundos excessivamente fortes.

---

# 7. Resumo técnico

O projeto combina uma aplicação React moderna com armazenamento local e serviços de nuvem.

Sua característica arquitetural principal é a separação entre:

```text
DADOS DE NEGÓCIO DA IDEIA
          ↓
     LocalStorage


ARQUIVOS / ANEXOS
          ↓
     Lovable Cloud
          ↓
 ┌────────┴────────┐
 ▼                 ▼
Storage       Server Functions
```

Essa arquitetura foi escolhida para atender às necessidades atuais do projeto sem introduzir autenticação e banco de dados centralizado antes que esses recursos fossem necessários.
