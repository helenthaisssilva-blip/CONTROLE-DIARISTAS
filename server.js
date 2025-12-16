const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

let presencas = [];

app.get('/', (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form method="POST" action="/login">
      <input name="usuario" placeholder="Usuário" required />
      <button>Entrar</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const usuario = req.body.usuario;
  const agora = new Date();

  presencas.push({
    usuario,
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString()
  });

  res.send(`
    <h2>Presença registrada</h2>
    <p>Usuário: ${usuario}</p>
    <p>Data: ${agora.toLocaleDateString()}</p>
    <p>Hora: ${agora.toLocaleTimeString()}</p>
    <a href="/">Voltar</a>
  `);
});

app.get('/lista', (req, res) => {
  let lista = presencas.map(p =>
    `<li>${p.usuario} - ${p.data} ${p.hora}</li>`
  ).join('');

  res.send(`<ul>${lista}</ul><a href="/">Voltar</a>`);
});

app.listen(3000, () => {
  console.log('App de presença rodando');
});
