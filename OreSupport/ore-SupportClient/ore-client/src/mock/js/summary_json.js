import { getNumber } from "./mockUtils"

// summary画面表示用データ
export const summary = {
    lineChartData: {
        yearData: {
            OrientationAbility: getNumber(7, 10, 150),
            AttentionAbility: getNumber(7, 10, 150),
            MemoryAbility: getNumber(7, 10, 150),
            PlanAblity: getNumber(7, 10, 150),
            SpatialAbility: getNumber(7, 10, 150)

        },
        monthData: {
            OrientationAbility: getNumber(7, 10, 1000),
            AttentionAbility: getNumber(7, 10, 1000),
            MemoryAbility: getNumber(7, 10, 1000),
            PlanAblity: getNumber(7, 10, 1000),
            SpatialAbility: getNumber(7, 10, 1000)
        },
        weekData: {
            OrientationAbility: getNumber(7, 10, 1000),
            AttentionAbility: getNumber(7, 10, 1000),
            MemoryAbility: getNumber(7, 10, 1000),
            PlanAblity: getNumber(7, 10, 1000),
            SpatialAbility: getNumber(7, 10, 1000)
        },
        shoppings: {
            OrientationAbility: getNumber(7, 10, 1000),
            AttentionAbility: getNumber(7, 10, 1000),
            MemoryAbility: getNumber(7, 10, 1000),
            PlanAblity: getNumber(7, 10, 1000),
            SpatialAbility: getNumber(7, 10, 1000)
        },
    }
}



