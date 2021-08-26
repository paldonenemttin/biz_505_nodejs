// express framework의 객체 선언
const express = require("express");
// express framwork에서 routing을 수행하기 위한
// sub 객체 선언
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.send("졸려");
});

router.get("/json", function (req, res) {
  let mData = {
    name: "홍길동",
    tel: "5665-5554",
    age: 23,
  };
  res.json(mData);
});
module.exports = router;
