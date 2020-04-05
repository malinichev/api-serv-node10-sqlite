
import * as axios from 'axios'


let axiosInstance = axios.create({
    baseURL: 'https://react24.site:2222/api',
    // baseURL: 'https://my-json-server.typicode.com/malinichev/myApi',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      headers: {
        'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
        }
    }
  });
// let MyHead = {
//   headers: {
//   'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
//   }
// };


export const getHomePageSliderItemApi = () => {
   return axiosInstance.get('/title-slider')
        .then(res=>res.data)
}


export const LogInUserApi = (postData) => {
  
   return axiosInstance.post('/users/login', {user:postData})
        .then(res=>res.data)
}
export const RegisterNewUserApi = (postData) => {
   return axiosInstance.post('/users', postData)
        .then(res=>res.data)
}

export const CatalogItemsApi = {
      getCategoryAndItemsApi () {
          return axiosInstance.get('/')
              .then(res=>res.data)
      },
      addOneNewCategory (dataNewCategory) {
        
        
        let newCat = {
          ...dataNewCategory,
          linkCat: dataNewCategory.categoryName
        }
        // console.log(newCat);
        return (
          axiosInstance.post(`/category/new`, JSON.stringify(newCat) ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },
      delOneCategory (categId) {
        return (
          axiosInstance.post(`/category/${categId}?_method=DELETE`,   {} ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },
      editOneCategory (categId, dataUpdateCat) {
        let updateCat = {
          ...dataUpdateCat,
          linkCat: dataUpdateCat.categoryName
        }
        return (
          axiosInstance.post(`/category/${categId}?_method=PUT`,   JSON.stringify(updateCat) ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },
      addOneNewImage ( categId, itemId, dataNewImage) {
        console.log('API NI')

        return (
          axiosInstance.post(`/category/${categId}/item/${itemId}/im/new`, JSON.stringify(dataNewImage) ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },

      addOneNewItm ( categId, dataNewItem) {
        
        // https://react24.site:2222/api/category/5e74a6cfd6358cbecdc753ca/item/new

        return (
          axiosInstance.post(`/category/${categId}/item/new`, JSON.stringify(dataNewItem) ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },
      updateOneItm ( categId, itemId, dataUpdateItem) {
        // /category/5e7640b4d6358c3971c753ff/item/5e77915dd6358c6874c75427?_method=PUT
        return (
          axiosInstance.post(`/category/${categId}/item/${itemId}?_method=PUT`, JSON.stringify(dataUpdateItem) ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },
      delOneImage (categId, itemId, imageId) {
        // /:idCat/item/:idItem/im/:idImg
        return (
          axiosInstance.post(`/category/${categId}/item/${itemId}/im/${imageId}?_method=DELETE`,   {} ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },
      delOneItm (categId, itemId) {
        return (
          axiosInstance.post(`/category/${categId}/item/${itemId}?_method=DELETE`,   {} ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      }
}
export const homepageSlider1Api = {
      deleteTitleSlider (idDeletedSlider) {
        
        return (
          axiosInstance.post(`/title-slider/${idDeletedSlider}?_method=DELETE`,{},
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }})        
          .then(res=>res.data)    
        );
      },
      addOneNewTitleSlider (dataNewSlide) {
        
        return (
          axiosInstance.post(`/title-slider/new`, JSON.stringify(dataNewSlide) ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      },
      editTitleSlider (SlideData) {
        const {_id, ...data} = SlideData;
        return (
          axiosInstance.post(`/title-slider/${_id}?_method=PUT`,   JSON.stringify(data) ,
          {headers: {
            'Authorization': `Token ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
            }}
        )        
          .then(res=>res.data)    
        );
      }
}
