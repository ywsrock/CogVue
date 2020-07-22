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

/**
 * param1 Function func 実行関数
 * param2 number wait　町時間
 * param3 boolean immediate　実行状態
 * return *
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 前回まで経過時間
    const last = +new Date() - timestamp

    // 前回時間より待ち時間が多い場合、待ち
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 呼び出されたの場合
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 遅延時間存在されない場合、再設定
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
