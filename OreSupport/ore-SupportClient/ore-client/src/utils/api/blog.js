import request from '@/utils/request'




/**
 * ユーザ登録
 * @param data Object
 * @returns String
 */
export function createBlog(data) {
    return request({
        url: '/blog/create',
        method: 'post',
        data
    })
}

/**
 * ブログ取得
 * @returns String
 */
// export function getBlogList(data) {
//     return request({
//         url: '/blog/bloglist',
//         method: 'post',
//         data
//     })
// }
// export function getBlogList(param) {
//     return request({
//         url: '/blog/bloglist?myblog=' + param['myblog'],
//         method: 'get',
//     })
// }


export function getBlogList(param) {
    return request({
        url: param['myblog'] ?  '/blog/bloglist?myblog=' + param['myblog'] :  '/blog/bloglist',
        method: 'get',
    })
}


export function getBlogDetail(blogID) {
    return request({
        url: '/blog/blogdetail',
        method: 'get',
        params: { blogID }
    })
}

export function blogDelete(blogID) {
    return request({
        url: '/blog/blogDelete',
        method: 'get',
        params: { blogID }
    })
}

export function viewBlog(token) {
    return request({
        url: '/blog/view',
        method: 'get',
        params: { token }

    })
}

export function blogUpdate(data) {
    return request({
        url: '/blog/blogUpdate',
        method: 'post',
        data
    })
}

export function postComment(data) {
    return request({
        url: '/blog/postComment',
        method: 'post',
        data
    })
}

export function searchBlog(data) {
    return request({
        url: '/blog/searchBlog',
        method: 'post',
        data
    })
}

export function imageDelete(blogID) {
    return request({
        url: '/blog/imageDelete',
        method: 'post',
        params: { blogID }
    })
}
