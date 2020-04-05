import React,{useEffect} from 'react';

import { connect } from 'react-redux';
import {setIsIndex} from '../../../redux/app-reduser.ts';
import BredcrumbCategList from '../../common/bredcrumb-categ-list'
import CategList from './categ-list'
import ItemInCatalog from '../../common/item-in-catalog'
import ModalAddCategContainer from '../../common/modal-add-category'
import {Loading} from '../../common/svg-icon/svg-icon'

import {getCatalogAndItems, getCurrentCateg}  from '../../../redux/catalog-selector'
import {setCurrentCateg, setSelectedItem , delOneCateg, delOneItem}  from '../../../redux/catalog-reduser'

import './catalog.scss'

const CatalogPageContainer = ({setIsIndex,categoryId,delOneItem,setSelectedItem, isLogIn, items, setCurrentCateg, currentCateg, isItemsLoad, delOneCateg}) => {
  // console.log(items)
  useEffect(() => {
    setIsIndex(false) 
  }, [setIsIndex]);
  
   if(isItemsLoad){
    return(
        <div >
             <section className="catalogSection">
                <div >
                    <h1>Каталог</h1>
                    
                          {
                            !isLogIn ? <span></span> 
                            : 
                            <ModalAddCategContainer />}
                          
                        
                </div>
                

                <div className="titleBlock ">
                    <BredcrumbCategList items={items} categoryId = {currentCateg} />
                    <div className="titleBlock_right ">
                    <CategList isLogIn={isLogIn} setCurrentCateg = {setCurrentCateg} delOneCateg={delOneCateg} items={items} />
                    </div>
                </div>
                <div className="catalogAll d-flex flex-wrap" id="">
                {
                items
                  .filter(ite => {
                    
                    
                      if(categoryId && categoryId!=='ALL'){
                        // console.log(ite.categoryName);
                        // console.log(categoryId);
                        return ite.categoryName===categoryId;
                      }else{
                        return true;
                      }
                      
                    })
                  .map((val)=>{
                    // console.log(val);
                   return(
                  
                        val.values.map((it)=>{
                          // console.log(val._id);
                        return(
                              <ItemInCatalog 
                                key = {it._id} 
                                item = {it} 
                                isLogIn={isLogIn}
                                delOneItem={delOneItem}
                                categoryId={val._id}
                                categoryName={val.categoryName}
                                setSelectedItem={setSelectedItem}
                                />
                              );
                            })
                    )
                    })
                }
                </div>
        </section>
        </div>
      )
    }else{
      return (
      <>
          <div ><Loading/></div>
      </>
      );
  }
   
    
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        
        
        currentCateg: getCurrentCateg(state),
        isItemsLoad: state.catalogAdnItems.isItemsLoad,
        isError: state.app.isError,
        isLogIn: state.auth.isLogIn,
        items: getCatalogAndItems(state)
    }
  }
  
  
  export default connect(mapStateToProps,{setCurrentCateg,setSelectedItem,setIsIndex, delOneItem, delOneCateg})(CatalogPageContainer)