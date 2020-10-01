/* 
    ・CogEvoサイトの「記録」ページの「傾向」チャートの「現在」の内容
 */
export const raddarChart = {
    raddarChartData: [{
        name: '現在',
        value: [],
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
        name: '3ヶ月前',
        value: [],
    }]
}



