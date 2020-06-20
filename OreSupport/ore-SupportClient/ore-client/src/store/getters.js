const getters = {
    userName: state => state.user.userName,
    info: state => state.user.dataInfo,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    introduction: state => state.user.introduction,
    roles: state => state.user.roles
}


export default getters;