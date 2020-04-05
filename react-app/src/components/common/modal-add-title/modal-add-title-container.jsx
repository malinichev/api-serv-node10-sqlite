

import {setNewSlide1InHomepage} from '../../../redux/homepage-reduser'
import ModalAddTitle from './modal-add-title'

import { connect } from 'react-redux'



const ModalAddTitleContainer = connect(
  null,
  {setNewSlide1InHomepage}
)(ModalAddTitle)
  

  export default ModalAddTitleContainer;