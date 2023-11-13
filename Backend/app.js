const express = require('express');
const app = express();
const fs = require('fs'); // Módulo para manipulação de arquivos

const port = 3000;
const jsonPath = 'Backend/JSON/teste-tela-inicial.json';

// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu servidor Node.js!');
});


// Nova rota para enviar dados do JSON
app.get('/dados', (req, res) => {
  // Ler o arquivo JSON
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    try {
      // Converter dados JSON para objeto JavaScript
      const jsonData = JSON.parse(data);
      res.json(jsonData); // Enviar dados JSON como resposta
    } catch (jsonError) {
      console.error('Erro ao analisar o JSON:', jsonError);
      res.status(500).send('Erro interno do servidor');
    }
  });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo em http://localhost:${port}`);
});
