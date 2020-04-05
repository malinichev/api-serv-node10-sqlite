import React, {useState,useEffect} from 'react';
import {  Button, Modal} from 'react-bootstrap';



import { Field, reduxForm } from 'redux-form'



const FormAddTitle = (props) =>{ 
  useEffect(() => {
        
    const setInitData = () => {
        if(props.sliderDataEdit!==undefined){
            props.initialize({srcCat: props.sliderDataEdit.srcCat,  catFor: props.sliderDataEdit.catFor, _id: props.sliderDataEdit._id})
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
                        <div className='col-form-label'>Scr address: https://picsum.photos/1440/700</div>
                        <Field required 
                        className="form-control"  
                        type="text"  name='srcCat' placeholder="type scr"
                        component={'input'} />
                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> Description  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='catFor' placeholder="type description"
                        component={'input'}
                        />

                    </div>
                </div>
                <Modal.Footer>
                  <Button type="submit" variant="primary">Submit</Button>
                  <Button variant="primary"  onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
                
          </Modal.Body>
    </form>
  );
}

const FormReduxAddTitle = reduxForm({
  form: 'addTitleForm'
})(FormAddTitle)




const ModalAddTitle = ({  updateOneHPSlider1, isLogIn, sliderDataEdit }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false)
    };
   
    const handleShow = () => setShow(true);
    
    const handleSubmit = event => {
      
      updateOneHPSlider1(event);
      
      setShow(false)
    };
  
  
  
    
  
    
  
    return (
      <>
        <Button disabled={!isLogIn} variant="warning"  onClick={handleShow}>
          EDIT
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Slide</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                    <FormReduxAddTitle onSubmit={handleSubmit} sliderDataEdit={sliderDataEdit} handleClose={handleClose} />
            </Modal.Body>
        </Modal>
      </>
    );
  }
  

  export default ModalAddTitle;