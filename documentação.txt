/
├── README.md
│
└── docs/
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
    └── 15-roadmap.md

# 1. Visão do Projeto

## 1.1 Nome

**Organizador de Ideias e Projetos**

## 1.2 Descrição

O Organizador de Ideias e Projetos é uma aplicação web desenvolvida para centralizar e organizar ideias, projetos, estudos, planejamentos e outros assuntos pessoais em um único ambiente.

A aplicação foi concebida a partir de uma necessidade real: evitar que diferentes ideias e projetos fiquem dispersos, dificultando a definição de prioridades e o acompanhamento da evolução de cada iniciativa.

## 1.3 Propósito

O propósito principal da aplicação é oferecer uma forma simples e intuitiva de registrar uma ideia e acompanhar sua evolução ao longo do tempo.

A proposta não é funcionar apenas como uma lista de tarefas, mas como um espaço para registrar o contexto de uma ideia, seus objetivos, planejamento e informações relacionadas.

## 1.4 Público-alvo

Inicialmente, a aplicação foi projetada para uso pessoal, podendo posteriormente ser adaptada para outros usuários que necessitem organizar ideias e projetos.

## 1.5 Escopo atual

A versão atual permite:

- cadastrar ideias e projetos;
- definir título;
- classificar por categoria;
- definir status;
- definir prioridade;
- adicionar descrição;
- registrar data de início;
- definir prazo opcional;
- marcar itens como favoritos;
- anexar arquivos;
- visualizar e organizar os registros.

## 1.6 Persistência

Os dados da aplicação são armazenados localmente no navegador por meio de **LocalStorage**.

Essa abordagem foi adotada para manter o projeto simples e adequado ao escopo inicial, sem necessidade de backend ou banco de dados externo.

## 1.7 Desenvolvimento

O projeto foi desenvolvido com auxílio de uma ferramenta de desenvolvimento assistido por IA/low-code.

A participação no desenvolvimento envolveu principalmente a definição do problema, levantamento e evolução dos requisitos, decisões de escopo, definição das funcionalidades, decisões de UX/UI, validação do comportamento da aplicação, documentação, versionamento e publicação.

## 1.8 Publicação

O projeto foi versionado no GitHub e disponibilizado para acesso por meio da Vercel.

## 1.9 Status

**Concluído — versão inicial publicada.**

O projeto permanece preparado para futuras evoluções, principalmente relacionadas a automações, recursos de inteligência artificial e persistência em backend.

# 2. Problema e Objetivos

## 2.1 Problema

Durante a organização de atividades pessoais, estudos e projetos, diferentes ideias podem surgir simultaneamente. Quando essas informações ficam distribuídas entre anotações, aplicativos e outros meios, torna-se mais difícil saber:

- quais ideias existem;
- quais são prioritárias;
- quais estão sendo desenvolvidas;
- quais foram pausadas;
- quais possuem prazo;
- qual é o objetivo de cada projeto;
- quais ideias podem ser retomadas posteriormente.

Além disso, uma lista de tarefas tradicional não atende completamente à necessidade, pois muitas ideias não são tarefas isoladas. Elas possuem contexto, objetivos, planejamento e podem evoluir durante um período maior.

## 2.2 Necessidade identificada

Foi identificada a necessidade de criar uma ferramenta capaz de registrar uma ideia desde seu surgimento e acompanhar sua evolução sem exigir uma estrutura complexa.

## 2.3 Objetivo geral

Desenvolver uma aplicação web simples e intuitiva para centralizar, organizar e acompanhar ideias e projetos.

## 2.4 Objetivos específicos

- centralizar diferentes tipos de ideias em um único local;
- permitir classificação por categorias;
- permitir acompanhamento por status;
- possibilitar definição de prioridade;
- permitir registro de datas;
- permitir definição de prazo;
- possibilitar marcação de itens importantes como favoritos;
- permitir armazenamento de informações descritivas;
- permitir anexos relacionados à ideia;
- manter os dados disponíveis no navegador;
- disponibilizar a aplicação online.

