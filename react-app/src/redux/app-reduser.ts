import {userApi} from '../api';
import {setLogin} from './auth-reduser'

const LOAD_USERS = 'app/LOAD_USERS';
const DEL_USER = 'app/DEL_USER';

const IS_DATA_LOAD = 'app/IS_DATA_LOAD';
const IS_ERROR = 'app/IS_ERROR';

type  oneUser = {
    _id: String
    email: String
}

export type InitialStateType = {
    
    isDataLoad: Boolean
    isError: Boolean | string
    users: Array<oneUser>
    
}

const initState: InitialStateType = {
        
        isDataLoad:false,
        isError:false,
        users:[]
};

const appReduser = (state = initState, action:any): InitialStateType => {
    switch (action.type) {
        case LOAD_USERS:
            
            return {
                ...state,
                ...state.users,
                users: action.users.users  
            };
       
        case IS_DATA_LOAD:
            
            return {
                ...state,
                isDataLoad: action.isDataLoad  
            };
        case DEL_USER:{
            let idXDel = state.users.findIndex(el=>el._id===action.delUserId)
            return {
                ...state,
                ...state.users,
                users: [...state.users.slice(0, idXDel), ...state.users.slice(idXDel + 1)]
            }
        }
       
        case IS_ERROR:
            return {
                ...state,
                isDataLoad: false,
                isError: action.isError  
            };
      
        default:
            return state;
    }
};

type loadUsersActionType = {
    type: typeof LOAD_USERS
    users: Array<oneUser>
}


const loadUsersInState = (users:Array<oneUser>): loadUsersActionType => ({
    type: LOAD_USERS,
    users
})



type deleteUserActionType = {
    type: typeof DEL_USER
    delUserId: String
}


const deleteUser = (delUserId:String): deleteUserActionType => ({
    type: DEL_USER,
    delUserId
})


type isDataLoadActionType = {
    type: typeof IS_DATA_LOAD
    isDataLoad: Boolean
}

export const isDataLoad = (isDataLoad:Boolean): isDataLoadActionType => ({
    type: IS_DATA_LOAD,
    isDataLoad
})



type isErrorActionType = {
    type: typeof IS_ERROR
    isError: Boolean
}
export const isError = (isError:any): isErrorActionType => ({

    type: IS_ERROR,
    isError
})


export const delOneUser =  (deletedUserID:string) => {

    return async (dispatch: any) => {
        dispatch(isDataLoad(false));
        try{
            
            let dataDelUsers = await userApi.delOneUser(deletedUserID);
            
            dispatch(deleteUser(dataDelUsers._id));
            dispatch(isDataLoad(true));
        
        }catch(err){
            console.log('Errrr del One User');
            dispatch(isError('Errrr del One User, Try register or login!'));
            dispatch(isDataLoad(true));
        }
    }
}
export const loadAllUser =  () => {

    return async (dispatch: any) => {
        dispatch(isDataLoad(false));
        try{
            
        let dataUsers = await userApi.getAllUser();
        
        dispatch(loadUsersInState(dataUsers));
        dispatch(isDataLoad(true));
        
        }catch(err){
            console.log('errrr Get All User');
            dispatch(isError('errrr Get All User'));
            dispatch(isDataLoad(true));
        }
    }
}
export const initializeAppIfWeHaveADataOfUser =  () => {
    return async (dispatch: any) => { 
        
        try{
            dispatch(isDataLoad(false));
            dispatch(loadAllUser());
            if(localStorage.getItem('token')){
                let dataOfLogInUser =  {
                    _id: localStorage.getItem('_id'),
                    email: localStorage.getItem('email'),
                    token: localStorage.getItem('token'),
                };
                dispatch(setLogin(dataOfLogInUser));
            }
    
            dispatch(isDataLoad(true));
            
        }catch(err){
            console.log('errrr initializeApp');
            dispatch(isError('errrr initializeApp'));
        }
        
    }
}
export const setError = (err:any) => {
    return async (dispatch: any) => { 
        dispatch(isError(err));
        dispatch(isDataLoad(true));
    }
}


export default appReduser