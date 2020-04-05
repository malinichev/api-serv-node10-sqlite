

import {updateOneCateg} from '../../../redux/catalog-reduser'
import ModalUpdateCateg from './modal-update-category'
import { connect } from 'react-redux'

  
  const ModalUpdateCategContainer = connect(
    null,
    {updateOneCateg}
  )(ModalUpdateCateg);

  export default ModalUpdateCategContainer