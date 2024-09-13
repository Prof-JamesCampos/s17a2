// Arquivo app.js na branch feature-UI

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo ao nosso aplicativo renovado!</h1>');
});

// Função para processar dados do usuário
function processarDadosUsuario(dados) {
  // Implementação da UI
  return `<div class="user-data">${dados.toUpperCase()}</div>`;
}

app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port} com nova UI`);
});

module.exports = { processarDadosUsuario };
