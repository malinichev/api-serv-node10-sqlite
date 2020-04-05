
import React from 'react';

import {setUpdateItem} from '../../../redux/catalog-reduser'
import ModalUpdateItem from './modal-update-item'
import { connect } from 'react-redux'

  const ModalUpdateItemContainer = (props) =>{
 
    return(
      <ModalUpdateItem {...props} />
    );
  }
  
  
  
  

  export default connect(
    null,
    {setUpdateItem}
  )(ModalUpdateItemContainer);