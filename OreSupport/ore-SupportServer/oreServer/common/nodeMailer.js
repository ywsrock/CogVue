const nodemailer = require("nodemailer");
const {MAIL_SETTING} = require("../common/const");
const { commit } = require("./db.common");
const moment = require("moment")



/*  手順
  * ①トランスポート設定と生成
  * ②メッセージオブジェクト作成(from,to,subject,text,html)
  * ③sendMail　メッセージオブジェクト送信
  *  
  * */
const createSMTPTTransport = function () {
    let transport = nodemailer.createTransport({
        // 発信ホスト
        host: MAIL_SETTING.HOST,
        port: MAIL_SETTING.PORT,
        secure: MAIL_SETTING.SECURE, // true for 465, false for other ports
        // service: 'Gmail',
        auth: {
            user: MAIL_SETTING.USER,
            pass: MAIL_SETTING.PASS
        },
    });
    return transport
}

//メール送信
const sendMail = function (trans, msg, maillist) {
    // エラーメッセージリスト
    let errMsg = []
    let i = 0
    maillist.forEach(to => {
        // 宛先セット
        msg.to = to
        // メール送信、エラーの場合、
        trans.sendMail(msg, (err) => {
            if (err) {
                errMsg.push(to + "送信失敗")
            }
        })
        i += 1;
        // if (i === maillist.length) { msg.transport.close() }
    })
    return errMsg
}

//日付DIFF
const dateDiff = function(startDate,endDate,measurement){
    var d1 = moment(startDate,"YYYY-MM-DD hh:mm:ss")
    var d2 = moment(endDate,"YYYY-MM-DD hh:mm:ss")
    return d1.diff(d2,measurement)
}

module.exports = {
    createSMTPTTransport,
    sendMail,
    dateDiff
}
