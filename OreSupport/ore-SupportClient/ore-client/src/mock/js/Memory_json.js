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
export const memory = {
    MemoryAbility: {
        Flashlight: {
            cardPazulData: {
                lineChartData: lineData,
                recents: data.list,
                // チャートtask_name
                task_name: "フラッシュライト ",
                //カレントrate
                star: Mock.Random.integer(1, 5),
                //最終利用日
                last_updated_at: Mock.Random.datetime('yyyy-MM-dd'),
                //最高点
                score_max: Mock.Random.float(60, 100, 2, 2),
                // 標準点
                score_age: Mock.Random.float(60, 100, 2, 2),
                //平均指数
                performance: Mock.Random.float(60, 100, 2, 2),
                //time
                playtime: Mock.Random.datetime('HH:mm:ss'),
                // rank_count_
                rank_count_0: Mock.Random.integer(1, 100),
                rank_count_1: Mock.Random.integer(1, 100),
                rank_count_2: Mock.Random.integer(1, 100),
                rank_count_3: Mock.Random.integer(1, 100),
                rank_count_4: Mock.Random.integer(1, 100),
                rank_count_5: Mock.Random.integer(1, 100),
                // パズル画像
                task_image: "https://personal.tbcare.jp/images/task/5.png",
                // パズル説明
                task_desc:
                    "ライトが光る順番を記憶し、次にその順番でライトをタッチしていくタスクです。",
            },
        },

        CardMemory: {
            cardPazulData: {
                lineChartData: lineData,
                recents: data.list,
                // チャートtask_name
                task_name: "カード記憶 ",
                //カレントrate
                star: Mock.Random.integer(1, 5),
                //最終利用日
                last_updated_at: Mock.Random.datetime('yyyy-MM-dd'),
                //最高点
                score_max: Mock.Random.float(60, 100, 2, 2),
                // 標準点
                score_age: Mock.Random.float(60, 100, 2, 2),
                //平均指数
                performance: Mock.Random.float(60, 100, 2, 2),
                //time
                playtime: Mock.Random.datetime('HH:mm:ss'),
                // rank_count_
                rank_count_0: Mock.Random.integer(1, 100),
                rank_count_1: Mock.Random.integer(1, 100),
                rank_count_2: Mock.Random.integer(1, 100),
                rank_count_3: Mock.Random.integer(1, 100),
                rank_count_4: Mock.Random.integer(1, 100),
                rank_count_5: Mock.Random.integer(1, 100),
                // パズル画像
                task_image: "https://personal.tbcare.jp/images/task/6.png",
                // パズル説明
                task_desc:
                    "次々にカードをめくり、同じ記号のカードが一度でも開かれていれば「ある」、無ければ「ない」を選んでいきます。",
            },
        },
        Story: {
            cardPazulData: {
                lineChartData: lineData,
                recents: data.list,
                // チャートtask_name
                task_name: "ストーリー ",
                //カレントrate
                star: Mock.Random.integer(1, 5),
                //最終利用日
                last_updated_at: Mock.Random.datetime('yyyy-MM-dd'),
                //最高点
                score_max: Mock.Random.float(60, 100, 2, 2),
                // 標準点
                score_age: Mock.Random.float(60, 100, 2, 2),
                //平均指数
                performance: Mock.Random.float(60, 100, 2, 2),
                //time
                playtime: Mock.Random.datetime('HH:mm:ss'),
                // rank_count_
                rank_count_0: Mock.Random.integer(1, 100),
                rank_count_1: Mock.Random.integer(1, 100),
                rank_count_2: Mock.Random.integer(1, 100),
                rank_count_3: Mock.Random.integer(1, 100),
                rank_count_4: Mock.Random.integer(1, 100),
                rank_count_5: Mock.Random.integer(1, 100),
                // パズル画像
                task_image: "https://personal.tbcare.jp/images/task/7.png",
                // パズル説明
                task_desc:
                    "1分間表示された文章を読んで内容を覚え、その後で設問に答えるタスクです。文章を読む時間が短ければ短いほど得点が高くなります。",
            },
        }
    }
}



