const router = require("express").Router();

router.use("/public", require("./public/public"));

router.use(
  "/private",
  require("../middlewares/JWTHandler"),
  require("./private/private"),
);

module.exports = router;
