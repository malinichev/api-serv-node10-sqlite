export const getAllUser = (state) => {
    return state.app.users
}

export const isDataLoad = (state) => {
    return state.app.isDataLoad
}
export const isLogin = (state) => {
    return state.auth.isLogIn
}
export const meInfo = (state) => {
    return state.auth.user
}
export const errorApp = (state) => {
    return state.app.isError
}