## 2.5 Critérios de sucesso

O projeto é considerado funcional quando o usuário consegue:

1. criar uma nova ideia;
2. preencher suas principais informações;
3. visualizar a ideia posteriormente;
4. alterar seu status;
5. definir ou alterar sua prioridade;
6. acompanhar informações de prazo;
7. identificar itens favoritos;
8. editar ou remover registros;
9. utilizar a aplicação após recarregar a página;
10. acessar a aplicação por meio do ambiente publicado.

# 3. Requisitos de Software

## 3.1 Requisitos Funcionais

### RF01 — Cadastro de ideia

O sistema deve permitir o cadastro de uma nova ideia ou projeto.

### RF02 — Título

O sistema deve permitir informar um título para cada registro.

### RF03 — Categoria

O sistema deve permitir classificar o registro em categorias.

Categorias disponíveis:

- Ideias
- Programação
- Estudos
- Carreira
- Projetos
- Financeiro
- Pessoal
- Hobby
- Saúde
- Outros

### RF04 — Status

O sistema deve permitir definir o estado atual do registro.

Status disponíveis:

- Ideia
- Planejando
- Em andamento
- Concluído
- Pausado

### RF05 — Descrição

O sistema deve permitir adicionar informações descritivas relacionadas à ideia ou projeto.

### RF06 — Prioridade

O sistema deve permitir definir o nível de prioridade:

- Alta
- Média
- Baixa

### RF07 — Data de início

O sistema deve permitir registrar uma data de início para o projeto ou ideia.

### RF08 — Prazo

O sistema deve permitir informar um prazo opcional para conclusão.

### RF09 — Favoritos

O sistema deve permitir marcar e desmarcar registros como favoritos.

### RF10 — Anexos

O sistema deve permitir adicionar arquivos associados ao registro, respeitando os formatos e limites definidos pela aplicação.

Formatos previstos:

- PNG
- JFIF
- PDF

Limite:

- 10 MB por arquivo.

### RF11 — Persistência

O sistema deve manter os dados registrados no navegador utilizando armazenamento local.

### RF12 — Edição

O sistema deve permitir alterar informações de um registro existente.

### RF13 — Exclusão

O sistema deve permitir remover um registro existente.

---

# 3.2 Requisitos Não Funcionais

### RNF01 — Usabilidade

A interface deve ser simples e intuitiva, permitindo que o usuário compreenda as principais ações sem necessidade de treinamento.

### RNF02 — Responsividade

A aplicação deve apresentar uma interface adequada aos diferentes tamanhos de tela suportados.

### RNF03 — Persistência local

Os dados devem permanecer disponíveis após o recarregamento da página, desde que o armazenamento local do navegador não seja removido.

### RNF04 — Segurança

A aplicação deve realizar validações básicas das entradas fornecidas pelo usuário e dos arquivos anexados.

### RNF05 — Desempenho

As operações principais devem apresentar resposta adequada para a quantidade de dados esperada no escopo inicial.

### RNF06 — Manutenibilidade

A estrutura do projeto deve permitir futuras alterações e inclusão de novas funcionalidades.

### RNF07 — Disponibilidade

A aplicação deve estar disponível por meio de uma URL pública após o processo de publicação.

---

# 3.3 Evolução dos requisitos

Os requisitos foram definidos e refinados de maneira incremental.

A primeira versão concentrava-se nas informações essenciais de uma ideia:

**título → categoria → status → descrição → anexo**

Durante a evolução do projeto, foram identificadas novas necessidades de organização:

**prioridade → data de início → prazo → favoritos**

Essa evolução representa uma abordagem incremental, na qual as funcionalidades são adicionadas conforme novas necessidades são identificadas durante a utilização e validação do produto.

# 4. Casos de Uso

## 4.1 Ator

