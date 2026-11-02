const express = require('expres');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: 'Mug', price: 8.5, category: 'kitchen', stock: 12 }
  { id: 2, name: 'Poster', price: 5, category: 'art', stock: 0 },
  { id: 3, name: 'Notebook', price: 3.25, category: 'stationery', stock: 40 }
];

app.use(express.static(path.join(__dirname, 'publc')));

/** GET /api/product: sends every product as JSON. */
app.get('/api/product', (req, res) => {
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Shop server running at http://localhost:${PORT}`);
});
