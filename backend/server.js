require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
const transacaoRoutes = require('./routes/transacaoRoutes');

const app = express();
app.use(cors({ origin: 'http://localhost:4200', methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'], allowedHeaders: ['Content-Type','Authorization'] }));
app.use(express.json());

app.use('/api/transacoes', transacaoRoutes);

const PORT = process.env.PORT || 3000;

conectarDB().then(() => {
  app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
});
