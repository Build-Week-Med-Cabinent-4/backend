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
// GET users by ID
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  
  Users.findById(id)
  .then(users => {
    if(users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: 'could not find user for given ID'})
    }
  })
 .catch (err => {
   res.status(500).json({ message: 'failed to get user'});
   });
});

//GET strains for specific user ID
router.get('/:id/strains', (req, res, next) => {
    
  const { id } = req.params;
  Users.findUserStrain(id)
  .then(strains => {
    if (strains.length) {
      res.status(200).json(strains);
    } else {
      res.status(404).json({ message: 'could not find strains for given user ID'})
    }
  })
 .catch (err => {
   res.status(500).json({ message: 'failed to get strains'})
   });
});

// POST new strain to user ID
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

// UPDATE strain from user by user ID and strain ID
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

// DELETE strain from user by user ID and strain ID
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
