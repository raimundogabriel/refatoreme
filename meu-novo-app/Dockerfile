#imagem docker Nodejs
FROM node:20-alpine

# Definindo o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todos os arquivos do projeto 
COPY . .

# Expor a porta que o Vite usa
EXPOSE 5173

# Comandos para rodar o app 
CMD ["npm", "run", "dev", "--", "--host"]