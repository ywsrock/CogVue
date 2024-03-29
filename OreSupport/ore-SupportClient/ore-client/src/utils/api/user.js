import request from "@/utils/request";

/**
 * ユーザログイン
 * @param data Object
 * @returns String
 */
export function login(data) {
    return request({
        url: "/user/login",
        method: "post",
        data,
    });
}

/**
 * パスワードリセット
 * @param data Object
 * @returns String
 */
export function restPassword(data) {
    return request({
        url: "user/restPassword",
        method: "post",
        data
    })
}

/**
 * ユーザ登録
 * @param data Object
 * @returns String
 */
export function singUp(data) {
    return request({
        url: "/user/singUp",
        method: "post",
        data,
    });
}

/**
 * ユーザ情報表示
 * @param token String
 * @returns String
 */
export function getInfo(token, loginType = "normal") {
    return request({
        url: "/user/profileInfo",
        method: "get",
        params: { token, loginType },
    });
}

/**
 * ユーザ情報表示
 * @param token String
 * @returns String
 */
export function getProfileInfo(token, loginType = "normal") {
    return request({
        url: "/user/profileInfo",
        method: "get",
        params: { token, loginType },
    });
}
/**
 * ユーザプロフィール更新
 * @param data String
 * @returns String
 */
export function updateUser(data) {
    return request({
        url: "user/updatePro",
        method: "post",
        data,
    });
}

/**
 * ユーザ画像アップロード
 * @param data String
 * @returns String
 */
export function imageUp(data) {
    return request({
        url: "user/imageUp",
        method: "post",
        data,
    });
}

/**
 * ユーザログアウト
 */
export function logout() {
    return request({
        url: "user/logout",
        method: "post",
    });
}

/**
 * 各種設定(権限設定)
 * @param data Object
 * @returns String
 */
export function varousSetting(data) {
    return request({
        url: "user/varousSetting",
        method: "post",
        data
    })
}

/**
 * 各種設定(パスワードリセット)
 * @param data Object
 * @returns String
 */
export function passwordSetting(data) {
    return request({
        url: "user/passwordSetting",
        method: "post",
        data
    })
}

/**
 * 各種設定(初期表示)
 * @param data Object
 * @returns String
 */
export function showUserPower() {
    return request({
        url: "user/showUserPower",
        method: "get",
    })
}

