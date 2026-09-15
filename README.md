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
