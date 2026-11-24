const mongoose = require('mongoose');

const transacaoSchema = new mongoose.Schema(
  {
    descricao: { type: String, required: true, trim: true },
    tipo: { type: String, enum: ['receita', 'despesa'], required: true },
    categoria: { type: String, required: true },
    valor: { type: Number, required: true, min: 0.01 },
    data: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transacao', transacaoSchema);
