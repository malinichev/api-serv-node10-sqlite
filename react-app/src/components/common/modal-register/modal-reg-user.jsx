
import React,{useState} from 'react'

import {Modal, Button} from 'react-bootstrap'

import { Field, reduxForm } from 'redux-form'


const FormRegister = (props) =>{ 
  
  return (
    <form onSubmit={props.handleSubmit}>
     
                
                <div>
                    <div className='form-group'>
                        <div className='col-form-label'>email:</div>
                        <Field required 
                        className="form-control"  
                        type="email" 
                        placeholder="Enter email" 
                        name="email" 
                        component={'input'} />
                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> Password  </div>
                        <Field required 
                        className="form-control" 
                        type="password" 
                        name="password"  
                        placeholder="enter password"
                        component={'input'}
                        />

                    </div>
                </div>
                <Button type="submit" variant="primary">Submit</Button>
       
    </form>
  );
}

const FormReduxRegister = reduxForm({
  // a unique name for the form
  form: 'registerForm'
})(FormRegister)




const ModalRegUser = ({registerNewUserThunk}) => {
  
    const [show, setShow] = useState();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
   
    
    const handleSubmit = (event) =>{
      
        console.log(event);
        registerNewUserThunk(event)
        handleClose()
        
        }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
              Register
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        
          <Modal.Header closeButton>
            <Modal.Title>Регистрация</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <FormReduxRegister onSubmit={handleSubmit}/>
            </Modal.Body>
            <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ModalRegUser