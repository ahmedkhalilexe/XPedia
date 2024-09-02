const router = require('express').Router();

router.get("/", require("../controllers/posts").getPosts);

module.exports = router;