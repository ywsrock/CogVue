const Mock = require("mockjs");

var Random = Mock.Random;

/*
  Randomの数字で繰り返して、配列作成
  （桁数、Min、MAX）
 */
export function getNumber(num, start, end) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Random.integer(start, end));
    }
    return array;
}
