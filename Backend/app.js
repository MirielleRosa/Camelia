const express = require('express');
const app = express();
const fs = require('fs'); 
const cors = require('cors');

const port = 3000;
const jsonPath = 'Backend/JSON/teste-tela-inicial.json';

app.use(cors());
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
app.get('/login', (req, res) => {
  const email = decodeURIComponent(req.query.email);
  const senha = decodeURIComponent(req.query.senha);

  fs.readFile('JSON/login.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo JSON:', err);
      return res.status(500).json({ message: 'Erro interno ao ler JSON' });
    }

    try {
      const usuarios = JSON.parse(data);

      // Verifica se há pelo menos um usuário no array
      if (usuarios.length > 0) {
        // Tenta encontrar um usuário com as credenciais fornecidas
        const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);

        if (usuarioEncontrado) {
          // Se encontrou o usuário, retorna os detalhes do usuário
          return res.json({
            message: 'Login válido',
            loginValido: true,
            usuario: usuarioEncontrado
          });
        }
      }

      return res.status(401).json({ message: 'E-mail ou senha inválidos', loginValido: false });

    } catch (jsonError) {
      console.error('Erro ao analisar o JSON:', jsonError);
      return res.status(500).json({ message: 'Erro interno ao analisar JSON' });
    }
  });
});




// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo em http://localhost:${port}`);
});
