/**
 *
 * コグエボデータ取得
 * */

import request from "@/utils/cgevRequest";
/* 
------------------------------------------------
    auth / authenticate
------------------------------------------------
[概要]
    ・CustomerAPIKeyとApiUserSecretを利用して認証を行う
    ・認証を行った結果、JSONにてAccessTokenを返却する
    ・このAPIはサーバ間通信でのみ利用が可能（接続元のサーバのグローバルIPによりアクセス制限を行う）
    ・主に特定の利用者に対してのAPI認証を行いたい場合やAccessTokenを取得したい場合に利用する
[パラメータ]
    customer_api_key:
    必須
    TBCさんにて発行された「CustomerAPIKey」

    api_user_secret:
    必須
    CogEvo側にて該当の利用者が発行した「ApiUserSecret」

    [json]
    { "status": 1, "error": 0, "access_token": "e29db16f5bb83febecfde172ef348904b5a18d51" }
 */
export function authenticate(reqObj) {
    return request({
        method: 'get',
        url: '/auth/authenticate',
        params: {
            customer_api_key: reqObj.customer_api_key,
            api_user_secret: reqObj.api_user_secret
        }
    })
}
/* 
------------------------------------------------
    auth / invalidate
------------------------------------------------
[概要]
    ・アクセストークンを破棄し、CogEvoから明示的なログアウトをする
    ・タスクの実行時などは一時的にサーバと利用者間でセッション情報によるログイン状態が保たれている
[パラメータ]
    access_token:
    必須
    APIアクセス時に利用するAccessToken

    [json]
    { "status": 1, "error": 0 }
 */
export function invalidate(reqObj) {
    return request({
        method: 'get',
        url: '/auth/invalidate',
        params:
        {
            access_token: reqObj.access_token
        }
    })
}

/*
------------------------------------------------
run/tasks
------------------------------------------------
[概要]
    ・CogEvo側のタスク実行用トップページを表示する
    ・表示後はCogEvo側にログインしている状態となる（この状態でアクセス可能なページについては調整中です）

[パラメータ]
    access_token:
    必須
    APIアクセス時に利用するAccessToken

    [戻り値]
    無し、直接CogEvoサイト側のページが表示される
 */

export function runTasks(reqObj) {
    return request({
        method: 'get',
        url: '/run/tasks',
        params:
        {
            access_token: reqObj.access_token
        }
    })
}
/*
------------------------------------------------
run/tasks/{course_type}
------------------------------------------------
[概要]
    ・CogEvo側で、指定したタイプのタスクを実行する
    ・5種バランス、クイックチェック、2種おすすめのいずれかを指定可能
    ・タスク個別（12種のいずれか）については、「run/tasks/single」での実行となる
    ・return_urlが設定されている場合、タスク実行完了後に指定されたURLにAccessTokenを付与して遷移する

[パラメータ]
    {course_type}:
    balance（5種バランス）、quick（クイックチェック）、recommend（2種おすすめ）

    access_token:
    必須
    APIアクセス時に利用するAccessToken

    return_url:
    任意
    タスクの実行完了後に遷移するページのURLを指定、更新されたAccessTokenを「?cogevo_api_access_token=xxxxxxx」として付与する

[戻り値]
    無し、直接CogEvoサイト側のページが表示される


 */
export function runTasksCourseType(reqObj) {
    return request({
        method: 'get',
        url: `/run/tasks/${reqObj.course_type}`,
        params:
        {
            access_token: reqObj.access_token,
            return_url: reqObj.return_url
        }
    })
}
/*
------------------------------------------------
run/tasks/single/{task_id}
------------------------------------------------
[概要]
    ・CogEvo側で、指定した個別タスクを実行する
    ・12種からいずれかを指定可能

[パラメータ]
    {task_id}:
    実行したいタスクのタスクIDを指定する

    access_token:
    必須
    APIアクセス時に利用するAccessToken

    return_url:
    任意
    タスクの実行完了後に遷移するページのURLを指定、更新されたAccessTokenを「?cogevo_api_access_token=xxxxxxx」として付与する

[戻り値]
    無し、直接CogEvoサイト側のページが表示される
 */
export function runTasksSingleTaskId(reqObj) {
    return request({
        method: 'get',
        url: `/run/tasks/single/${reqObj.task_id}`,
        params:
        {
            access_token: reqObj.access_token,
            return_url: reqObj.return_url
        }
    })
}

/*
------------------------------------------------
run/tasks/single/{task_id}
------------------------------------------------
[概要]
・CogEvo側で、指定した個別タスクを実行する
・12種からいずれかを指定可能

[パラメータ]
{task_id}:
実行したいタスクのタスクIDを指定する

access_token:
必須
APIアクセス時に利用するAccessToken

return_url:
任意
タスクの実行完了後に遷移するページのURLを指定、更新されたAccessTokenを「?cogevo_api_access_token=xxxxxxx」として付与する

[戻り値]
無し、直接CogEvoサイト側のページが表示される
 */

