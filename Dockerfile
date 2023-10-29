# Use uma imagem base Node.js
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte
COPY . .

# Exponha a porta que sua aplicação Node.js usa (por exemplo, 3000)
EXPOSE 3000

# Garante a trnaspilação do servidor para javascript
RUN npm run start:build

# Comando para iniciar a aplicação
CMD ["npm", "start"]
