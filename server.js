const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/presenca', async (req, res) => {
  const agora = new Date();

  const dados = {
    login: req.body.login,
    senha: req.body.senha,
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR'),
    lat: req.body.lat,
    lng: req.body.lng
  };

  try {
    const resposta = await fetch('https://script.google.com/macros/s/AKfycbxPw3Wn64v8nttqczw0Cjadr5hcG6DaENNUNKuodLuEZ3wuu80BTfCUFfbdS-pq2a-tew/exec', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();

    if (resultado.status === 'OK') {
      res.send('<h2>Presença confirmada!</h2>');
    } else if (resultado.status === 'BLOQUEADO') {
      res.send('<h2>Hoje você não foi escalado para trabalhar!</h2>');
    } else {
      res.send('<h2>Login ou senha inválidos!</h2>');
    }
  } catch (error) {
    console.error(error);
    res.send('<h2>Erro ao registrar presença. Tente novamente.</h2>');
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta 3000');
});

