const router = require('express').Router();
const UserResponse = require("./userResponse-model")

router.get("/", (req, res) => {
    UserResponse.getUserResponse()
        .then(responses => (
            res.json(responses)
        ))
        .catch(err => {
            res.send(err)
        })
});