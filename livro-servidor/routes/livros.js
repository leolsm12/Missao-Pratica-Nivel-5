const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');


router.get('/', async (req, res, next) => {
  try {
    const listaLivros = await livroDao.obterLivros();
    res.json(listaLivros);
  } catch (error) {
    next(error);
  }
});


router.post('/', async (req, res, next) => {
  try {
    await livroDao.incluir(req.body);
    res.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro' });
  }
});


router.delete('/:id', async (req, res, next) => {
  try {
    const codigo = req.params.id;
    await livroDao.excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro' });
  }
});


module.exports = router;