### Usuário

O usuário é o principal ator da aplicação e possui acesso às funcionalidades de criação, consulta, edição, organização e exclusão de ideias e projetos.

---

## UC01 — Criar ideia/projeto

**Ator:** Usuário

**Objetivo:** Registrar uma nova ideia ou projeto.

**Fluxo principal:**

1. O usuário acessa a funcionalidade de criação.
2. Informa o título.
3. Seleciona a categoria.
4. Define o status.
5. Informa a descrição.
6. Define a prioridade.
7. Informa a data de início, quando aplicável.
8. Informa um prazo, quando aplicável.
9. Adiciona um anexo, quando necessário.
10. Confirma o cadastro.
11. O sistema registra as informações.

---

## UC02 — Consultar ideias/projetos

**Ator:** Usuário

**Objetivo:** Visualizar os registros cadastrados.

**Fluxo principal:**

1. O usuário acessa a aplicação.
2. O sistema apresenta os registros existentes.
3. O usuário consulta as informações disponíveis.

---

## UC03 — Editar ideia/projeto

**Ator:** Usuário

**Objetivo:** Atualizar um registro existente.

**Fluxo principal:**

1. O usuário seleciona um registro.
2. Solicita a edição.
3. Altera as informações desejadas.
4. Confirma a alteração.
5. O sistema atualiza o registro.

---

## UC04 — Alterar status

**Ator:** Usuário

**Objetivo:** Atualizar a situação de uma ideia ou projeto.

Exemplos:

**Ideia → Planejando → Em andamento → Concluído**

Também é possível utilizar o status **Pausado** quando o desenvolvimento for interrompido temporariamente.

---

## UC05 — Definir prioridade

**Ator:** Usuário

**Objetivo:** Identificar o nível de importância de uma ideia.

O usuário pode selecionar:

- Alta;
- Média;
- Baixa.

---

## UC06 — Favoritar registro

**Ator:** Usuário

**Objetivo:** Destacar ideias consideradas importantes.

O usuário pode marcar ou remover a marcação de favorito.

---

## UC07 — Adicionar anexo

**Ator:** Usuário

**Objetivo:** Associar um arquivo a uma ideia ou projeto.

O sistema deve validar o tipo e o tamanho do arquivo conforme as regras estabelecidas.

---

## UC08 — Excluir registro

**Ator:** Usuário

**Objetivo:** Remover uma ideia ou projeto que não seja mais necessário.

O sistema remove o registro após a confirmação da operação.

---

# 4.2 Relação entre casos de uso

                    ┌──────────────────────────┐
                    │          Usuário          │
                    └────────────┬─────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
       Criar registro      Consultar registro    Editar registro
              │                                     │
              ├──────────────┐             ┌────────┼────────┐
              ▼              ▼             ▼        ▼        ▼
         Definir        Adicionar       Status  Prioridade Favorito
        informações      anexo
              │
              ▼
        Excluir registro

O diagrama representa as principais interações do usuário com o sistema.

# 5. Modelagem do Sistema

## 5.1 Objetivo da modelagem

A modelagem foi utilizada para representar o funcionamento da aplicação antes e durante o desenvolvimento, facilitando a compreensão dos requisitos, das interações do usuário e da estrutura das informações.

Por se tratar de uma aplicação de pequeno porte e uso pessoal, a modelagem foi mantida proporcional ao escopo do projeto.

## 5.2 Entidade principal

A aplicação possui como elemento central o conceito de **Ideia/Projeto**.

Cada registro representa uma ideia ou projeto que pode ser acompanhado ao longo de sua evolução.

### Estrutura conceitual

```text
Ideia/Projeto
│
├── Título
├── Categoria
├── Status
├── Prioridade
├── Descrição
├── Data de início
├── Prazo
├── Favorito
└── Anexo
```

## 5.3 Modelo conceitual

