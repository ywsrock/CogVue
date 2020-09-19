import request from "@/utils/request";

/**
 * お知らせ取得
 * @returns String
 */
export function getInformations() {
  return request({
    url: "/information/publicList",
    method: "get",
  });
}
