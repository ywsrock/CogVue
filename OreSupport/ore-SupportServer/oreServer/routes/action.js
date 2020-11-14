var express = require("express");
var router = express.Router()
var checkuser = require("../common/check.token");
var log = require("log4js").getLogger("users");
const { STATUS_MESSAGE } = require("../common/const");
const { UserAction } = require("../model/action.model");
const { UserActionMaster } = require("../model/actionMaster")
const { sequelize } = require('../common/db.common')
const dateFormat = require('dateformat')

// アクション情報保存
router.post("/saveAction", [checkuser.verifyUser], async function (req, res, next) {
    log.info(`/saveAction ${req.body}`);

    //新しいアクション作成
    let userAction = await UserAction.build();
    //ユーザ
    userAction.userID = req.userID
    //アクション名
    userAction.name = String(req.body.newName).split(':')[0];
    //メモ
    userAction.memo = req.body.newMemo
    // 開始日
    userAction.startDate = dateFormat(new Date(req.body.newDate[0]), "yyyy-mm-dd HH:MM:ss")
    // 終了日時
    userAction.endDate = dateFormat(new Date(req.body.newDate[1]), "yyyy-mm-dd HH:MM:ss")

    try {
        //データ更新
        if (req.body.id !== "") {
            await UserAction.update({
                name: userAction.name,
                memo: userAction.memo,
                startDate: userAction.startDate,
                endDate: userAction.endDate
            }, {
                where: {
                    id: req.body.id
                }
            });
        } else {
            //データ保存
            userAction = await userAction.save()
        }

        let resObj = {
            // JSON ステータスコード
            code: STATUS_MESSAGE.CODE_SUCCESS,
            data: {
                userAction: userAction
            }
        }
        return res.status(200).send(resObj);
    } catch (error) {
        log.error(`/saveAction ${error}`)
        let resObj = {
            // JSON ステータスコード
            code: STATUS_MESSAGE.CODE_405,
            message: STATUS_MESSAGE.ACTION_CREATE_ERROR,
        }
        return res.status(200).send(resObj);
    }
})

// 履歴データ取得
router.get("/queryAction", [checkuser.verifyUser], async function (req, res, next) {
    log.info(`/queryAction ${req.userID}`);

    let userID = req.userID
    let resObj = {}

    try {
        //アクションマスタからデータ取得
        let userActionMaster = await UserActionMaster.findAll({
            attributes: [
                'id', 'name'
            ]
        });

        //ユーザアクションからデータ取得
        let userAction = await UserAction.findAll({
            where: {
                userID: userID
            },
            order: sequelize.literal('id DESC'),
        });

        // 選択アクション編集
        let actionOptions = await editSelectAction(userActionMaster, userAction)

        resObj = {
            // JSON ステータスコード
            code: STATUS_MESSAGE.CODE_SUCCESS,
            data: {
                actionOptions: JSON.stringify(actionOptions),
                userAction: userAction
            }
        }
    } catch (error) {
        log.error(`/queryAction ${error}`);
        resObj = {
            // JSON ステータスコード
            code: STATUS_MESSAGE.CODE_406,
            message: STATUS_MESSAGE.ACTION_QUERY_ERROR
        }
    }
    return res.status(200).send(resObj)
})

//履歴の削除
router.get("/destroyAction", [checkuser.verifyUser], async function (req, res, next) {
    log.info(`/destroyAction ${req.query.id}`);

    let resObj = {}
    try {
        let rowNum = await UserAction.destroy({
            where: {
                id: req.query.id
            }
        })
        resObj = {
            code: STATUS_MESSAGE.CODE_SUCCESS,
            data: {
                rowNum: rowNum
            }
        }
    } catch (error) {
        log.info(`/destroyAction ${error}`);
        resObj = {
            code: STATUS_MESSAGE.CODE_407,
            message: STATUS_MESSAGE.ACTION_DESTROY_ERROR
        }
    }
    res.status(200).send(resObj)
})
//アクション変種
function editSelectAction(mastAction, userAction) {
    let actionOptions = [
        {
            label: "人気アクション",
            options: []
        },
        {
            label: "ユーザアクション",
            options: []
        }
    ]

    // マスターアクション
    mastAction.forEach(element => {
        actionOptions[0].options.push(
            {
                id: `m${element.id}`,
                name: element.name,
            }
        )
    });
    // ユーザアクション
    userAction.forEach(element => {
        actionOptions[1].options.push({
            value: element.id,
            // text: `${element.name}</strong> 　過去実行日:${element.startDate}　〜　${element.endDate}`
            text: element.name
        })
    })
    return actionOptions
}


module.exports = router;
