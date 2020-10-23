var express = require("express");
var router = express.Router()
var checkuser = require("../common/check.token");
const { STATUS_MESSAGE } = require("../common/const");
const { UserAction } = require("../model/action.model");
const { UserActionMaster } = require("../model/actionMaster")

// アクション情報保存
router.post("/saveAction", [checkuser.verifyUser], async function (req, res, next) {

    //新しいアクション作成
    const userAction = await UserAction.build();
    //ユーザ
    userAction.userID = req.userID
    //アクション名
    userAction.name = req.body.newName
    //メモ
    userAction.memo = req.body.newMemo
    // 開始日
    userAction.startDate = req.body.newDate[0]
    // 終了日時
    userAction.endDate = req.body.newDate[1]

    try {  //データ保存
        await userAction.save()
        let resObj = {
            // JSON ステータスコード
            code: STATUS_MESSAGE.CODE_SUCCESS,
            data: {
                userAction: userAction
            }
        }
        return res.status(200).send(resObj);
    } catch (error) {
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
            }
        });

        // 選択アクション編集
       let actionOptions =  await editSelectAction(userActionMaster,userAction)

        resObj = {
            // JSON ステータスコード
            code: STATUS_MESSAGE.CODE_SUCCESS,
            data: {
                actionOptions:JSON.stringify(actionOptions),
                userAction:userAction
            }
        }
    } catch (error) {
        resObj = {
            // JSON ステータスコード
            code: STATUS_MESSAGE.CODE_406,
            message:STATUS_MESSAGE.ACTION_QUERY_ERROR
        }
    }
    return res.status(200).send(resObj)
})

//アクション変種
function  editSelectAction (mastAction,userAction)  {
    let actionOptions = [
        {
            label:"人気アクション",
            options:[]
        },
        {
            label:"ユーザアクション",
            options:[]
        }
    ]

    // マスターアクション
    mastAction.forEach(element => {
        actionOptions[0].options.push(
            {
               id:`m${element.id}`,
               name:element.name,
            }
        )
    });
    // ユーザアクション
    userAction.forEach(element => {
        actionOptions[1].options.push({
            id:element.id,
            name:element.name
        })
    })
    return actionOptions
}


module.exports = router;
