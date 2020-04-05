import {isDataLoad} from './app-reduser';
import {LogInUserApi, RegisterNewUserApi} from '../api'



const SET_LOG_IN = 'auth/SET_LOG_IN';
const IS_LOG_IN = 'auth/IS_LOG_IN';
const SET_LOG_OUT = 'auth/SET_LOG_OUT';
const SET_ME = 'auth/SET_ME';
const IS_ERROR_LOGIN = 'auth/IS_ERROR_LOGIN';

const initState = {
        isLogIn:false,
        user:{},
        isErr: false,
};

export type InitStateType = typeof initState

const authReduser = (state = initState, action: any): InitStateType => {
    
    switch (action.type) {
        case SET_LOG_IN:
            return {
                ...state,
                ...state.user,
                isLogIn: true,
                user: action.user.user
            };
        case IS_LOG_IN:
            return {
                ...state,
                ...state.user,
                isLogIn: true,
                user: action.user
                
            };
        case SET_LOG_OUT:
            return {
                ...state,
                ...state.user,
                isLogIn: false,
                user:{}
            };
        case SET_ME:
            return {
                ...state,
                isLogIn: true,
            };
        case IS_ERROR_LOGIN:
            return {
                ...state,
                ...state.user,
                isErr: true,
                isLogIn: false,
                user:{},

            };
        
        
        default:
            return state;
    }



};

type setLoginActionType = {
    type: typeof SET_LOG_IN
    user: any
}
type setIsLogInActionType = {
    type: typeof IS_LOG_IN
    user: any
}
type setLogOutActionType = {
    type: typeof SET_LOG_OUT
}
type setMeActionType = {
    type: typeof SET_ME
}

export const setLogin = (user: any): setLoginActionType => ({
    type: SET_LOG_IN,
    user
})
export const setIsLogIn = (user: any): setIsLogInActionType => ({
    type: IS_LOG_IN,
    user
})
export const setLogOut = (): setLogOutActionType => ({
    type: SET_LOG_OUT
})
export const setMe = (): setMeActionType => ({
    type: SET_ME
})


export const loginUser =  (user: any) => {

    return async (dispatch: any) => {
      
       
        dispatch(isDataLoad(false));
        try{
        
        let dataUser = await LogInUserApi(user);
        localStorage.setItem('token', dataUser.user.token);
        localStorage.setItem('email', dataUser.user.email);
        
        dispatch(setLogin(dataUser));
        dispatch(isDataLoad(true));
        
        }catch(err){
            console.log('errrr login Auth')
        }
    }
}
export const registerNewUser =  (newUser: any) => {

    return async (dispatch: any) => {
        let myUser = {user:newUser}
       
        dispatch(isDataLoad(false));
        try{
        
        let dataUser = await RegisterNewUserApi(myUser);
        console.log(dataUser);
        dispatch(setLogin(dataUser));
        dispatch(isDataLoad(true));
        
        }catch(err){
            console.log('errrr register Auth')
        }
    }
}
export const logOutUser=  () => {

    return  (dispatch: any) => {
        localStorage.clear()
        dispatch(setLogOut()); 

    }
}


export default authReduser