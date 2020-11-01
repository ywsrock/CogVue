/*
 * 環境定数一覧
 */


// APIサーバーパス
export const ORE_SUPPORT_API_BASE_PATH = "http://localhost:3000/"
// no redirect whitelis
export const WHITELIST = [
    "/userLogin",
    "/register",
    "/userInfo",
    "/top",
    "/blogList",
    "/blog/blog_top",
    "/solution/top",
    "/knowledge/knowledgeDetail",
    "/knowledge/knowledgeList",
]; // no redirect whitelis

// export const STATIC_JS = [
//     "../../../static_src/jquery.js",
//     "../../../static_src/map.js",
//     "../../../static_src/collapse.js",
//     "../../../static_src/carousel.js",
//     "../../../static_src/transition.js",
//     "../../../static_src/dropdown.js",
//     "../../../static_src/tooltip.js",
//     "../../../static_src/tab.js",
//     "../../../static_src/alert.js",
//     "../../../static_src/jquery.colorbox-min.js",
//     "../../../static_src/jquery.flot.min.js",
//     "../../../static_src/jquery.flot.spline.js",
//     "../../../static_src/bootstrap-select.min.js",
//     "../../../static_src/infobox.js",
//     "../../../static_src/markerclusterer.js",
//     "../../../static_src/jquery-google-map.js",
//     "../../../static_src/owl.carousel.js",
//     "../../../static_src/fileinput.min.js",
//     "../../../static_src/superlist.js",
// ]
export const CGEV_INFO = {
    // カスタマーAPIキー）
    CustomerApiKey: "9f6fb392e45701c8d475fc619a48092804e6f827",
    // ユーザシークレット
    ApiUserSecret: "1806b37031b647e953e1798b8966d61ef029568c",
}
export const CGEV_IMAGE_BASE = {
    //イメージベースパス ( proxying 利用)
    // cgev_image_base: "https://personal.tbcare.jp"
    cgev_image_base: "/personalTbcare"
}

export const CGEV_SESSION_KEY = {
    //サマリー
    RECORDSCATEGORIES: 'RECORDSCATEGORIES',
    RECORDSSUMMARY: 'RECORDSSUMMARY',
    RECORDSHISTORIES: 'RECORDSHISTORIES',
    //記憶
    TASK_ID_567: 'TASK_ID_5_6_7',
    //空間
    TASK_ID_1112: 'TASK_ID_11_12',
    //見当識
    TASK_ID_1: 'TASK_ID_1',
    //計画
    TASK_ID_8910: 'TASK_ID_8_9_10',
    //注意
    TASK_ID_234: 'TASK_ID_2_3_4'
}