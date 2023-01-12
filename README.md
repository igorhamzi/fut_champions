## :information_source: Fut Champions Project

Projeto desenvolvido para consolidar os conhecimentos de construção de API na arquitetura MSC e utilizando princípios SOLID com TypeScript e POO.


![App Screenshot](https://user-images.githubusercontent.com/94147604/195465592-2bc2393e-ab07-4316-93fd-0a97ef09fe73.jpg)

---

## :rocket: Stack utilizada

* **language:** TypeScript

* **Back-end:** Node.js, Express, MySql, docker, Sequelize

* **test:** Mocha, Chai, Sinon

* **tools:** Workbench, Insomnia

#### Além das Stacks citadas acima, também foram utilizadas as seguintes bibliotecas:

- `Joi` para fazer a validação do corpo das requisições;
- `JWT` para fazer a autenticação dos usuários logados;
- `bcrypt` para fazer hashing e verificação das senhas armazenadas no banco de dados.

---

## :link: O que foi desenvolvido

Este projeto foi desenvolvido o back-end para ser integrado e enviar dados para um frontend react que exibe informações sobre partidas e classificações de futebol.

A proposta do projeto foi, a partir de um frontend sem lógica (apenas exibe informações), desenvolver uma API na arquitetura MSC e utilizando princípios SOLID com TypeScript e POO que seria responsável por: (Habilidades desenvolvidas)

---

## Habilidades desenvolvidas


* Criar e manipular um banco de dados MySQL para armazenar todos os dados;
* Autenticar usuários cadastrados através do login;
* Listar clubes cadastrados;
* Listar partidas em andamento e partidas finalizadas;
* Adicionar partidas em andamento;
* Atualizar o placar das partidas em andamento;
* Finalizar partidas;
* Gerar leaderboards ranqueadas e ordenadas baseadas no desempenho dos clubes nas partidas cadastradas, utilizando 5 critérios avaliativos e separando em 3 tipos de classificação (geral, mandante e visitante);
* Orquestrar tudo isso (banco de dados, backend e frontend) em containers Docker e executá-los de forma conjunta através de uma orquestração com Docker-Compose.
* Desenvolver testes de todas as camadas em TDD utilizando Mocha, Chai e Sinon.

---

## Rodando localmente

***Para rodar a API localmente certifique-se de ter [Docker](https://docs.docker.com/get-docker/) 
e [Docker-Compose](https://docs.docker.com/compose/install/) instalados em sua maquina.***

Obs: Docker e Docker-Compose utilizados no desenvolvimento e execução deste projeto estavam nas versões `20.10.13` e `1.29.2` respectivamente.

Clone o projeto:

```bash
  clone o repositório
```

Suba a orquestração de containers:

```bash
  docker-compose up --build -d
```

A API estará pronta para uso quando a saída no seu terminal ficar assim:

```bash
  Creating tfc_database ... done
  Creating tfc_backend ... done
  Creating tfc_frontend ... done
```

A aplicação poderá ser acessada através de:

```bash
  Front-end: localhost:3000
  Back-end: localhost:3001
```

Para realizer o login você pode usar as credenciais abaixo:

```bash
  login: admin@admin.com
  senha: secret_admin 
```

Para encerrar a API basta executar o comando:

```bash
  docker-compose down --rmi local --volumes --remove-orphans
```

---

### Projeto realizado no módulo de Back-end do Curso de Desenvolvimento WEB da TRYBE.
