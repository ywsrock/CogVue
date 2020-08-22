import Mock from "mockjs"
// import { getNumber } from "./mockUtils"



// summary画面表示用データ

var data = Mock.mock({
    'list|7': [{
        'No|+1': 1,
        timestamp: new Date().getTime(),
        username: Mock.Random.first(),
        ability: Mock.Random.integer(1, 1000),
        'status|1': ['success', 'pending']
    }]
})

export const transactionTable = {

    transactionTableChartData: data.list

}



