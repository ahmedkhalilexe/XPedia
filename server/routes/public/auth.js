const router = require("express").Router();
const tryCatch = require("../../utils/tryCatch");

router.post("/signUp", tryCatch(require("../../controllers/auth").signUp));

router.post("/signIn", tryCatch(require("../../controllers/auth").signIn));

router.post("/signOut", tryCatch(require("../../controllers/auth").signOut));

router.get(
  "/getRefreshToken",
  tryCatch(require("../../controllers/auth").getRefreshToken),
);

module.exports = router;
