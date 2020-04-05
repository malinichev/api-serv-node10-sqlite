import React, {
  useState  
} from 'react';

import {  Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'


const FormAddCategory = (props) =>{ 
  
  return (
    <form onSubmit={props.handleSubmit}>
     
            <Modal.Body>
                <div>
                    <div className='form-group'>
                        <div className='col-form-label'>Scr address:  https://picsum.photos/300/200</div>
                        <Field required 
                        className="form-control"  
                        type="text"  name='srcCat' placeholder="type scr"
                        component={'input'} />
                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> Name  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='name'
                        placeholder="Type without space"
                        component={'input'}
                        />

                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> categoryName  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='categoryName'
                        placeholder="Type without space"
                        component={'input'}
                        />

                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> Description  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='catFor'
                        placeholder="name"
                        component={'input'}
                        />
                    

                    </div>
                </div>
                <Modal.Footer>
                  <Button type="submit" variant="primary">Add Category</Button>
                  <Button variant="primary"  onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
                
          </Modal.Body>
    </form>
  );
}

const FormReduxAddCategory = reduxForm({
  form: 'addCategoryForm'
})(FormAddCategory)



const ModalAddCateg = ({setNewCategory}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = event => {  
      setNewCategory(event);
      setShow(false)
    };
  
    return (
      <>
        <Button variant="info" className='' onClick={handleShow}>
          New CAT
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title  >Adding Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <FormReduxAddCategory onSubmit={handleSubmit} handleClose={handleClose} />
      
    </Modal.Body>
        </Modal>
      </>
    );
  }
  

  export default ModalAddCateg