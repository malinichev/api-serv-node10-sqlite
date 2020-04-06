
import * as axios from 'axios'


let axiosInstance = axios.create({
    baseURL: './api',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });

export const authApi = {
    logInUser (dataOfLoginUser){
      return axiosInstance.post('/login', {dataOfLoginUser}
    ).then(res=>res.data);
    },
    registerNewUser (postData){
      return axiosInstance.post('/register', postData)
      .then(res=>res.data);
    }
}
export const userApi = {
    getAllUser (){
      return axiosInstance.get('/')
      .then(res=>res.data);
    },
    delOneUser (userId){
      console.log(window.localStorage.getItem('token'))
      return axiosInstance.post(`/user/${userId}?_method=DELETE`,{},
      {headers: {
        'Authorization': `Bearer ${window.localStorage.getItem('token')? window.localStorage.getItem('token') : ''}`
        }})
      .then(res=>{
        console.log(res)
       return res.data;
      });
    }
}