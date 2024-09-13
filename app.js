// Arquivo app.js na branch feature-Backend

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo ao nosso aplicativo com backend aprimorado!');
});

// Função para processar dados do usuário
function processarDadosUsuario(dados) {
  // Implementação do Backend
  return dados.toLowerCase().split('').reverse().join('');
}

app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port} com backend otimizado`);
});

module.exports = { processarDadosUsuario };
