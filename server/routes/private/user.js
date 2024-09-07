const router = require("express").Router();

router.get("/", require("../../controllers/users").getUsers);

router.get("/:userID", require("../../controllers/users").getUser);

module.exports = router;