```text
┌─────────────────────────────┐
│       IDEIA / PROJETO       │
├─────────────────────────────┤
│ id                          │
│ título                      │
│ categoria                   │
│ status                      │
│ prioridade                  │
│ descrição                   │
│ dataInicio                  │
│ prazo                       │
│ favorito                    │
│ anexo                       │
└─────────────────────────────┘
```

## 5.4 Fluxo principal

```text
              ┌───────────────┐
              │    Usuário    │
              └───────┬───────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Abrir aplicação │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Criar/selecionar│
             │    registro     │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Inserir/editar  │
             │   informações   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Validar dados   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Salvar registro │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Atualizar visão │
             └─────────────────┘


## 5.5 Estados do projeto

O atributo de status representa o estágio atual da ideia:

Ideia
  │
  ▼
Planejando
  │
  ▼
Em andamento
  │
  ▼
Concluído

Pausado
  ▲
  │
  └────── Pode ocorrer durante o desenvolvimento

A transição entre estados é controlada pelo usuário conforme a evolução real do projeto.

# 6. Arquitetura e Decisões Técnicas

## 6.1 Visão arquitetural

A versão atual da aplicação utiliza uma arquitetura simplificada, adequada ao escopo de uma aplicação pessoal.

O processamento ocorre no ambiente do navegador, sem comunicação com um servidor próprio ou banco de dados remoto.

```text
┌─────────────────────────────┐
│          Usuário            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Interface Web         │
│      Aplicação Front-end    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       Regras da aplicação   │
│       e gerenciamento       │
│          dos dados          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│        LocalStorage         │
│    Persistência local       │
└─────────────────────────────┘
```

## 6.2 Persistência local

O projeto utiliza o **LocalStorage** para manter os dados no navegador.

Essa decisão foi tomada considerando o objetivo da primeira versão:

- uso pessoal;
- baixo volume esperado de informações;
- ausência de necessidade de autenticação;
- ausência de necessidade de compartilhamento entre usuários;
- simplicidade de implementação;
- redução da infraestrutura necessária.

## 6.3 Justificativa da decisão

A utilização de um banco de dados remoto neste momento adicionaria complexidade sem resolver uma necessidade existente no escopo inicial.

A arquitetura pode posteriormente ser modificada caso surjam requisitos como:

- acesso em diferentes dispositivos;
- sincronização de dados;
- autenticação;
- compartilhamento;
- backup remoto;
- múltiplos usuários;
- integração com APIs.

## 6.4 Decisões técnicas

| Decisão | Justificativa |
|---|---|
| Aplicação web | Facilita acesso e publicação |
| Persistência local | Adequada ao uso pessoal inicial |
| Sem backend na primeira versão | Evita complexidade desnecessária |
| Git/GitHub | Versionamento e documentação |
| Vercel | Publicação da aplicação |
| Desenvolvimento assistido por IA/low-code | Aceleração do desenvolvimento e iteração |

## 6.5 Limite arquitetural

A arquitetura atual não foi projetada para funcionar como uma plataforma multiusuário.

Essa limitação é intencional na primeira versão e poderá ser revista caso os requisitos sejam ampliados.

# 7. UX/UI

## 7.1 Objetivo

A interface foi planejada com foco em simplicidade, clareza e facilidade de utilização.

Como a aplicação tem como objetivo organizar informações que podem se tornar numerosas, foi considerado importante evitar excesso de elementos visuais e informações simultâneas.

## 7.2 Princípios utilizados

### Simplicidade

As principais ações devem ser facilmente identificáveis.

### Clareza

As informações de uma ideia devem ser apresentadas de maneira organizada.

### Intuitividade

O usuário deve conseguir compreender o funcionamento da aplicação sem depender de instruções complexas.

### Hierarquia visual

Informações importantes, como título, status e prioridade, devem possuir destaque adequado.

### Feedback visual

A interface utiliza estados visuais para indicar ações de interação, como:

- hover;
- seleção;
- clique;
- alteração de estado.

## 7.3 Evolução da interface

Durante o desenvolvimento, decisões de interface foram ajustadas conforme a necessidade de tornar a utilização mais natural.

Entre os pontos considerados:

- posicionamento dos botões;
- quantidade de informações apresentadas;
- organização dos campos;
- identificação visual de prioridade;
- identificação de favoritos;
- interação com os registros.

## 7.4 Critério de UX

A interface deve priorizar a compreensão da informação em vez da quantidade de funcionalidades apresentadas.

Novos recursos devem ser adicionados somente quando representarem uma necessidade real para o usuário.

# 8. Processo de Desenvolvimento

## 8.1 Abordagem

O projeto foi desenvolvido de maneira incremental, partindo de uma versão mínima e evoluindo conforme novas necessidades foram identificadas.

O processo utilizado pode ser representado por:

```text
Problema
   ↓
