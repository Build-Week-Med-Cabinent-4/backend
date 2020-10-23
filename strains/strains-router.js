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

//GET strain by ID
router.get('/:id', (req, res, next) => {
    
  const { id } = req.params;
  Strains.findById(id)
  .then( strains => {
    if (strains.length) {
      res.status(200).json(strains);
    } else {
      res.status(404).json({ message: 'could not find strain for given ID'})
    }
  })
 .catch (err => {
   res.status(500).json({ message: 'failed to get strain'})
 })
})

module.exports = router;