export function recordsSummary(reqObj) {
    return request({
        method: 'get',
        url: '/records/summary',
        params:
        {
            access_token: reqObj.access_token,
            api_user_secret: reqObj.api_user_secret,
            customer_api_key: reqObj.customer_api_key,
        }
    })
}

/*
------------------------------------------------
    records / histories
------------------------------------------------
[概要]
    ・対象の利用者の直近20利用日の指数を取得する
    ・CogEvoサイトの「記録」ページの「トレーニング履歴」の内容

[パラメータ]
    access_token:
    利用者からのアクセスの際、必須
    APIアクセス時に利用するAccessToken

    customer_api_key:
    サーバ間通信の際、必須
    TBCさんにて発行された「CustomerAPIKey」

    api_user_secret:
    サーバ間通信の際、必須
    CogEvo側にて該当の利用者が発行した「ApiUserSecret」
 */

export function recordsHistories(reqObj) {
    return request({
        method: 'get',
        url: '/records/histories',
        params:
        {
            access_token: reqObj.access_token,
            api_user_secret: reqObj.api_user_secret,
            customer_api_key: reqObj.customer_api_key,
        }
    })
}

/*
------------------------------------------------
    records / categories
------------------------------------------------
[概要]
    ・対象の利用者の現時点でのカテゴリごとの指数平均を取得する
    ・CogEvoサイトの「記録」ページの「傾向」チャートの「現在」の内容

[パラメータ]
    access_token:
    利用者からのアクセスの際、必須
    APIアクセス時に利用するAccessToken

    customer_api_key:
    サーバ間通信の際、必須
    TBCさんにて発行された「CustomerAPIKey」

    api_user_secret:
    サーバ間通信の際、必須
    CogEvo側にて該当の利用者が発行した「ApiUserSecret」
 */

export function recordsCategories(reqObj) {
    return request({
        method: 'get',
        url: '/records/categories',
        params:
        {
            access_token: reqObj.access_token,
            api_user_secret: reqObj.api_user_secret,
            customer_api_key: reqObj.customer_api_key,
        }
    })
}
/*
------------------------------------------------
    records / tasks / { task_id } / summary
------------------------------------------------
[概要]
    ・指定したタスクについての記録を概要を取得する
    ・CogEvoサイトの「タスクごとの記録」ページにてタスクを選択した際の右エリアの内容

[パラメータ]
    { task_id }:
    実行したいタスクのタスクIDを指定する

    access_token:
    必須
    APIアクセス時に利用するAccessToken 
*/

export function recordsTasksIdSummary(reqObj) {
    return request({
        method: 'get',
        url: `/records/tasks/${reqObj.task_id}/summary`,
        params:
        {
            access_token: reqObj.access_token,
        }
    })
}
/*
------------------------------------------------
    records / tasks / { task_id } / histories
------------------------------------------------
[概要]
    ・指定したタスクについて、20回分の記録を取得する
    ・CogEvoサイトの「タスクごとの記録」ページにてタスクを選択した際の下部・左エリアの内容

[パラメータ]
    { task_id }:
    実行したいタスクのタスクIDを指定する

    access_token:
    必須
    APIアクセス時に利用するAccessToken
 */
export function recordsTasksIdHistories(reqObj) {
    return request({
        method: 'get',
        url: `records/tasks/${reqObj.task_id}/histories`,
        params:
        {
            access_token: reqObj.access_token,
        }
    })
}
/*
------------------------------------------------
    records / tasks / { task_id } / histories / per_month
------------------------------------------------
[概要]
    ・指定したタスクについて、月末時点での指数データを過去12ヶ月分取得する

[パラメータ]
    { task_id }:
    実行したいタスクのタスクIDを指定する

    access_token:
    必須
    APIアクセス時に利用するAccessToken
 */
export function recordsTasksIdHistoriesPerMonth(reqObj) {
    return request({
        method: 'get',
        url: `records/tasks/${reqObj.task_id}/histories/per_month`,
        params:
        {
            access_token: reqObj.access_token,
        }
    })
}


/* ------------------------------------------------
    stats / { type }
------------------------------------------------
[概要]
    ・CogEvo全利用者を対象にした、タスク統計情報を取得する

[パラメータ]
    { type }:
    score（平均点）、performance（平均指数）、count（利用回数）

    customer_api_key:
    必須
    TBCさんにて発行された「CustomerAPIKey」
 */
export function statsType(reqObj) {
    return request({
        method: 'get',
        url: `stats/${reqObj.type}`,
        params:
        {
            customer_api_key: reqObj.customer_api_key,
        }
    })
}