Objetivos
   ↓
Requisitos
   ↓
Modelagem
   ↓
UX/UI
   ↓
Desenvolvimento
   ↓
Validação
   ↓
Ajustes
   ↓
Documentação
   ↓
Versionamento
   ↓
Deploy
```

## 8.2 Primeira versão

A primeira versão concentrou-se nas informações essenciais:

- título;
- categoria;
- status;
- descrição;
- anexo.

## 8.3 Evolução

Após analisar a utilização da aplicação, foram identificadas necessidades adicionais.

Foram acrescentados:

- prioridade;
- data de início;
- prazo;
- favoritos.

Essa evolução permitiu que a aplicação deixasse de apenas registrar ideias e passasse também a auxiliar no acompanhamento delas.

## 8.4 Desenvolvimento assistido

A implementação contou com uma abordagem de desenvolvimento assistido por IA/low-code.

Nesse processo, a ferramenta foi utilizada como apoio à implementação, enquanto as decisões relacionadas ao problema, requisitos, funcionalidades, experiência do usuário, escopo e evolução do produto foram definidas durante o desenvolvimento.

## 8.5 Validação incremental

As funcionalidades foram avaliadas ao longo do desenvolvimento para identificar:

- comportamentos inesperados;
- problemas de interface;
- necessidade de ajustes;
- inconsistências;
- melhorias de usabilidade.

O processo permitiu corrigir e ajustar a aplicação antes da publicação.

# 9. Segurança

## 9.1 Objetivo

Mesmo sendo uma aplicação pessoal sem backend, foram consideradas boas práticas básicas de segurança durante o desenvolvimento.

## 9.2 Validação de entradas

Os dados fornecidos pelo usuário devem ser tratados e validados antes de serem utilizados pela aplicação.

A validação busca reduzir problemas causados por entradas inesperadas ou inválidas.

## 9.3 Upload de arquivos

Os anexos possuem restrições de formato e tamanho.

Formatos previstos:

- PNG;
- JFIF;
- PDF.

Tamanho máximo:

- 10 MB.

## 9.4 Armazenamento local

Como os dados são armazenados no navegador, é importante considerar que o LocalStorage não deve ser utilizado para informações que necessitem de proteção elevada.

A aplicação não deve armazenar:

- senhas;
- tokens secretos;
- chaves privadas;
- credenciais;
- informações sensíveis que necessitem de proteção adicional.

## 9.5 Front-end

A aplicação deve evitar a inserção insegura de conteúdo fornecido pelo usuário diretamente na estrutura HTML.

Também devem ser consideradas:

- validação de entradas;
- tratamento de erros;
- validação de arquivos;
- atualização de dependências;
- proteção contra comportamentos inesperados.

## 9.6 Limitações

A versão atual não possui autenticação, controle de acesso ou backend.

Consequentemente, os mecanismos de segurança disponíveis são compatíveis com uma aplicação pessoal executada no navegador e não com um sistema multiusuário de produção.

Caso a arquitetura evolua para backend, deverão ser introduzidos mecanismos adicionais de segurança.

# 10. Testes e Validação

## 10.1 Objetivo

Os testes têm como objetivo verificar se as principais funcionalidades da aplicação apresentam o comportamento esperado e identificar problemas antes e após a publicação.

## 10.2 Estratégia

Para o escopo atual, a validação concentra-se principalmente em testes funcionais e testes de comportamento da interface.

## 10.3 Casos de teste

| ID | Cenário | Resultado esperado |
|---|---|---|
| CT01 | Criar ideia válida | Registro criado |
| CT02 | Editar ideia | Informações atualizadas |
| CT03 | Alterar status | Novo status apresentado |
| CT04 | Alterar prioridade | Nova prioridade apresentada |
| CT05 | Definir data | Data registrada |
| CT06 | Definir prazo | Prazo registrado |
| CT07 | Favoritar item | Item identificado como favorito |
| CT08 | Remover favorito | Item deixa de ser favorito |
| CT09 | Adicionar anexo válido | Arquivo aceito |
| CT10 | Adicionar arquivo inválido | Arquivo rejeitado |
| CT11 | Adicionar arquivo acima do limite | Arquivo rejeitado |
| CT12 | Excluir registro | Registro removido |
| CT13 | Recarregar página | Dados permanecem disponíveis |
| CT14 | Utilizar interface | Elementos principais respondem corretamente |
| CT15 | Acessar aplicação publicada | Aplicação carrega corretamente |

## 10.4 Validação pós-deploy

Após a publicação, a aplicação deve ser acessada pelo ambiente de produção para verificar:

- carregamento inicial;
- funcionamento das principais funcionalidades;
- persistência;
- comportamento da interface;
- anexos;
- ausência de erros críticos.

## 10.5 Critério de aprovação

Uma funcionalidade é considerada validada quando apresenta o comportamento esperado no cenário correspondente e não interfere negativamente nas funcionalidades existentes.

## 10.6 Observação

Os casos acima representam a estratégia de testes/documentação do projeto. A documentação não deve afirmar que todos foram executados formalmente caso isso ainda não tenha ocorrido.

# 11. Versionamento

## 11.1 Objetivo

O versionamento permite acompanhar a evolução do projeto e manter um histórico das alterações realizadas durante seu desenvolvimento.

## 11.2 Ferramenta

O projeto utiliza **Git** para controle de versão e **GitHub** para hospedagem do repositório.

## 11.3 Objetivos do versionamento

- registrar alterações;
- acompanhar evolução;
- facilitar recuperação de versões;
- documentar mudanças;
- manter o código centralizado;
- possibilitar publicação e colaboração futura.

## 11.4 Fluxo simplificado

```text
Alteração
   ↓
