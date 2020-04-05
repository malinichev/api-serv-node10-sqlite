import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { reducer as formReducer } from 'redux-form'




import homepageReduser from './homepage-reduser';
import catalogReduser from './catalog-reduser';

import appReduser from './app-reduser.ts';
import authReduser from './auth-reduser';


import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    app: appReduser,
    catalogAdnItems: catalogReduser,
    auth: authReduser,
    homepage: homepageReduser,
    
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
    ));



export default store;