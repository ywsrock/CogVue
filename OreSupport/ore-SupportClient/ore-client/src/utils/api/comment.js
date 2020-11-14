import request from '@/utils/request'




/**
 * ユーザ登録
 * @param data Object
 * @returns String
 */
export function createComment(data) {
    return request({
        url: '/comment/createComment',
        method: 'post',
        data
    })
}
