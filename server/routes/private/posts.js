const router = require("express").Router();

router.get("/", require("../../controllers/posts").GetPosts);

router.post("/", require("../../controllers/posts").CreatePost);

router.get("/me", require("../../controllers/posts").GetMyPosts);

router.get("/user", require("../../controllers/posts").getUserPosts);

router.post("/like", require("../../controllers/posts").likePost);

router.post("/comment", require("../../controllers/posts").commentPost);

module.exports = router;
