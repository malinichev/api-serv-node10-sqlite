import React from 'react';
import { connect } from 'react-redux';
import Homepage from './home-page'
import {Loading} from '../../common/svg-icon/svg-icon'
import {delOneHPSlider1} from '../../../redux/homepage-reduser'
import {setIsIndex} from '../../../redux/app-reduser.ts';
import {getCatalogAndItems}  from '../../../redux/catalog-selector'

class HomePageContainer extends React.PureComponent {
    componentDidMount(){
        this.props.setIsIndex(true);
    }
    render(){
        
     
        if(this.props.isItemsLoad){
            return (
                <>
                    <Homepage {...this.props} />
                </>
            );
        }else{
            return (
            <>
                <div ><Loading/></div>
            </>
            );
        }
    
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        isSlider1Load: state.homepage.isSlider1Load,
        hpSliderItems: state.homepage.hpSliderItems,
        isItemsLoad: state.catalogAdnItems.isItemsLoad,
        isError: state.app.isError,
        isLogIn: state.auth.isLogIn,
        items: getCatalogAndItems(state)
    }
  }
  
  
  export default connect(mapStateToProps,{delOneHPSlider1, setIsIndex })(HomePageContainer)