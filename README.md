# Maria_Node Framework
## by: [jpmoncao]('https://github.com/jpmoncao')

### 1. Requisitos
- Docker e Docker compose
- Node e npm
- Git

#
### 2. Preparando as dependências
- Instale as dependências alocadas: ```npm install```
- Altere as informações do ```package.json```
- Crie seu ```.env```
- Altere as váriaveis de ambiente do ```docker-compose```
- Altere as informações do ```swagger.json```

#
### 3. Ambiente de desenvolvimento
- Construir e rodar os containers: ```npm run start:docker```
***(Rode no path do docker-compose.yml)***


#
### 4. Comandos de inicialização
#### Iniciar em produção: ```npm run start```
#### Iniciar a compilação: ```npm run start:build```
#### Iniciar em live reload para desenvolvimento: ```npm run start:dev```
#### Iniciar containers docker: ```npm run start:docker```
#### Iniciar os testes (vazio): ```npm run start:test```