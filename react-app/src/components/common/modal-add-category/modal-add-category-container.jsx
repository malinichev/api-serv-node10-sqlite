

import {setNewCategory} from '../../../redux/catalog-reduser'
import ModalAddCateg from './modal-add-category'
import { connect } from 'react-redux'

  const ModalAddCategContainer = connect(
    null,
    {setNewCategory}
  )(ModalAddCateg);

  export default ModalAddCategContainer