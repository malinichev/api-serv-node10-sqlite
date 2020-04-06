import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { reducer as formReducer } from 'redux-form'





import appReduser from './app-reduser.ts';
import authReduser from './auth-reduser';


import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    app: appReduser,    
    auth: authReduser,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
    ));



export default store;