
import React from 'react';

import {setNewItem} from '../../../redux/catalog-reduser'
import ModalAddItem from './modal-add-item'
import { connect } from 'react-redux'

  const ModalAddItemContainer = (props) =>{
    return(
      <ModalAddItem {...props} />
    );
  }

  export default connect(
    null,
    {setNewItem}
  )(ModalAddItemContainer);