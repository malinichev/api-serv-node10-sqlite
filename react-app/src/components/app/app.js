import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {initializeAppIfWeHaveADataOfUser, setError} from '../../redux/app-reduser';
import {loginUser, registerNewUser} from '../../redux/auth-reduser';
import HomePageContainer from '../pages/homepage'
import { HashRouter, Route, Switch} from 'react-router-dom';

import {errorApp, isDataLoad, isLogin} from '../../redux/selectors'

import NavBar from '../navbar';

import ModalLoginUserInStart from '../common/modal-login-in-start';
import Warning from '../common/warning';
import 'bootstrap/dist/css/bootstrap.min.css';


import './app.css';

const App =  (props) => {
  const{  isDataLoad , setError, isError, isLogIn, loginUser, registerNewUser} = props;

  useEffect(() => {
    props.initializeAppIfWeHaveADataOfUser()
    // eslint-disable-next-line
  }, [isLogIn]);
  
  return (
    <HashRouter>
      <NavBar isDataLoad={isDataLoad} loginUserThunk={loginUser} registerNewUserThunk={registerNewUser}/>
          <Warning isError={isError}  setError={setError}/>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
                if(isLogIn){
                  
                    return (            
                      <HomePageContainer/>
                      );
                }else{
                    return (
                      <ModalLoginUserInStart loginUserThunk={loginUser} registerNewUserThunk={registerNewUser}/>
                    );
                }
          }}
           />  
      </Switch>
    </HashRouter>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isDataLoad: isDataLoad(state),
    isError: errorApp(state),
    isLogIn: isLogin(state)
  }
}


export default connect(mapStateToProps,{initializeAppIfWeHaveADataOfUser, setError, loginUser, registerNewUser})(App)