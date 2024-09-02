const router = require('express').Router();

router.get("/", require("../controllers/friends").getFriends);

module.exports = router;