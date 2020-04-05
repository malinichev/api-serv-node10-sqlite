import React from 'react';
import ModalLoginUser from '../common/modal-login'
import ModalRegUser from '../common/modal-register'
import { connect } from 'react-redux';
import {loginUser, logOutUser, registerNewUser} from '../../redux/auth-reduser';
import {Navbar, Button} from 'react-bootstrap';
const Auth = ({loginUser, isLogIn, user, logOutUser, registerNewUser}) =>{
    
    if(isLogIn){

       return( 
        <>
            <Navbar.Text className={'pr-2'}>
               Hi! {user.email}
            </Navbar.Text>
            <Button 
                onClick={()=>logOutUser()}
            >LogOut</Button>
        </>
        );
    }else{
        return(
            <>
                <ModalLoginUser loginUserThunk={loginUser}/>
                <ModalRegUser registerNewUserThunk={registerNewUser} />
            </>
        );
    }
    
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        isLogIn: state.auth.isLogIn,
        user: state.auth.user,
        isError: state.app.isError
    }
  }
  
  
  export default connect(mapStateToProps,{loginUser,registerNewUser,  logOutUser})(Auth)