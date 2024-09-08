const router = require("express").Router();
const tryCatch = require("../../utils/tryCatch");

router.get("/", tryCatch(require("../../controllers/users").getUsers));

router.get("/id", tryCatch(require("../../controllers/users").getUser));

router.get("/search", tryCatch(require("../../controllers/users").searchUsers));

router.get("/friends", tryCatch(require("../../controllers/users").getFriends));

router.post("/friends", tryCatch(require("../../controllers/users").addFriend));
module.exports = router;
