import React, {
  useState, 
  useEffect
} from 'react';

import {  Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'


const FormUpdateCategory = (props) =>{ 
  useEffect(() => {
        
    const setInitData = () => {
        if(props.updateCategData!==undefined){
            props.initialize({srcCat: props.updateCategData.srcCat,  name: props.updateCategData.name, categoryName: props.updateCategData.categoryName, catFor: props.updateCategData.catFor, _id: props.updateCategData._id})
        }   
    };
    setInitData();
    // eslint-disable-next-line
}, [props.updateCategData]);
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
                        placeholder="catFor"
                        component={'input'}
                        />
                    

                    </div>
                </div>
                <Modal.Footer>
                  <Button type="submit" variant="primary">Update Category</Button>
                  <Button variant="primary"  onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
                
          </Modal.Body>
    </form>
  );
}

const FormReduxAddCategory = reduxForm({
  form: 'updateCategoryForm'
})(FormUpdateCategory)



const ModalUpdateCateg = ({updateOneCateg, updateCategData}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = event => {
      
      const {_id, ...data} = event;
      
      updateOneCateg(_id, data);
      setShow(false)
    };
  
    return (
      <>
        <Button variant="warning"  onClick={handleShow}>
          Edit CAT
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title  >Edit Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <FormReduxAddCategory onSubmit={handleSubmit} updateCategData={updateCategData} handleClose={handleClose} />
      
    </Modal.Body>
        </Modal>
      </>
    );
  }
  

  export default ModalUpdateCateg