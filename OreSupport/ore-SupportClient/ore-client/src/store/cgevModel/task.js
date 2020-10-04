import { getNumber } from "@/utils/mockUtils"


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

export const TaskData = {
    Flashlight: {
        cardPazulData: {
            lineChartData: lineData,
            task_id: "",
            category_id: 0,
            category_name: "",
            task_name: "",
            task_desc: "",
            star: 0,
            score: 0,
            age: 0,
            score_max: 0,
            score_age: 0,
            performance: 0,
            playtime: "00:00",
            rank_count_5: 0,
            rank_count_4: 0,
            rank_count_3: 0,
            rank_count_2: 0,
            rank_count_1: 0,
            rank_count_0: 0,
            last_updated_at: "----",
            task_image: "",
            recents: []
        },
    },

    CardMemory: {
        cardPazulData: {
            lineChartData: lineData,
            task_id: "",
            category_id: 0,
            category_name: "",
            task_name: "",
            task_desc: "",
            age: 0,
            rank: "0",
            star: 0,
            score: 0,
            score_max: 0,
            score_age: 0,
            performance: 0,
            playtime: "00:00",
            rank_count_5: 0,
            rank_count_4: 0,
            rank_count_3: 0,
            rank_count_2: 0,
            rank_count_1: 0,
            rank_count_0: 0,
            last_updated_at: "----",
            task_image: "",
            recents: []
        },
    },
    Story: {
        cardPazulData: {
            lineChartData: lineData,
            task_id: "",
            category_id: 0,
            category_name: "",
            task_name: "ス",
            task_desc: "",
            age: 0,
            rank: "0",
            star: 0,
            score: 0,
            score_max: 0,
            score_age: 0,
            performance: 0,
            playtime: "00:00",
            rank_count_5: 0,
            rank_count_4: 0,
            rank_count_3: 0,
            rank_count_2: 0,
            rank_count_1: 0,
            rank_count_0: 0,
            last_updated_at: "----",
            task_image: "",
            recents: []
        },
    }
}



