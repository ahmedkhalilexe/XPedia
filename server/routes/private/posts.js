const router = require("express").Router();
const tryCatch = require("../../utils/tryCatch");

router.get("/", tryCatch(require("../../controllers/posts").GetPosts));

router.post("/", tryCatch(require("../../controllers/posts").CreatePost));

router.delete("/", tryCatch(require("../../controllers/posts").deletePost));

router.get("/me", tryCatch(require("../../controllers/posts").GetMyPosts));

router.get("/user", tryCatch(require("../../controllers/posts").getUserPosts));

router.post("/like", tryCatch(require("../../controllers/posts").likePost));

router.delete("/like", tryCatch(require("../../controllers/posts").unlikePost));

router.post(
  "/comment",
  tryCatch(require("../../controllers/posts").commentPost),
);

router.delete(
  "/comment",
  tryCatch(require("../../controllers/posts").deleteComment),
);

module.exports = router;
