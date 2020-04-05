import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import ItemPage from './item-page';

import { setSelectedItem , delOneItem, delOneImage}  from '../../../redux/catalog-reduser'
import {Loading} from '../../common/svg-icon/svg-icon';
import {setIsIndex} from '../../../redux/app-reduser.ts';


const ItemPageConteiner = (props) => {
    const {allItems, isImgLoad,setIsIndex, ...data} = props
    useEffect(() => {
        setIsIndex(false)
      }, [setIsIndex]);
    if(props.allItems[0]){
        
        
        let ite = allItems
            .filter(ite => {
                return ite.categoryName===props.categoryId;
            })
            .map((val)=>{
               return val.values
                    .filter(e=>e._id===props.itemId)
                    .map(
                        ee => {
                          return ee}
                    )
            });
        
        
    return(
        <ItemPage  {...data} allItems={allItems} isImgLoad={isImgLoad} items={ite[0]}/>
    );
    }else{
        return <div ><Loading/></div>
    }
}
// export default ItemPageConteiner
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        currentCateg: state.catalogAdnItems.currentCateg,
        allItems: state.catalogAdnItems.items,
        isError: state.app.isError,
        isImgLoad: state.catalogAdnItems.isImgLoad,
        isLogIn: state.auth.isLogIn,
    
    }
  }
  
  
  export default connect(mapStateToProps,{setSelectedItem,setIsIndex, delOneItem,delOneImage})(ItemPageConteiner)