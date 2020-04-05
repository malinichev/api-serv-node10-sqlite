import React, {
  useState,
  // useEffect
} from 'react';


import {  Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'






const FormAddItem = (props) =>{ 
//   useEffect(() => {
    
//     const setInitData = () => {
//         if(props.item!==undefined){
            
//             // props.initialize({ im: props.item.srcIm[0].im,  label: props.item.label, newest: props.item.newest, shortRead: props.item.shortRead, fullRead: props.item.fullRead})
//             props.initialize({   label: props.item.label, newest: props.item.newest, shortRead: props.item.shortRead, fullRead: props.item.fullRead})
//         }   
//     };
//     setInitData();
//     // eslint-disable-next-line
// }, [ props.item]);
  
  return (
    <form onSubmit={props.handleSubmit}>
     
            <Modal.Body>
                <div>
                   

                   
                    <div className='form-group'>
                        <div className='col-form-label'> Scr new images https://picsum.photos/550/417  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='im'
                        placeholder="scr new image"
                        component={'input'}
                        />
                    

                    </div>
                </div>
                <Modal.Footer>
                  <Button type="submit" variant="primary">Add image</Button>
                  <Button variant="primary"  onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
                
          </Modal.Body>
    </form>
  );
}

const FormReduxAddImg = reduxForm({
  form: 'addImgForm'
})(FormAddItem)



const ModalAddImg = ({ categoryId, itemId, setAddNewImg}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() => {
      
      setShow(true)
      
    };
    const handleSubmit = event => {  

      setAddNewImg( categoryId, itemId, event);
      setShow(false)
    };
  
    return (
      <>
        <Button variant="info" className='' onClick={handleShow} >
          Add Image
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title  >Add Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <FormReduxAddImg  onSubmit={handleSubmit} handleClose={handleClose} />
      
    </Modal.Body>
        </Modal>
      </>
    );
  }
  


export default ModalAddImg