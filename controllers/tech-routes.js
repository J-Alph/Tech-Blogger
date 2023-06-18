const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("all");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
