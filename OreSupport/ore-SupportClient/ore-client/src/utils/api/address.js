import request from "@/utils/request";

/**
 * 住所自動検索
 * @returns String
 */
export function autoSearch(data) {
  return request({
    url: "/address/autoSearch",
    method: "post",
    data,
  });
}
