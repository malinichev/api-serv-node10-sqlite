
import React from 'react';

import {setAddNewImg} from '../../../redux/catalog-reduser'
import ModalAddImg from './modal-add-image'
import { connect } from 'react-redux'

  const ModalAddImgContainer = (props) =>{
  
    return(
      <ModalAddImg {...props} />
    );
  }
  
  export default connect(
    null,
    {setAddNewImg}
  )(ModalAddImgContainer);