import React from 'react';
import { Link } from 'react-router-dom';

const Inslider2item = (props) =>{
  const {val, NewCat} = props;

    return(
        <div className="block" key={val._id}>
            {NewCat}
            <img src={val.srcCat} alt=""/>
            <p>{val.name}</p>
            <button>
            <Link to={`catalog/${val.linkCat}`}>
                Подробнее
            </Link>
            </button>
           
        </div>
        )        
    }

export default Inslider2item;