Validação local
   ↓
Commit
   ↓
Push
   ↓
GitHub
   ↓
Deploy
```

## 11.5 Boas práticas consideradas

Os commits devem, preferencialmente, representar alterações específicas e compreensíveis.

Exemplos:

```text
feat: adiciona controle de prioridade
feat: adiciona campo de prazo
fix: corrige persistência dos registros
fix: ajusta validação de anexos
docs: atualiza documentação
style: ajusta interface dos cards
```

A nomenclatura acima pode ser utilizada como padrão para manter o histórico mais organizado.

# 12. Deploy e Publicação

## 12.1 Objetivo

Disponibilizar a aplicação em um ambiente acessível pela internet para utilização e validação.

## 12.2 Versionamento

O código do projeto é mantido em um repositório GitHub.

## 12.3 Plataforma de hospedagem

A aplicação foi publicada utilizando a **Vercel**.

## 12.4 Fluxo de publicação

```text
Desenvolvimento
      ↓
Validação
      ↓
Git
      ↓
GitHub
      ↓
Vercel
      ↓
Aplicação publicada
```

## 12.5 Ambiente publicado

A aplicação encontra-se disponível em:

[Organizador de Ideias e Projetos — Aplicação publicada](https://app-project-ideias.vercel.app/?utm_source=chatgpt.com)

## 12.6 Validação após publicação

O ambiente publicado deve ser utilizado para validar o comportamento da aplicação fora do ambiente local.

Devem ser observados:

- carregamento da aplicação;
- funcionamento das funcionalidades;
- persistência dos dados;
- comportamento dos anexos;
- interface;
- erros no navegador.

## 12.7 Consideração

O projeto não utiliza domínio personalizado, pois a URL fornecida pela plataforma atende ao objetivo do projeto pessoal.

# 13. Resultados do Projeto

## 13.1 Resultado funcional

Foi desenvolvida e publicada uma aplicação web capaz de organizar ideias e projetos pessoais.

A aplicação permite registrar informações relacionadas a cada ideia e acompanhar sua evolução por meio de status, prioridade e datas.

## 13.2 Resultado técnico

O projeto proporcionou a aplicação prática de conceitos relacionados a:

- levantamento de requisitos;
- definição de escopo;
- modelagem;
- casos de uso;
- UX/UI;
- desenvolvimento web;
- persistência local;
- validação;
- segurança básica;
- controle de versão;
- documentação;
- publicação de aplicação web.

## 13.3 Resultado de Engenharia de Software

Além da implementação da aplicação, o projeto foi estruturado considerando o ciclo de desenvolvimento de software:

```text
Problema
   ↓
