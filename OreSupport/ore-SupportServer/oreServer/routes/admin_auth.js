var express = require("express");
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    function (req, username, password, done) {
      process.nextTick(function () {
        if (username === "oresapo" && password === "oresapo") {
          return done(null, username);
        } else {
          console.log("login error");
          return done(null, false, {
            message: "パスワードが正しくありません。",
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

/* ログインページ */
router.get("/login", async function (req, res, next) {
  res.render("admin/login", {
    title: "管理者ログイン",
    user: req.user,
  });
});

/* ログイン処理 */
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/admin/login",
    successRedirect: "/information",
    session: true,
  })
);

/* ログアウト処理 */
router.post("/logout", async function (req, res, next) {
  req.logout();
  res.redirect("/admin/login");
});

module.exports = router;
