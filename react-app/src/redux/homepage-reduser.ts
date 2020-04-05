import {homepageSlider1Api, getHomePageSliderItemApi} from '../api';

import {stopSubmit} from 'redux-form';
import {isDataLoad} from './app-reduser';



const DEL_SLIDER1 = 'homepage/DEL_SLIDER1';
const UPDATE_ONE_1SLIDER = 'homepage/UPDATE_ONE_1SLIDER';
const IS_SLIDER1_LOAD = 'homepage/IS_SLIDER1_LOAD';
const SET_HOMEPAGE_SLIDER_ITEMS = 'homepage/SET_HOMEPAGE_SLIDER_ITEMS';
const IS_ERROR_HOMEPAGE = 'homepage/IS_ERROR';
const SET_ONE_TITLE_SLIDER = 'homepage/SET_ONE_TITLE_SLIDER';

type hpSliderItemsType = {
    _id: Number
    srcCat: String
    catFor: String
    __v: Number
}


const initState = {
    isSlider1Load:false,
    isErrorHP:false,
    isError: false,
    hpSliderItems:[] as Array<hpSliderItemsType>,    
    isLoad: false
};
export type InitStateType = typeof initState

const homepageReduser = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case SET_ONE_TITLE_SLIDER:
            return {
                ...state,
                ...state.hpSliderItems,
                hpSliderItems: [...state.hpSliderItems, action.hpSliderItems]
            }
        case UPDATE_ONE_1SLIDER:
            // let idX = state.hpSliderItems.findIndex(el=>el.id===action.updateDataItem.id)
            return {
                ...state,
                // ...state.hpSliderItems,
                // hpSliderItems: [...state.hpSliderItems.slice(0, idX),action.updateDataItem, ...state.hpSliderItems.slice(idX + 1)]
            }
       
        case IS_SLIDER1_LOAD:
            
            return {
                ...state,
                isSlider1Load: action.isSlider1Load  
            };
        case IS_ERROR_HOMEPAGE:
            return {
                ...state,
                isLoad: false,
                isError: action.isError  
            };
        case SET_HOMEPAGE_SLIDER_ITEMS:
            
            return {
                ...state,
                ...state.hpSliderItems,
                hpSliderItems: [...action.hpSliderItems]
            };
        case DEL_SLIDER1:
            return {
                ...state
            };
        default:
            return state;
    }
};

type IsSlider1LoadActionType = {
    type: typeof IS_SLIDER1_LOAD,
    isSlider1Load: boolean
}

export const isSlider1Load = (isSlider1Load: boolean): IsSlider1LoadActionType => ({
    type: IS_SLIDER1_LOAD,
    isSlider1Load
})


type SetHpSliderItemsActionType = {
    type: typeof SET_HOMEPAGE_SLIDER_ITEMS,
    hpSliderItems: Array<hpSliderItemsType>
}
export const setHpSliderItems = (hpSliderItems: Array<hpSliderItemsType>): SetHpSliderItemsActionType => ({
    type: SET_HOMEPAGE_SLIDER_ITEMS,
    hpSliderItems
})


type SetErrorHPActionType = {
    type: typeof IS_ERROR_HOMEPAGE,
    err: boolean
}
export const setErrorHP = (err: boolean): SetErrorHPActionType => ({
    type: IS_ERROR_HOMEPAGE,
    err
})


type setOneTitleSliderActionType = {
    type: typeof SET_ONE_TITLE_SLIDER,
    hpSliderItems: Array<hpSliderItemsType>
}
export const setOneTitleSlider = (hpSliderItems: Array<hpSliderItemsType>): setOneTitleSliderActionType => ({
    type: SET_ONE_TITLE_SLIDER,
    hpSliderItems
})

type updateOne1SliderActionType = {
    type: typeof UPDATE_ONE_1SLIDER,
   
}
export const updateOne1Slider = (): updateOne1SliderActionType => ({
    type: UPDATE_ONE_1SLIDER
})



export const updateOneHPSlider1 = (updateDataItem: hpSliderItemsType) => async  (dispatch: any) => {    
        try {
            dispatch(isDataLoad(false));
            dispatch(isSlider1Load(false));

            await homepageSlider1Api.editTitleSlider(updateDataItem)
            let hpSliderItems = await getHomePageSliderItemApi()

            dispatch(setHpSliderItems(hpSliderItems))
            dispatch(isSlider1Load(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorHP(false));
            
            
                
          } 
        catch(err) {
            let action = 
            stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                dispatch(action);
                dispatch(setErrorHP(err));
                dispatch(isDataLoad(true));
                dispatch(isSlider1Load(true));
                console.log('errrr dell slider')
          }

}  
export const delOneHPSlider1 = (idDeletedSlider: String) => async  (dispatch: any) => {    
        try {
            dispatch(isDataLoad(false));
            dispatch(isSlider1Load(false));

            await homepageSlider1Api.deleteTitleSlider(idDeletedSlider)
            let hpSliderItems = await getHomePageSliderItemApi()

            dispatch(setHpSliderItems(hpSliderItems))
            dispatch(isSlider1Load(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorHP(false));
                
                
          } 
        catch(err) {
            let action = 
            stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                dispatch(action);
                dispatch(setErrorHP(err));
                dispatch(isDataLoad(true));
                dispatch(isSlider1Load(true));
                console.log('errrr dell slider')
          }

}  
export const setNewSlide1InHomepage= (newSliderData: hpSliderItemsType) => {
    return async( dispatch: any) => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isSlider1Load(false));

            await homepageSlider1Api.addOneNewTitleSlider(newSliderData)
            let getSliderItemsWithNewSlideronServer = await getHomePageSliderItemApi()
            
            dispatch(setHpSliderItems(getSliderItemsWithNewSlideronServer))
            dispatch(isSlider1Load(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorHP(false));
    
            
                
        }catch(err) {
                let action = stopSubmit('editPostForm', {_error:'Something wrong!! Try ealse!!'});
                    dispatch(action);
                    dispatch(setErrorHP(err));
                    dispatch(isSlider1Load(true));
                    dispatch(isDataLoad(true));
                    console.log('errrr Create New slider')
              }


        
    }
}






export default homepageReduser