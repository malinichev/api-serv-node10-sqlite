import React from 'react';
import { connect } from 'react-redux';
import Homepage from './home-page'
// import {Loading} from '../../common/svg-icon/svg-icon'

import {delOneUser} from '../../../redux/app-reduser.ts';

import {getAllUser}  from '../../../redux/selectors'

class HomePageContainer extends React.PureComponent {
    render(){
        return ( 
        <>
            <Homepage {...this.props} />
        </>
        );
    
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        users: getAllUser(state)
    }
  }
  
  
  export default connect(mapStateToProps,{ delOneUser})(HomePageContainer)