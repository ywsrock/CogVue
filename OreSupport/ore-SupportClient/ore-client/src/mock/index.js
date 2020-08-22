const Mock = require("mockjs")
import { summary } from "./js/summary_json"
import { raddarChart } from "./js/raddarChart_json"
import { barChart } from "./js/barChart_json"
import { boxCard } from "./js/boxCard_json"
import { comment } from "./js/comment_json"
import { pieChart } from "./js/pieChart_json"
import { transactionTable } from "./js/transactionTable_json"



/*
 Mock.mock(rurl, rtype, template) モックした結果
 */

//summary
Mock.mock('/api/personal/CogEvo/summary', 'get', summary);

// RaddarChart 
Mock.mock('/api/personal/CogEvo/raddarChart', 'get', raddarChart);

// barChart
Mock.mock('/api/personal/CogEvo/barChart', 'get', barChart);

// boxCard
Mock.mock('/api/personal/CogEvo/boxCard', 'get', boxCard);

// comment
Mock.mock('/api/personal/CogEvo/comment', 'get', comment);

// pieChart
Mock.mock('/api/personal/CogEvo/pieChart', 'get', pieChart);

// transactionTable
Mock.mock('/api/personal/CogEvo/transactionTable', 'get', transactionTable);
