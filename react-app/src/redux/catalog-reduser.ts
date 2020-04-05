import {CatalogItemsApi} from '../api';
import {isDataLoad, initializeApp} from './app-reduser';


const DEL_SLIDER1 = 'catalog/DEL_SLIDER1';
const UPDATE_ONE_1SLIDER = 'catalog/UPDATE_ONE_1SLIDER';
const IS_ITEMS_LOAD = 'catalog/IS_ITEMS_LOAD';
const SET_ITEMS = 'catalog/SET_ITEMS';
const IS_ERROR_ITEMS = 'catalog/IS_ERROR_ITEMS';

const SET_CURRENT_CAT = 'catalog/SET_CURRENT_CAT';
const SET_SELECTED_ITEM = 'catalog/SET_SELECTED_ITEM'
const SET_NEW_IMAGE = 'catalog/SET_NEW_IMAGE'
const IS_IMG_LOAD = 'catalog/IS_IMG_LOAD'


type srcImType ={
    _id: Number
    im: String
    __v: Number
}

type ValuesType = {
    srcIm: Array<srcImType>
    _id: Number 
    label: String
    shortRead: String
    fullRead: String
    __v:Number
}

type itemType = {
    values: Array<ValuesType>
    _id:Number
    srcCat: String
    name: String
    categoryName: String
    catFor: String
    linkCat: String
    __v: Number
}


const initState = {
    currentCateg: 'ALL',
    isItemsLoad:false,
    isErrorItems:false,
    isError: false,
    isImgLoad:true,
    selectedItem:[],
    items:[] as Array<itemType>,

};

export type InitStateType = typeof initState


const catalogReduser = (state = initState, action: any): InitStateType => {
    // debugger
    switch (action.type) {
        case SET_CURRENT_CAT:
            return {
                ...state,
                currentCateg: action.currentCateg
            }
        case SET_NEW_IMAGE:
            return {
                ...state,
            }
        case IS_IMG_LOAD:
            return {
                ...state,
                isImgLoad: action.isImgLoad
            }
        
        case SET_SELECTED_ITEM:
            return {
                ...state,
                selectedItem: action.selectedItem
            }
        
       
        case UPDATE_ONE_1SLIDER:
            // let idX = state.hpSliderItems.findIndex(el=>el.id===action.updateDataItem.id)
            return {
                ...state,
                // ...state.hpSliderItems,
                // hpSliderItems: [...state.hpSliderItems.slice(0, idX),action.updateDataItem, ...state.hpSliderItems.slice(idX + 1)]
            }
       
        case IS_ITEMS_LOAD:
            
            return {
                ...state,
                isItemsLoad: action.isItemsLoad  
            };
        case IS_ERROR_ITEMS:
            return {
                ...state,
                isItemsLoad: false,
                isError: action.isError  
            };
        case SET_ITEMS:
            let newIt = [...action.items]
            return {
                ...state,
                ...state.items,
                items: newIt
            };
        case DEL_SLIDER1:
            return {
                ...state
            };
        default:
            return state;
    }
};

type IsItemsLoadActionType = {
    type: typeof IS_ITEMS_LOAD
    isItemsLoad: boolean
}


export const isItemsLoad = (isItemsLoad: boolean): IsItemsLoadActionType => ({
    type: IS_ITEMS_LOAD,
    isItemsLoad
})

type IsImgLoadACActionType = {
    type: typeof IS_IMG_LOAD
    isImgLoad: boolean
}
export const isImgLoadAC = (isImgLoad: boolean): IsImgLoadACActionType => ({
    type: IS_IMG_LOAD,
    isImgLoad
})
type SetAddNewImgACActionType = {
    type: typeof SET_NEW_IMAGE
  
}
export const setAddNewImgAC = (): SetAddNewImgACActionType  => ({
    type: SET_NEW_IMAGE
})
type SetSelectedItemAcActionType = {
    type: typeof IS_ITEMS_LOAD
    selectedItem:Array<string>
  
}
export const setSelectedItemAc = (selectedItem: Array<string>): SetSelectedItemAcActionType => ({
    type: IS_ITEMS_LOAD,
    selectedItem
})
type SetItemsActionType = {
    type: typeof SET_ITEMS
    items:Array<itemType>
  
}
export const setItems = (items: Array<itemType>): SetItemsActionType => ({
    type: SET_ITEMS,
    items
})
type SetCurrentCategACActionType = {
    type: typeof SET_CURRENT_CAT
    currentCateg: string
  
}
export const setCurrentCategAC = (currentCateg: string): SetCurrentCategACActionType => ({
    type: SET_CURRENT_CAT,
    currentCateg
})
type SetErrorItemsActionType = {
    type: typeof IS_ERROR_ITEMS
    err: boolean
  
}
export const setErrorItems = (err: boolean): SetErrorItemsActionType => ({
    type: IS_ERROR_ITEMS,
    err
})



