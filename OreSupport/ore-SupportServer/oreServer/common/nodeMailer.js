const nodemailer = require("nodemailer");


/*  手順
  * ①トランスポート設定と生成
  * ②メッセージオブジェクト作成(from,to,subject,text,html)
  * ③sendMail　メッセージオブジェクト送信
  *  
  * */

//送信先リスト
// var mailList = [
//     "a1906wy@aiit.ac.jp",
//     "a1933jh@aiit.ac.jp",
//     "a18z1zw@aiit.ac.jp",
//     "a1923ht@aiit.ac.jp",
//     "a1911tk@aiit.ac.jp",
//     "a1908rk@aiit.ac.jp"
// ]



//メールトランスポート
const createSMTPTTransport = function () {
    let transport = nodemailer.createTransport({
        // 発信ホスト
        host: "mail38.onamae.ne.jp",
        port: 465,
        secure: true, // true for 465, false for other ports
        // service: 'Gmail',
        auth: {
            user: 'info@cognisolution.com', // generated ethereal user
            pass: 'Benz300SLR)', // generated ethereal password
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
        // i += 1;
        // if (i === maillist.length) { msg.transport.close() }
    })
    return errMsg
}

module.exports = {
    createSMTPTTransport,
    sendMail
}
