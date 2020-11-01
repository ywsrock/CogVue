import request from "@/utils/request";

/**
 *
 * 行動管理新規
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
 *行動管理アクション検索
 */
export function queryAction() {
    return request({
        url: "/action/queryAction",
        method: "get",
    });

}

/**
 *
 * 行動管理アクション削除
 */
export function destroyAction(id) {
    return request({
        url: "/action/destroyAction",
        method: "get",
        params: { id: id },
    });
}