export const setCurrentCateg = (currentCateg: any) => (dispatch: any) => {    
        dispatch(setCurrentCategAC(currentCateg));
}  
export const setSelectedItem = (selectedItem: any) => (dispatch: any) => {   
        console.log(selectedItem) 
        dispatch(setSelectedItemAc(selectedItem));
}  
export const delOneCateg = (idDeletedCateg: String) => async  (dispatch: any) => {    
    try {
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));

        await CatalogItemsApi.delOneCategory(idDeletedCateg)

        dispatch(initializeApp());
        
        dispatch(isItemsLoad(true));
        dispatch(setErrorItems(false));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr dell Categ')
      }

}  
export const updateOneCateg = (idCateg: String, dataUpdateCat: itemType) => async  (dispatch: any) => {  
    try {
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));

        await CatalogItemsApi.editOneCategory(idCateg, dataUpdateCat)

        dispatch(initializeApp());
        
        dispatch(isItemsLoad(true));
        dispatch(setErrorItems(false));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr Update Categ')
      }

}  

export const setNewCategory = (dataNewCategory: itemType) => {
    return async (dispatch: any) => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));

            await CatalogItemsApi.addOneNewCategory(dataNewCategory)
            dispatch(initializeApp());
            
            
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr New Categ')
      }

        
    }
}
export const setNewItem = (categId: String, dataNewItem: ValuesType) => {
    return async (dispatch: any) => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));

            await CatalogItemsApi.addOneNewItm(categId, dataNewItem)
            dispatch(initializeApp());

            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
    
            // console.log(res);
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr New Item')
      }

        
    }
}
export const setUpdateItem = (categId: Number, itemId: Number, dataIt: any) => {
    
    const {im, ...data} = dataIt
    
    console.log(data)
    return async (dispatch: any) => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));

            await CatalogItemsApi.updateOneItm(categId, itemId, 
                data)
            
            let el = await CatalogItemsApi.getCategoryAndItemsApi() 
            
            dispatch(setItems(el))

            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
    
            
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr Update Item')
      }

        
    }
}
export const delOneItem = (categId: any, itemId: any) => async (dispatch: any) => {
    try {
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));

        await CatalogItemsApi.delOneItm(categId, itemId)

        dispatch(initializeApp());
        
        dispatch(isItemsLoad(true));
        dispatch(setErrorItems(false));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr dell Categ')
      }
}
export const setAddNewImg = (categId: Number, itemId: Number, dataNewImage: srcImType) => {
    
    return async (dispatch: any) => {
        try {
            dispatch(isDataLoad(false));
            dispatch(isItemsLoad(false));
            dispatch(isImgLoadAC(false));

            await CatalogItemsApi.addOneNewImage(categId, itemId, dataNewImage)  
            let el = await CatalogItemsApi.getCategoryAndItemsApi() 
            dispatch(setItems(el))
        

            dispatch(isItemsLoad(true));
            dispatch(isImgLoadAC(true));
            dispatch(isDataLoad(true));
            dispatch(setErrorItems(false));
                
        }catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr New Image in item')
      }

        
    }
}
export const delOneImage = (categId: Number, itemId: Number, imageId: Number) => async (dispatch: any) => {
    try {
        dispatch(isImgLoadAC(false));
        dispatch(isDataLoad(false));
        dispatch(isItemsLoad(false));
       
        await CatalogItemsApi.delOneImage(categId, itemId, imageId)
        let el = await CatalogItemsApi.getCategoryAndItemsApi() 
        await dispatch(setItems(el))
    
       
       
        dispatch(isItemsLoad(true));
        dispatch(isDataLoad(true));
        dispatch(setErrorItems(false));
        dispatch(isImgLoadAC(true));
        
            
      } 
    catch(err) {
        
            dispatch(setErrorItems(err));
            dispatch(isItemsLoad(true));
            dispatch(isDataLoad(true));
            console.log('errrr dell Categ')
      }
}




export default catalogReduser