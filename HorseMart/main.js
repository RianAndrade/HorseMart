const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Define o diretório público onde os arquivos HTML estão localizados
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (Home)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de cursos
app.get('/cursos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cursos.html'));
});

// Rota para a página Sobre
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sobre.html'));
});

// Rota para a página Contato
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contato.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