Requisitos
   ↓
Modelagem
   ↓
Implementação
   ↓
Testes
   ↓
Documentação
   ↓
Versionamento
   ↓
Deploy
   ↓
Evolução
```

Isso permite que o projeto seja apresentado não apenas como uma aplicação desenvolvida, mas como um exercício prático de Engenharia de Software.

## 13.4 Resultado do produto

A versão atual atende ao objetivo inicial de centralizar e organizar ideias, mantendo a solução simples e adequada ao uso pessoal.

O projeto também possui espaço para evolução futura sem exigir que funcionalidades complexas sejam introduzidas prematuramente.

# 14. Limitações Conhecidas

## 14.1 Persistência local

Os dados são armazenados no navegador utilizando LocalStorage.

Isso significa que os dados não são automaticamente sincronizados entre dispositivos.

## 14.2 Ausência de backend

A versão atual não possui servidor próprio ou API.

Consequentemente, funcionalidades que dependem de processamento ou armazenamento remoto ainda não fazem parte do escopo atual.

## 14.3 Ausência de autenticação

A aplicação não possui sistema de login ou gerenciamento de usuários.

## 14.4 Uso individual

A arquitetura atual foi pensada para utilização individual.

Não existe atualmente um mecanismo para:

- compartilhamento de projetos;
- colaboração em tempo real;
- permissões de acesso;
- múltiplos usuários.

## 14.5 Backup

Como os dados estão associados ao armazenamento local do navegador, não existe um mecanismo de backup remoto integrado na versão atual.

## 14.6 Escalabilidade

A arquitetura atual é suficiente para o propósito inicial, mas precisaria ser modificada caso o projeto evolua para um produto utilizado por muitos usuários ou com grande volume de dados.

## 14.7 Consideração

As limitações apresentadas não representam necessariamente falhas do projeto. Elas são consequências das decisões de escopo e arquitetura adotadas para a primeira versão.

# 15. Evolução e Roadmap

## 15.1 Objetivo

O roadmap apresenta possíveis evoluções da aplicação a partir das limitações e necessidades que podem surgir no futuro.

As funcionalidades abaixo não fazem parte necessariamente da versão atual. Elas representam possibilidades de evolução.

---

## 15.2 Curto prazo — Organização

### Checklist

Permitir que cada ideia ou projeto possua uma lista de tarefas internas.

Exemplo:

```text
Projeto: Criar portfólio

