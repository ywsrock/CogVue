const getters = {
    userName: state => state.user.userName,
    info: state => state.user.dataInfo,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    introduction: state => state.user.introduction,
    roles: state => state.user.roles,
    get_id: state => state.blog.id,
    get_title: state => state.blog.title,
    get_content: state => state.blog.content,
    get_userName: state => state.user.userName,
    get_userProfile: state => state.blog.userProfile,
    accessToken: (state) => state.cgev.access_token,
    apiUserSecret: (state) => state.cgev.api_user_secret,
    status: (state) => state.cgev.status,
    error: (state) => state.cgev.error,
    data: (state) => state.cgev.data,
    action: (state) => state.action.actionData,
    get_comment: state => state.comment,

}


export default getters;