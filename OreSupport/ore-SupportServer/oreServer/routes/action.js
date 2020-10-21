var express = require("express");
var router = express.Router()
var checkuser = require("../common/check.token")

アクション情報保存
router.post("/saveAction", [checkuser.verifyUser], function (req, res, next) {



})


