// Arquivo app.js original

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao nosso aplicativo!');
});

// Função para processar dados do usuário
function processarDadosUsuario(dados) {
  // Implementação original
  return dados.toUpperCase();
}

app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}`);
});

module.exports = { processarDadosUsuario };
