app.post('/login', async (req, res) => {
  const usuario = req.body.usuario;
  const agora = new Date();

  const dados = {
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR'),
    nome: usuario,
    login: usuario,
    lat: req.body.lat || '',
    lng: req.body.lng || ''
  };

  await fetch('COLE_AQUI_A_URL_DO_SCRIPT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });

  res.send('Presença registrada com sucesso');
});
