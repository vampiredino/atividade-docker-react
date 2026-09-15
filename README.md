# Atividade Docker - React

Este projeto é a aplicação React de Login usada na atividade anterior, agora preparada para executar em um container Docker.

## Credenciais da aplicação

- E-mail: `eduardo.lino@pucpr.br`
- Senha: `123456`

## Executar normalmente

```bash
npm install
npm start
```

## Executar com Docker

Na raiz do projeto, onde está o arquivo `Dockerfile`, execute:

```bash
docker build -t atividade-react .
```

Depois execute o container:

```bash
docker run --name atividade-react-container -p 3000:3000 atividade-react
```

Abra no navegador:

```text
http://localhost:3000
```

Para parar o container:

```bash
docker stop atividade-react-container
```

Para remover o container depois:

```bash
docker rm atividade-react-container
```

## Comandos para enviar ao GitHub

Confira se você está na branch `main`:

```bash
git branch
```

Adicione os arquivos:

```bash
git add Dockerfile .dockerignore README.md
```

Crie o commit:

```bash
git commit -m "Adiciona Dockerfile para executar aplicação React"
```

Envie para a branch main:

```bash
git push origin main
```

## O que entregar no AVA

A atividade pede pelo menos quatro imagens:

1. Print da atividade formativa da semana 2 mostrando a URL do repositório e o conteúdo dele.
2. Print da atividade formativa da semana 3 mostrando a Pull Request criada e o workflow de CI/CD executando com sucesso.
3. Print do container Docker funcionando localmente com sucesso.
   - Uma forma simples é deixar o terminal visível com o comando `docker ps`.
   - Também é recomendável deixar o navegador aberto em `http://localhost:3000`.
4. Print mostrando o arquivo `Dockerfile` dentro do seu repositório no GitHub.
   - O enunciado também permite enviar o próprio arquivo `Dockerfile` no lugar desse print.

Importante: os prints precisam ser reais, com a URL do seu próprio repositório visível quando solicitado pelo enunciado.
