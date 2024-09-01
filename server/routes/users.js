const router = require('express').Router();

router.get("/", require("controllers/users").getUsers);

module.exports = router;