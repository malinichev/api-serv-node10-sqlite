import {isDataLoad, loadAllUser,delOneUser,isError, initializeAppIfWeHaveADataOfUser} from './app-reduser';
import {authApi} from '../api'



const SET_LOG_IN = 'auth/SET_LOG_IN';

const SET_LOG_OUT = 'auth/SET_LOG_OUT';

const IS_ERROR_IN_AUTH = 'auth/IS_ERROR_IN_AUTH';

type UserType = {
    _id:    String | null
    email:  String | null
    token:  String | null
}

const initState = {
    isLogIn:    false,

    user: {} as UserType | {}
        
};

export type InitStateType = typeof initState

const authReduser = (state = initState, action: any): InitStateType => {
    
    switch (action.type) {
        case SET_LOG_IN:
            return {
                ...state,
                ...state.user,
                user: action.user,
                isLogIn: true
            };
        case SET_LOG_OUT:
            return {
                ...state,
                ...state.user,
                isLogIn: false,
                user:{} 
            };
        
        case IS_ERROR_IN_AUTH:
            return {
                ...state,
                ...state.user,
                isLogIn: false,
                user:{},
            };
        default:
            return state;
    }



};

type setLoginActionType = {
    type: typeof SET_LOG_IN
    user: UserType
}

export const setLogin = (user: UserType): setLoginActionType => ({
    type: SET_LOG_IN,
    user
})


type setLogOutActionType = {
    type: typeof SET_LOG_OUT
}
export const setLogOut = (): setLogOutActionType => ({
    type: SET_LOG_OUT
})

export const logOutUser =  () => {

    return  (dispatch: any) => {
        localStorage.clear()
        dispatch(setLogOut());

    }
}
export const delRootUser =  (idRootUser:string) => {

    return  (dispatch: any) => {
        dispatch(delOneUser(idRootUser));
        localStorage.clear();
        dispatch(setLogOut());
        dispatch(initializeAppIfWeHaveADataOfUser());
        

    }
}




export const loginUser =  (user: UserType) => {
    return async (dispatch: any) => { 
        dispatch(isDataLoad(false));
        try{    
            
            let dataOfLogInUser = await authApi.logInUser(user);
            localStorage.setItem('_id', dataOfLogInUser._id);
            localStorage.setItem('email', dataOfLogInUser.email);
            localStorage.setItem('token', dataOfLogInUser.token);

            dispatch(setLogin(dataOfLogInUser));
            dispatch(isDataLoad(true));
            
        }catch(err){
            console.log('errrr login Auth');
            dispatch(logOutUser());
            
            dispatch(isDataLoad(true));
            dispatch(isError('errrr login Auth'));
            
            
           
            
            
            
        }
    }
}

export const registerNewUser =  (newUser: UserType) => {

    return async (dispatch: any) => {
            dispatch(isDataLoad(false));
        try{
            
            let dataOfRegisterUser = await authApi.registerNewUser(newUser);
            localStorage.setItem('_id', dataOfRegisterUser._id);
            localStorage.setItem('email', dataOfRegisterUser.email);
            localStorage.setItem('token', dataOfRegisterUser.token);
            dispatch(setLogin(dataOfRegisterUser));

            dispatch(loadAllUser());
            dispatch(isDataLoad(true));
        }catch(err){
            console.log('errrr register Auth')
            dispatch(isError('errrr register Auth'));
            dispatch(logOutUser());
            dispatch(isDataLoad(true));
        }
    }
}





export default authReduser