☑ Criar estrutura
☑ Desenvolver página inicial
☐ Adicionar projetos
☐ Publicar
```

### Tags

Adicionar etiquetas personalizadas para facilitar a classificação.

### Busca

Permitir localizar ideias pelo título, descrição, categoria ou tags.

### Filtros

Adicionar filtros combinados por:

- categoria;
- status;
- prioridade;
- favorito.

---

## 15.3 Médio prazo — Estrutura de dados

### Backend

Substituir ou complementar o LocalStorage com uma API.

Possíveis responsabilidades:

- armazenamento centralizado;
- sincronização;
- gerenciamento de dados;
- integração com outros serviços.

### Banco de dados

Adicionar banco de dados para persistência remota.

### Autenticação

Permitir criação de contas e acesso individual aos projetos.

### Backup

Implementar mecanismos de backup e recuperação dos dados.

---

## 15.4 Médio/longo prazo — Automação

A aplicação poderá evoluir para auxiliar não apenas no armazenamento das ideias, mas também na execução e acompanhamento dos projetos.

Possibilidades:

- lembretes de prazo;
- notificações;
- criação automática de tarefas;
- atualização automática de status;
- integração com calendário;
- automações baseadas em eventos.

---

## 15.5 Longo prazo — Inteligência Artificial

Uma possível evolução é incorporar recursos de IA para auxiliar o usuário na organização e desenvolvimento das ideias.

Exemplos:

### Sugestão de estrutura

A IA poderia analisar uma ideia e sugerir:

- objetivo;
- etapas;
- possíveis tarefas;
- prioridades;
- riscos;
- próximos passos.

### Transformação de ideia em plano

Exemplo:

```text
Entrada:

"Quero criar um site para uma loja de roupas."

        ↓

IA

        ↓

Objetivo
Público-alvo
Funcionalidades
Tarefas
Tecnologias
Cronograma
Próximos passos
```

### Sugestões contextuais

A aplicação poderia identificar ideias semelhantes e sugerir relações entre projetos existentes.

---

## 15.6 Possível evolução arquitetural

A arquitetura poderia evoluir de:

```text
Versão atual

Front-end
    ↓
LocalStorage
```

para:

```text
Evolução

Front-end
    ↓
API / Backend
    ↓
Banco de dados
```

E posteriormente:

```text
Aplicação
    ↓
API
    ├── Banco de dados
    ├── Autenticação
    ├── Automação
    └── Serviço de IA
```

---

## 15.7 Roadmap resumido

| Fase | Evolução | Status |
|---|---|---|
| V1 | Cadastro e organização de ideias | ✅ Concluído |
| V1 | Categorias e status | ✅ Concluído |
| V1 | Prioridade | ✅ Concluído |
| V1 | Datas e prazo | ✅ Concluído |
| V1 | Favoritos | ✅ Concluído |
| V1 | Anexos | ✅ Concluído |
| V1 | Persistência local | ✅ Concluído |
| V1 | GitHub | ✅ Concluído |
| V1 | Deploy | ✅ Concluído |
| V2 | Checklist | 🔲 Futuro |
| V2 | Tags | 🔲 Futuro |
| V2 | Busca e filtros avançados | 🔲 Futuro |
| V3 | Backend | 🔲 Futuro |
| V3 | Banco de dados | 🔲 Futuro |
| V3 | Autenticação | 🔲 Futuro |
| V3 | Sincronização | 🔲 Futuro |
| V4 | Automações | 🔲 Futuro |
| V5 | Recursos de IA | 🔲 Futuro |

## 15.8 Princípio de evolução

A evolução do projeto deve seguir a necessidade do produto.

Novas tecnologias ou funcionalidades não devem ser adicionadas apenas para aumentar a complexidade técnica. Cada evolução deve possuir uma finalidade clara e resolver um problema identificado.

Dessa forma, o projeto pode crescer gradualmente de uma aplicação pessoal simples para uma solução mais completa de organização, planejamento e execução de projetos.
