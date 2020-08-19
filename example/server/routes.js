const router = require("express").Router();
const authGithub = require("./controllers/github");
const authFacebook = require("./controllers/facebook");
const authGoogle = require("./controllers/google");

router.get("/auth/github", authGithub);
router.get("/auth/facebook", authFacebook);
router.get("/auth/google", authGoogle);

module.exports = router;
