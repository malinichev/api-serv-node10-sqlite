
import React,{useState} from 'react'


import {Modal, Button} from 'react-bootstrap'


import { Field, reduxForm } from 'redux-form'


const FormLogin = (props) =>{ 
  
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

const FormreduxLogin = reduxForm({
  // a unique name for the form
  form: 'loginForm'
})(FormLogin)




const ModalLoginUser = ({loginUserThunk}) => {

    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const submitLogin = (userVal) =>{
      loginUserThunk(userVal);
      handleClose();
    }
    

   
    return (
      <>
        <Button variant="primary" className='ml-1' onClick={handleShow}>
        LogIn
        </Button>
  
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>LogIn</Modal.Title>
          </Modal.Header>       

            <Modal.Body>
              <FormreduxLogin onSubmit={submitLogin} />
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
  
        </Modal>
      </>
    );
  }


export default ModalLoginUser