# Imagem oficial do Node.js
FROM node:20-alpine

# Pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Permite que o servidor React seja acessado fora do container
ENV HOST=0.0.0.0

# Porta usada pelo React
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]
