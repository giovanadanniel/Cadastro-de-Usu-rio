const express = require('express');
const app = express();

app.use(express.static('public')); // Assumindo que seus arquivos HTML e CSS estão na pasta 'public'

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
