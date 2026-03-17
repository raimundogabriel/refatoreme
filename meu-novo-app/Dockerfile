# Usa uma imagem leve do Node.js
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o Vite usa (padrão 5173)
EXPOSE 5173

# Comando para rodar o app em modo de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]