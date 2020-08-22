import { getNumber } from "./mockUtils"


// summary画面表示用データ
export const raddarChart = {
    raddarChartData: [{
        value: getNumber(6, 4000, 10000),
        name: '現在'
    },
    {
        value: getNumber(6, 4000, 10000),
        name: '3ヶ月前'
    }]
}



