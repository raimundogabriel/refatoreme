# Usa uma imagem leve do Node.js
FROM node:18-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que o Vite usa
EXPOSE 5173

# Comando para rodar o projeto em modo desenvolvimento
CMD ["npm", "run", "dev"]