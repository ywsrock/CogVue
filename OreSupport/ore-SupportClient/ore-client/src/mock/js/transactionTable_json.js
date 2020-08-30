import Mock from "mockjs"
// import { getNumber } from "./mockUtils"



// summary画面表示用データ

var data = Mock.mock({
    'list|100': [{
        'No|+1': 1,
        // 利用日
        UseDate: Mock.Random.date('yyyy-MM-dd'),
        // 見当識
        Orientation: Mock.Random.float(60, 100, 0, 2),
        // 視覚探索
        VisualSearch: Mock.Random.float(50, 100, 0, 2),
        // 双子探し
        TwinsSearch: Mock.Random.float(40, 100, 0, 2),
        // ストップウォッチ
        StopWatch: Mock.Random.float(30, 100, 0, 2),
        // フラッシュライト
        Flashlight: Mock.Random.float(20, 100, 0, 2),
        // カード記憶
        CardMemory: Mock.Random.float(10, 100, 0, 2),
        // ストーリー
        Story: Mock.Random.float(20, 100, 0, 2),
        // ルート99
        Route99: Mock.Random.float(30, 100, 0, 2),
        // ステップ
        Step: Mock.Random.float(40, 100, 0, 2),
        // ナンバーステップ
        NumberStep: Mock.Random.float(50, 100, 0, 2),
        // ジャストフィット
        JustFit: Mock.Random.float(60, 100, 0, 2),
        // さめがめ
        Turtle: Mock.Random.float(70, 100, 0, 2)
    }]
})

export const transactionTable = {

    transactionTableChartData: data.list

}



