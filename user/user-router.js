const router = require('express').Router();
const Users = require('./user-model');
const Strains = require('../strains/strains-model');


router.get('/', async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next({ apiCode: 500, apiMessage: 'db error getting users', ...err });
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const userToDelete = await Users.remove(id);
    res.status(200).json({ userToDelete, message: 'deleted' });
  } catch (err) {
    next({ apiCode: 500, apiMessage: 'failed to delete user', ...err });
  }
});

// strains CRUD routes
// GET users/:id/strains
router.get('/:id/strains', (req, res, next) => {
    
  const { id } = req.params;
  Strains.findById(id)
  .then(
    strains => {res.status(200).json(strains);})
 .catch (err => res.send(err))
})

// POST users/:id/strains
router.post('/:id/strains', async (req, res, next) => {
  const strain = req.body;
  strain.user_id = req.params.id;

  try {
    const newStrain = await Strains.add(strain);
    res.status(201).json(newStrain);
  } catch (err) {
    next({ apiCode: 400, apiMessage: 'missing strain fields' });
  }
});

// UPDATE users/:id/strains/:strain_id
router.put(
  '/:id/strains/:strain_id',
  async (req, res, next) => {
    const { strain_id } = req.params;
    const changes = req.body;

    const strain = Strains.findById(strain_id);

    try {
      if (strain) {
        await Strains.update(changes, strain_id);
        const updatedStrains = await Strains.findById(strain_id);

        res.status(200).json({
          strain_id,
          message: 'Strain updated',
        });
      }
    } catch (err) {
      next({ apiCode: 500, apiMessage: 'failed to update strain' });
    }
  }
);

// DELETE users/:id/strains/:strain_id
router.delete(
  '/:id/strains/:strain_id',
  async (req, res, next) => {
    const { strain_id } = req.params;

    const strain = Strains.findById(strain_id);

    try {
      if (strain) {
        await Strains.remove(strain_id);
        const strains = await Strains.findById(req.params.id);

        res.status(200).json({
          strain_id,
          message: 'strain deleted',
        });
      }
    } catch (err) {
      next({ apiCode: 500, apiMessage: 'failed to delete strain', ...err });
    }
  }
);

module.exports = router;
