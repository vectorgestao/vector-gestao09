
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let produtos = [
  {
    id: 1,
    nome: "Caneca Personalizada",
    custo: 8,
    venda: 25,
    estoque: 50
  }
];

app.get('/', (req, res) => {
  res.json({ sistema: 'Vector Gestão Online' });
});

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.post('/produtos', (req, res) => {
  const produto = {
    id: produtos.length + 1,
    ...req.body
  };

  produtos.push(produto);

  res.json(produto);
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
