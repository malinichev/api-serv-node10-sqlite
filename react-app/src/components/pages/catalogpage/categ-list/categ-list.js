import React,{useEffect} from 'react';
import { NavLink , useParams} from 'react-router-dom';
import { Button } from "react-bootstrap";
import ModalUpdateCategContainer from '../../../common/modal-update-category'
import ModalAddItemContainer from '../../../common/modal-add-item'
// import { Link } from 'react-router'
import './categ-list.css';

const CategList = ({isLogIn, items, setCurrentCateg, delOneCateg}) => {
  let { categoryId } = useParams();
  
  useEffect(() => {
    if(categoryId){
      // console.log(categoryId)
    setCurrentCateg(categoryId)
    }
    return () => {
      setCurrentCateg('ALL')
    };
  }, [categoryId, setCurrentCateg]);
  return (
      <ul>
        <li style={{
                     display:'flex',
                     marginBottom:'5px'
                   }}>
          <NavLink to='/catalog' activeClassName="activeLink" className="d-flex px-4 mr-4 navbar-brand align-items-center justify-content-center" >
            Все товары
          </NavLink>
        </li>
      {
        !items?<span></span>:items
            .filter(ite => {      
              
                  // if(categoryId){
                  //   // console.log(categoryId);
                  //   return ite.categoryName==categoryId;
                  // }
                  return true;
                  
            }
            )
              .map((val)=>{
                // console.log(val);
               return(
                   <li key={val._id} style={{
                     display:'flex',
                     marginBottom:'5px'
                   }}>
                      <NavLink to={`/catalog/${val.linkCat}`} activeClassName="activeLink mr-1" className="d-flex mr-1 px-3 navbar-brand">
                        <span style={{
                          display:'flex',
                          width:'100%',
                          height:'100%',
                          justifyContent:'center',
                          alignItems:'center'
                        }}>{val.name}</span>
                        
                      </NavLink>

                      {
                        !isLogIn ? <span></span> 
                        : 
                        <div style={{
                        display:'flex'
                      }}>
                          <ModalUpdateCategContainer updateCategData={val} />
                          {/* <Button variant="warning" className={'mr-1'} >Edit CAT</Button> */}
                          <Button variant="danger" className={'mr-1'} onClick={()=>delOneCateg(val._id)}>Del CAT</Button>
                          <ModalAddItemContainer categId={val._id}/>
                          {/* <Button variant="info" className={'mr-4'} >New ITEM</Button> */}
                      </div>}
                    </li>
                )
                })
      }
    </ul>
  );
};

export default CategList;
