var express = require("express");
var router = express.Router();
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;

/* 一覧ページ */
router.get("/", isAuthenticated, async function (req, res, next) {
  res.render("admin/banner_image/index", {
    title: "バナー画像",
    user: req.user,
  });
});

// 認証されているか確認する。
// 認証されていない場合、ログイン画面に遷移
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/admin/login");
  }
}

module.exports = router;
