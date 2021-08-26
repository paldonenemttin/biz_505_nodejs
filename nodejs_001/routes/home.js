const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Republic of Korea");
});

router.get("/my", (req, res) => {
  const html = "<div>Korea</div>";
  res.render("home", { title: "배고파", html });
});

module.exports = router;
