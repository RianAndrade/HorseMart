
# Horse Mart

Um projeto em Bootstrap com rotas em Express de um site de cursos online para um trabalho de Desenvolvimento Web.

## Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/) ou o [Docker](https://www.docker.com/get-started) instalados em seu sistema.

Verifique a versão do Node.js instalada com o comando:

```bash
node --version
```

Se não estiver instalado, instale o Node.js a partir do site oficial.

## Instalação

Clone o repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/horse-mart.git
```

Navegue até o diretório do projeto:

```bash
cd horse-mart
```

Instale as dependências:

```bash
npm install
```

### Executando o projeto localmente com Node.js

Para iniciar o servidor, execute:

```bash
npm run dev
```

Em seguida, acesse o projeto no seu navegador em:

```
http://localhost:8000
```

### Executando o projeto localmente com Docker

Clone o repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/horse-mart.git
```

Navegue até a pasta onde está o `docker-compose.yml`:

```bash
cd horse-mart
```

Construa os contêineres Docker:

```bash
docker-compose build
```

Suba os serviços:

```bash
docker-compose up
```

Em seguida, acesse o projeto no seu navegador em:

```
http://localhost:8000
```

## Comandos úteis

### Parar o servidor:
- Com Node.js: pressione Ctrl + C no terminal.
- Com Docker: execute `docker-compose down` para parar e remover os contêineres.
