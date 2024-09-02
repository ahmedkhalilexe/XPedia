const router = require('express').Router();
const tryCatch = require("../utils/tryCatch");

router.post("/signUp",tryCatch(require("../controllers/auth").signUp));

router.post("/signIn", require("../controllers/auth").signIn);

module.exports = router;