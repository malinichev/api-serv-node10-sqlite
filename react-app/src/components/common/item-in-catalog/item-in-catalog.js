import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import ModalUpdateItemContainer from "../modal-update-item";




const ItemInCatalog = ({item,isLogIn, categoryId, categoryName, delOneItem}) => {
    const {label, newest, srcIm, _id} = item;
    
    if(!categoryName){
        return categoryName='all'
    }

    return(
        <>
        <div className="block" >
                    {
                    !newest ? null 
                    : 
                    <span>Новинка</span>
                    }
                    <img src={srcIm[0].im} alt=""/>                    
                    <p>{label}</p>
                    <button className='buttonInItems'>
                        <Link to={`/catalog/${categoryName}/item/${_id}`} className="">
                            Подробнее
                        </Link> 
                    </button>
                    {
                        !isLogIn ? null 
                        : 
                        <div style={{
                        display:'flex',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        }}>
                            
                            
                            <ModalUpdateItemContainer categoryId={categoryId} item={item}/>
                            <Button 
                                style={{
                                    marginLeft: '10px'
                                }} 
                                variant="danger"
                                onClick={()=>delOneItem(categoryId, _id)}
                            >DEL</Button>
                    </div>}
                    
        </div>
        
        </>
    );
};

  
  export default ItemInCatalog;
