const mongoose = require('mongoose');

module.exports = async function conectarDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado');
  } catch (erro) {
    console.error('Erro ao conectar no MongoDB:', erro.message);
    process.exit(1);
  }
};
