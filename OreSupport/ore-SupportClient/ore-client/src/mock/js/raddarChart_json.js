import { getNumber } from "./mockUtils"


// summary画面表示用データ
export const raddarChart = {
    raddarChartData: [{
        value: getNumber(6, 100, 150),
        name: '現在',
        label: {
            show: true,
            textStyle: {
                color: '#000'
            },
            formatter: function (params) {
                return params.value;
            }
        }
    },
    {
        value: getNumber(6, 100, 150),
        name: '3ヶ月前',
        // label: {
        //     show: true,
        //     formatter: function (params) {
        //         return params.value;
        //     }
        // }
    }]
}



