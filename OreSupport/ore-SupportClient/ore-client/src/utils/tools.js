export function sleep(wSec){
    
    var countSec = 0;
    var id = setTimeout(function () {
        countSec ++; 
        // 経過時間 >= 待機時間の場合、待機終了。
        if (countSec >= wSec) {
            // タイマー停止
            clearInterval(id);
        }
    }, wSec);   
}