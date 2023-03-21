const { banco } = require('./conexao');

const LivroSchema = banco.Schema({
  id:banco.Schema.Types.Objectld,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

const Livro = banco.model('Livro', LivroSchema);
module.exports = Livro;
