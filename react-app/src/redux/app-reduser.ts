import {getHomePageSliderItemApi, CatalogItemsApi} from '../api';
import {setIsLogIn} from './auth-reduser';
import {isSlider1Load, setHpSliderItems} from './homepage-reduser';
import {setItems, isItemsLoad} from './catalog-reduser';




const IS_DATA_LOAD = 'app/IS_DATA_LOAD';
const IS_ERROR = 'app/IS_ERROR';
const IS_INDEX = 'app/IS_INDEX';

export type InitialStateType = {
    isIndex: Boolean
    isDataLoad: Boolean
    isError: Boolean
    isLoad: Boolean
}

const initState: InitialStateType = {
        isIndex: true,
        isLoad:false,
        isDataLoad:false,
        isError:false,
};

const appReduser = (state = initState, action:any): InitialStateType => {
    switch (action.type) {
       
        case IS_INDEX:
            
            return {
                ...state,
                isIndex: action.isIndex  
            };
       
        case IS_DATA_LOAD:
            
            return {
                ...state,
                isDataLoad: action.isDataLoad  
            };
       
        case IS_ERROR:
            return {
                ...state,
                isLoad: false,
                isError: action.isError  
            };
      
        default:
            return state;
    }
};

type isDataLoadActionType = {
    type: typeof IS_DATA_LOAD
    isDataLoad: Boolean
}
type setIsIndexACActionType = {
    type: typeof IS_INDEX
    isIndex: Boolean
}

type isErrorActionType = {
    type: typeof IS_ERROR
    isError: Boolean
}

export const isDataLoad = (isDataLoad:Boolean): isDataLoadActionType => ({
    type: IS_DATA_LOAD,
    isDataLoad
})
export const setIsIndexAC = (isIndex:Boolean):setIsIndexACActionType => ({
    type: IS_INDEX,
    isIndex
})

export const isError = (isError:any): isErrorActionType => ({

    type: IS_ERROR,
    isError
})


export const setIsIndex = (isIndex:any) => async (dispatch:any) => {
    dispatch(setIsIndexAC(isIndex))
}
export const initializeApp = () => async (dispatch:any) => {

    try{
        
        dispatch(isDataLoad(false));
        dispatch(isSlider1Load(false));
        dispatch(isItemsLoad(false));
        dispatch(isError(false));

        let hpSliderItems =  getHomePageSliderItemApi()
        let categoryAndItems =  CatalogItemsApi.getCategoryAndItemsApi()

        if(!!localStorage.getItem('token')){
            dispatch(setIsLogIn({
                email:localStorage.getItem('email'),
                token:localStorage.getItem('token'),
            }));
            
        }
        
        let el = await Promise.all([hpSliderItems, categoryAndItems])

        dispatch(setHpSliderItems(el[0]))
        dispatch(setItems(el[1]))
        dispatch(isSlider1Load(true));
        dispatch(isItemsLoad(true));
        dispatch(isDataLoad(true));
        dispatch(isError(false));
    }catch(err){
        console.log('errrr')
    }  
}


export default appReduser