const express = require('express');
const router = express.Router();

// fetch local datebase synchronously
const { fetchLocalDatabase } = require('../utils');
const jsonFile = JSON.parse(fetchLocalDatabase());

// @decs    Send all resources
// @route   GET /resources
router.get('/', (req, res) => {
  res.status(200).json(jsonFile);
});

// @decs    Send all categories
// @route   GET /resources/categories
router.get('/categories', (req, res) => {
  let caterogies = [...jsonFile.categories];

  res.status(200).json(caterogies);
});

// @decs    Send matching products
// @route   GET /resources/products/:id
router.get('/products/:id', (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).json({ error: 'you must provide a valid ID' });

  let products = [...jsonFile.products];
  let filtered = products.filter(product => product.categoryid === id);

  if (!filtered.length) return res.status(400).json({ error: 'ID does not match' });

  res.status(200).json(filtered);
});

// @decs    Send matching types
// @route   GET /resources/types/:id
router.get('/types/:id', (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).json({ error: 'you must provide a valid ID' });

  let types = [...jsonFile.types];
  let filtered = types.filter(type => type.productid === id);

  if (!filtered.length) return res.status(400).json({ error: 'ID does not match' });

  res.status(200).json(filtered);
});

// @decs    Send matching heights
// @route   GET /resources/heights/:id
router.get('/heights/:id', (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).json({ error: 'you must provide a valid ID' });

  let heights = [...jsonFile.heights];
  let filtered = heights.filter(height => height.typeid === id);

  if (!filtered.length) return res.status(400).json({ error: 'ID does not match' });

  res.status(200).json(filtered);
});

// @decs    Send matching lengths
// @route   GET /resources/lengths/:id
router.get('/lengths/:id', (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).json({ error: 'you must provide a valid ID' });

  let lengths = [...jsonFile.lengths];
  let filtered = lengths.filter(length => length.lengthid === id);

  if (!filtered.length) return res.status(400).json({ error: 'ID does not match' });

  res.status(200).json(filtered);
});

module.exports = router;
