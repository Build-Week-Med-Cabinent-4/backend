const express = require('express');

const Strains = require('./strains-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
      };
  Strains.find(requestOptions)
    .then((strains) => {
      res.status(200).json(strains);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Failed to get strains.',
      });
    });
});

module.exports = router;