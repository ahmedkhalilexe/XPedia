const router = require("express").Router();
const tryCatch = require("../../utils/tryCatch");

router.use("/users", require("./users"));

router.use("/posts", require("./posts"));

module.exports = router;
