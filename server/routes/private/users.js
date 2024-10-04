const router = require("express").Router();
const tryCatch = require("../../utils/tryCatch");

router.get("/", tryCatch(require("../../controllers/users").getUsers));

router.get("/id", tryCatch(require("../../controllers/users").getUser));

router.get("/search", tryCatch(require("../../controllers/users").searchUsers));

router.get(
  "/friends/me",
  tryCatch(require("../../controllers/users").getFriends),
);

router.post(
  "/friendRequest",
  tryCatch(require("../../controllers/users").friendRequest),
);

router.put(
  "/friendRequest",
  tryCatch(require("../../controllers/users").updateFriendRequest),
);

router.get(
  "/friendRequest",
  tryCatch(require("../../controllers/users").getFriendRequests),
);

module.exports = router;
