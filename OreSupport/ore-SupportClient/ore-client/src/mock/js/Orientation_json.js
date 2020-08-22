const Mock = require("mockjs");
import { getNumber } from "./mockUtils"


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
});
var lineData = {
    yearData: {
        OrientationAbility: getNumber(7, 10, 150),
        AttentionAbility: getNumber(7, 11, 150),
        MemoryAbility: getNumber(7, 12, 150),
        PlanAblity: getNumber(7, 13, 150),
        SpatialAbility: getNumber(7, 14, 150)

    },
    monthData: {
        OrientationAbility: getNumber(7, 16, 200),
        AttentionAbility: getNumber(7, 15, 200),
        MemoryAbility: getNumber(7, 14, 200),
        PlanAblity: getNumber(7, 13, 200),
        SpatialAbility: getNumber(7, 12, 200)
    },
    weekData: {
        OrientationAbility: getNumber(7, 10, 200),
        AttentionAbility: getNumber(7, 10, 200),
        MemoryAbility: getNumber(7, 10, 200),
        PlanAblity: getNumber(7, 10, 200),
        SpatialAbility: getNumber(7, 10, 200)
    },
    shoppings: {
        OrientationAbility: getNumber(7, 10, 200),
        AttentionAbility: getNumber(7, 10, 200),
        MemoryAbility: getNumber(7, 10, 200),
        PlanAblity: getNumber(7, 10, 200),
        SpatialAbility: getNumber(7, 10, 200)
    },
}

// 画面表示用データ
export const Orientation = {
    OrientationAbility: {
        Orientation: {
            lineChartData: lineData,
            transactionTableChartData: data.list,
            // チャートlegendData
            legendData: ["見当識 "],
            cardPazulData: {
                //カレントrate
                current_ability_rate: Mock.Random.integer(1, 5),
                //最終利用日
                lastUseDate: Mock.Random.datetime('yyyy-MM-dd'),
                //最高点
                maxPoint: Mock.Random.float(60, 100, 2, 2),
                // 標準点
                standardPoint: Mock.Random.float(60, 100, 2, 2),
                //平均指数
                averageIndex: Mock.Random.float(60, 100, 2, 2),
                //time
                timePoint: Mock.Random.datetime('HH:mm:ss'),
                // medal
                medal0: Mock.Random.integer(1, 100),
                medal1: Mock.Random.integer(1, 100),
                medal2: Mock.Random.integer(1, 100),
                medal3: Mock.Random.integer(1, 100),
                medal4: Mock.Random.integer(1, 100),
                medal5: Mock.Random.integer(1, 100),
                // パズル画像
                pazulImage: "https://personal.tbcare.jp/images/task/1.png",
                // パズル説明
                pazulDec:
                    "日付や曜日、時間を尋ねる問題に答えます。おととい、昨日、今日、明日、あさっての中から出題されます",
            },
        },

        Turtle: {
            lineChartData: lineData,
            transactionTableChartData: data.list,
            // チャートlegendData
            legendData: ["さめがめ "],
            cardPazulData: {
                //カレントrate
                current_ability_rate: Mock.Random.integer(1, 5),
                //最終利用日
                lastUseDate: Mock.Random.datetime('yyyy-MM-dd'),
                //最高点
                maxPoint: Mock.Random.float(60, 100, 2, 2),
                // 標準点
                standardPoint: Mock.Random.float(60, 100, 2, 2),
                //平均指数
                averageIndex: Mock.Random.float(60, 100, 2, 2),
                //time
                timePoint: Mock.Random.datetime('HH:mm:ss'),
                // medal
                medal0: Mock.Random.integer(1, 100),
                medal1: Mock.Random.integer(1, 100),
                medal2: Mock.Random.integer(1, 100),
                medal3: Mock.Random.integer(1, 100),
                medal4: Mock.Random.integer(1, 100),
                medal5: Mock.Random.integer(1, 100),
                // パズル画像
                pazulImage: "https://personal.tbcare.jp/images/task/12.png",
                // パズル説明
                pazulDec:
                    "タッチしてボールを消していくタスクです。同じ色のボールが2つ以上隣り合っていたら消すことができます。",
            },
        },
    }
}



