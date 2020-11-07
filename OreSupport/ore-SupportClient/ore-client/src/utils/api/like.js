import request from '@/utils/request'

/**
 * いいね登録
 */
export function createLike(data) {
  return request({
    url: "/like/create",
    method: "post",
    data,
  });
}

/**
 * いいね取得
 */
export function getLikes(data) {
  return request({
    url: "/like/index",
    method: "post",
    data,
  });
}

/**
 * いいね削除
 */
export function destroyLike(data) {
  return request({
    url: "/like/destroy",
    method: "post",
    data
  });
}
