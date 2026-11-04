const express = require('expres');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: 'Grass slippers', price: 8.5, category: 'Footwear', stock: 12 },
  { id: 2, name: 'Fishflops', price: 5, category: 'Footwear', stock: 0 },
  { id: 3, name: 'Big Bean', price: 3.25, category: 'Food', stock: 40 },
  //{ id: 4, name: 'Apple Majic '}
];

app.use(express.static(path.join(__dirname, 'publc')));

/** GET /api/product: sends every product as JSON. */
app.get('/api/product', (req, res) => {
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Shop server running at http://localhost:${PORT}`);
});
