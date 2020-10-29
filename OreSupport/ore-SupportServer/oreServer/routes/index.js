var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("admin/login", {
    title: "管理者ログイン",
    user: req.user,
  });
});

module.exports = router;
