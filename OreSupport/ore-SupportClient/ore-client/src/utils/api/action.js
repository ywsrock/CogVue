import request from "@/utils/request";

/**
 *
 *行動管理　新規
 */
export function saveAction(data) {
    return request({
        url: "/action/saveAction",
        method: "post",
        data,
    });
}

/**
 *
 *行動管理　アクション検索
 */
export function queryAction() {
    return request({
        url: "/action/queryAction",
        method: "get",
    });
}
