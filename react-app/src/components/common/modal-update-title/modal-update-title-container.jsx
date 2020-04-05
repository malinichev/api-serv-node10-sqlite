
import React from 'react';

import {updateOneHPSlider1} from '../../../redux/homepage-reduser'
import ModalUpdateTitle from './modal-update-title'

import { connect } from 'react-redux'



const ModalUpdateTitleContainer = (props) => {
  return(
    <>
      <ModalUpdateTitle  {...props} />
    </>
  );
}
  

  export default connect(
    null,
    {updateOneHPSlider1}
  )(ModalUpdateTitleContainer);