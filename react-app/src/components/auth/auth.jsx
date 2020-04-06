import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import {  logOutUser, delRootUser} from '../../redux/auth-reduser';
import ModalLoginUser from '../common/modal-login'

import { isLogin, meInfo } from '../../redux/selectors';



const Auth = ({ isLogIn, user,  logOutUser, delRootUser, loginUserThunk, registerNewUserThunk}) =>{
    
    if(isLogIn){

       return( 
        <>
            <Navbar.Text className={'pr-2'}>
            Привет, {user.email} !
            </Navbar.Text>
            <Button 
                onClick={()=>logOutUser()}
            >LogOut</Button>
            <Button 
                variant="warning"
                onClick={()=>delRootUser(localStorage.getItem('_id'))}
            >Del User&Exit</Button>
        </>
        );
    }else{
        return(
            <>
                <ModalLoginUser loginUserThunk={loginUserThunk} registerNewUserThunk={registerNewUserThunk}/>
                
            </>
        );
    }
    
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        isLogIn: isLogin(state),
        user: meInfo(state),
        
    }
  }
  
  
  export default connect(mapStateToProps,{  delRootUser, logOutUser})(Auth)