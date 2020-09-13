var express = require("express");
var router = express.Router();
var informationModel = require("../dao/information/information.dao");
const STATUS_MESSAGE = require("../common/const").STATUS_MESSAGE;
require("date-utils");

/* お知らせ一覧ページ */
router.get("/", async function (req, res, next) {
  // 出力結果
  let resObj = {};

  // お知らせ一覧取得
  const informationList = await informationModel.getInformations();

  if (typeof informationList.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: informationList.message,
    };
    res.render("information/index", {
      title: "管理画面 お知らせ一覧",
      informationList: [],
    });
  } else {
    let contentArray = [];
    informationList.forEach((information) => {
      contentArray.push({
        id: information.ID,
        title: information.Title,
        category: information.Category,
        content: information.Content,
        from: information.From.toFormat("YYYY/MM/DD"),
        to: information.To.toFormat("YYYY/MM/DD"),
      });
    });

    res.render("information/index", {
      title: "管理画面 お知らせ一覧",
      informationList: contentArray,
    });
  }
});

/* お知らせ新規作成ページ */
router.get("/new", function (req, res, next) {
  res.render("information/new", { title: "管理画面 お知らせ新規作成" });
});

router.post("/create", async function (req, res, next) {
  // 出力結果
  let resObj = {};

  let title = req.body.title;
  let category = req.body.category;
  let content = req.body.content;
  let from = req.body.from;
  let to = req.body.to;

  if (
    "" != title.trim() &&
    "" != category.trim() &&
    "" != content.trim() &&
    "" != from.trim() &&
    "" != to.trim()
  ) {
    // information登録処理
    informationObj = {
      Title: title,
      Category: category,
      Content: content,
      From: from,
      To: to,
    };

    // DBにinformation登録を呼び出す
    const results = await informationModel.createInformation(informationObj);

    // エラーの場合、エラーメッセージを返す（再修正必要）
    if (typeof results.errors !== "undefined") {
      // エラー結果
      resObj = {
        code: STATUS_MESSAGE.CODE_402,
        message: "お知らせ作成エラー",
      };
      return res.status(402).send(resObj);
    } else {
      res.redirect("/information");
    }
  } else {
    return res.status(500).send({
      token: null,
      message: "全ての項目に入力をおねがいします",
    });
  }
});

/* お知らせ削除 */
router.get("/delete", async function (req, res, next) {
  console.log(req.query.informationID);

  const id = req.query.informationID;
  // お知らせ削除
  const resulut = await informationModel.deleteInformation({
    key: "ID",
    val: id,
  });

  if (typeof resulut.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: resulut.message,
    };
    return res.status(200).send(resObj);
  } else {
    res.redirect("/information");
  }
});

/* お知らせ詳細ページ */
router.get("/detail", async function (req, res, next) {
  console.log(req.query.informationID);

  const id = req.query.informationID;
  //お知らせ詳細取得
  var informationDetail = await informationModel.getInformationDetail({
    key: "ID",
    val: id,
  });

  if (typeof informationDetail.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: informationDetail.message,
    };
    return res.status(200).send(resObj);
  } else {
    resObj = {
      id: informationDetail.ID,
      title: informationDetail.Title,
      category: informationDetail.Category,
      content: informationDetail.Content,
      from: informationDetail.From.toFormat("YYYY-MM-DD"),
      to: informationDetail.To.toFormat("YYYY-MM-DD"),
    };

    res.render("information/detail", {
      title: "管理画面 お知らせ詳細",
      informationDetail: resObj,
    });
  }
});

/* お知らせ更新 */
router.post("/update", async function (req, res, next) {
  // 出力結果
  let resObj = {};

  let id = req.body.id;
  let title = req.body.title;
  let category = req.body.category;
  let content = req.body.content;
  let from = req.body.from;
  let to = req.body.to;

  if (
    "" != title.trim() &&
    "" != category.trim() &&
    "" != content.trim() &&
    "" != from.trim() &&
    "" != to.trim()
  ) {
    const informationObj = {
      Id: id,
      Title: title,
      Category: category,
      Content: content,
      From: from,
      To: to,
    };

    // information更新処理
    const results = await informationModel.updateInformation(informationObj);

    if (typeof results.errors != "undefined") {
      // エラー結果
      resObj = {
        code: STATUS_MESSAGE.CODE_402,
        message: "お知らせ更新エラー",
      };
      return res.status(200).send(resObj);
    } else {
      res.redirect("/information");
    }
  } else {
    return res.status(200).send({
      token: null,
      message: "お知らせ更新エラー",
    });
  }
});

/* 公開されているお知らせを取得して配信 */
router.get("/publicList", async function (req, res, next) {
  // 出力結果
  let resObj = {};

  // お知らせ一覧取得
  const informationList = await informationModel.getPublicInformations();

  if (typeof informationList.errors != "undefined") {
    // エラー結果
    resObj = {
      code: STATUS_MESSAGE.CODE_402,
      message: informationList.message,
    };
    res.render("information/index", {
      title: "管理画面 お知らせ一覧",
      informationList: [],
    });
  } else {
    let contentArray = [];
    informationList.forEach((information) => {
      contentArray.push({
        id: information.ID,
        title: information.Title,
        category: information.Category,
        content: information.Content,
        from: information.From.toFormat("YYYY/MM/DD"),
        to: information.To.toFormat("YYYY/MM/DD"),
      });
    });

    resObj = {
      // JSON ステータスコード
      code: STATUS_MESSAGE.CODE_SUCCESS,
      data: {
        informationList: contentArray,
      },
    };

    return res.status(200).send(resObj);

    // res.render("information/index", {
    //   title: "管理画面 お知らせ一覧",
    //   informationList: contentArray,
    // });
  }
});

module.exports = router;
