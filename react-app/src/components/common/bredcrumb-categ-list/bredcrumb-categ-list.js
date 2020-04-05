import React from 'react';
import { Link } from 'react-router-dom';
// import './categ-list.css';

const BredcrumbCategList = ({items,categoryId}) => {

  return (
    <div className="bredcrumb">
      <Link to='/' className=" navbar-brand">
              Главная
      </Link>
    <span>></span>
    <Link to='/catalog' className=" navbar-brand">
              Каталог
    </Link>
    {
        !items? <span></span> :items
            .filter(ite => {   
                if(categoryId && categoryId!=='ALL'){
                    if(ite.categoryName){
                      return ite.categoryName===categoryId;
                    }  
                }
                
                return false;
            })
              .map((val)=>{
               return(
                    <span key={val._id}>
                      <span>></span>
                      <Link  to={val.linkCat} className=" navbar-brand">
                        {val.name}
                      </Link>
                    </span>
                )
                })
      }
    </div>
      
     
  );
};

export default BredcrumbCategList;
