const router = require('express').Router();

const Strains = require('./user-strains-model');

// =========== GET User_Strains ===========
router.get('/', (req, res) => {
    console.log("token for Strains", req.decodedToken);
    Strains.find()
        .then(strains => {
            res.json(strains);
        })
        .catch(err => res.send(err));
});

// =========== GET User_Strains by id ===========
router.get('/:id', (req, res) => {
    Strains.findById(req.params.id)
        .then(strain => {
            if (strain) {
                res.status(200).json(strain)
            } else {
                res.status(404).json({ message: "strain not found" })
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "ERROR unable to find strain", errorMessage: error.detail });
        });
})

// =========== POST User_Strain ===========
router.post('/', (req, res) => {
    let strain = req.body;;

    Strains.add(strain)
        .then(strain => {
            res.status(201).json({ message: `new strain added, thank you`, strain});
        })
        .catch(err => {
            res.status(500).json({ message: "ERROR unable to add strain", err });
        })
});

// =========== DELETE Response ===========
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Strains.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ removed: `strain ${id} 😥` })
            } else {
                res.status(404).json({ message: "strain not found" })
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "ERROR unable to find strain", err });
        });
})

module.exports = router;