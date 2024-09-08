const router = require("express").Router();

router.get("/", require("../../controllers/posts").GetPosts);

router.post("/", require("../../controllers/posts").CreatePost);

router.get("/me", require("../../controllers/posts").GetMyPosts);

module.exports = router;
