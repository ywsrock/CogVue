var express = require("express");
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;
var router = express.Router();
var request = require("request");

router.post("/autoSearch", async function (req, res, next) {
  const postalcode = req.body.postalcode;
  try {
    request.get(
      "https://zip-cloud.appspot.com/api/search?zipcode=" + postalcode,
      function (err, resZipcloud, body) {
        resObj = {
          code: STATUS_MESSAGE.CODE_SUCCESS,
          data: JSON.parse(resZipcloud.body),
        };
        return res.json(resObj);
      }
    );
  } catch (err) {
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: "住所取得エラー",
    };
    return res.status(500).send(resObj);
  }
});

module.exports = router;
