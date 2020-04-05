import React, {
  useState
} from 'react';

import {  Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'


const FormAddItem = (props) =>{ 
 
  return (
    <form onSubmit={props.handleSubmit}>
     
            <Modal.Body>
                <div>
                    {
                      props.numImp.map((el,i)=>{
                       return( 
                        <div className='form-group' key={i+22}>
                            <div className='col-form-label'>Scr of {i+1} Img:  https://picsum.photos/300/200</div>
                            <Field required 
                            className="form-control"  
                            type="text"  name={`dummyScrIm.im`} placeholder="type scr"
                            component={'input'} />
                        </div>
                    );})
                    }

                    <div className='form-group'>
                        <div className='col-form-label'> label  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='dummyItem.label'
                        placeholder="Type without space"
                        component={'input'}
                        />

                    </div>
                    
                    <div className='form-group'>
                        <div className='col-form-label'> Is new?  </div>
                        <Field name="dummyItem.newest"  component="input" type="checkbox"/>
                        

                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> shortRead  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='dummyItem.shortRead'
                        placeholder="name"
                        component={'input'}
                        />
                    

                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> fullRead  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='dummyItem.fullRead'
                        placeholder="name"
                        component={'input'}
                        />
                    

                    </div>
                </div>
                <Modal.Footer>
                  <Button type="submit" variant="primary">Add Item</Button>
                  <Button variant="primary"  onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
                
          </Modal.Body>
    </form>
  );
}

const FormReduxAddItem = reduxForm({
  form: 'addItemForm'
})(FormAddItem)



const ModalAddItem = ({setNewItem, categId}) => {

    const [numImp, setNumImp] = useState([1])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = event => {  
      // console.log(categId);
      setNewItem(categId, event);
      setShow(false)
    };
  
    return (
      <>
        <Button variant="info" className='' onClick={handleShow}>
          New Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title  >Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <FormReduxAddItem numImp={numImp} setNumImp={setNumImp} onSubmit={handleSubmit} handleClose={handleClose} />
      
    </Modal.Body>
        </Modal>
      </>
    );
  }
  

  export default ModalAddItem