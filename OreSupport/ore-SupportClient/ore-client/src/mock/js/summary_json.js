import { getNumber } from "./mockUtils"

// summary画面表示用データ
export const summary = {
    lineChartData: {
        newVisitis: {
            week: getNumber(7, 10, 1000),
            month: getNumber(7, 10, 1000),
            year: getNumber(7, 10, 1000),
        },
        messages: {
            week: getNumber(7, 10, 1000),
            month: getNumber(7, 10, 1000),
            year: getNumber(7, 10, 1000),
        },
        purchases: {
            week: getNumber(7, 10, 1000),
            month: getNumber(7, 10, 1000),
            year: getNumber(7, 10, 1000),
        },
        shoppings: {
            week: getNumber(7, 10, 1000),
            month: getNumber(7, 10, 1000),
            year: getNumber(7, 10, 1000),
        },
    }
}



