const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path')

router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../', '/database/data.json'), (err, data) => {
    if (err) return console.log(err);

    res.json(JSON.parse(data));
  });
});

module.exports = router;
