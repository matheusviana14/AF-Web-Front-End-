const Transacao = require('../models/Transacao');

exports.listar = async (req, res) => {
  try {
    const filtro = {};
    if (req.query.tipo) filtro.tipo = req.query.tipo;
    if (req.query.categoria) filtro.categoria = req.query.categoria;
    const itens = await Transacao.find(filtro).sort({ data: -1 });
    res.status(200).json(itens);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
};

exports.buscarPorId = async (req, res) => {
  try {
    const item = await Transacao.findById(req.params.id);
    if (!item) return res.status(404).json({ erro: 'Transação não encontrada' });
    res.status(200).json(item);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const nova = await Transacao.create(req.body);
    res.status(201).json(nova);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    const item = await Transacao.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });
    if (!item) return res.status(404).json({ erro: 'Transação não encontrada' });
    res.status(200).json(item);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};

exports.remover = async (req, res) => {
  try {
    const item = await Transacao.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ erro: 'Transação não encontrada' });
    res.status(200).json({ mensagem: 'Transação removida' });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
};
