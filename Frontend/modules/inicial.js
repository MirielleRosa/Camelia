import axios from 'axios';

axios.get('http://localhost:3000/')
  .then(response => {
    const { nome, avaliacao, cargo, descricao } = response.data;

    console.log(`Nome: ${nome}, Avaliação: ${avaliacao}, Cargo: ${cargo}, Descrição: ${descricao}`);
    
  })
  .catch(error => {
    console.error(`Erro ao fazer a solicitação: ${error.message}`);
  });
