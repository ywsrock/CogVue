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
    get_comment: state => state.comment,
    get_userName: state => state.user.userName
}


export default getters;