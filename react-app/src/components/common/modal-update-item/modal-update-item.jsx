import React, {
  useState,
  useEffect
} from 'react';


import {  Button, Modal } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'






const FormUpdateItem = (props) =>{ 
  useEffect(() => {
    
    const setInitData = () => {
        if(props.item!==undefined){
            props.initialize({   label: props.item.label, newest: props.item.newest, shortRead: props.item.shortRead, fullRead: props.item.fullRead})
        }   
    };
    setInitData();
    // eslint-disable-next-line
}, [ props.item]);
  
  return (
    <form onSubmit={props.handleSubmit}>
     
            <Modal.Body>
                <div>
                    
                    <div className='form-group'>
                        <div className='col-form-label'> label  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='label'
                        placeholder="label"
                        component={'input'}
                        />
                       

                    </div>
                    
                    <div className='form-group'>
                        <div className='col-form-label'> Is new?  </div>
                        <Field name='newest'  component="input" type="checkbox"/>
                        

                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> shortRead  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='shortRead'
                        placeholder="name"
                        component={'input'}
                        />
                    

                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> fullRead  </div>
                        <Field required 
                        className="form-control" 
                        type="text" 
                        name='fullRead'
                        placeholder="name"
                        component={'input'}
                        />
                    

                    </div>
                </div>
                <Modal.Footer>
                  <Button type="submit" variant="primary">Update Item</Button>
                  <Button variant="primary"  onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
                
          </Modal.Body>
    </form>
  );
}

const FormReduxUpdateItem = reduxForm({
  form: 'updateItemsForm'
})(FormUpdateItem)



const ModalUpdateItem = ({setUpdateItem, categoryId, item}) => {

    const [numImp, setNumImp] = useState([1])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() => {
      
      setShow(true)
      
    };
    const handleSubmit = event => {  

      setUpdateItem(categoryId, item._id, event);
      setShow(false)
    };
  
    return (
      <>
        <Button variant="info" className='' onClick={handleShow} >
          Update Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title  >Update Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <FormReduxUpdateItem numImp={numImp}  item={item} setNumImp={setNumImp} onSubmit={handleSubmit} handleClose={handleClose} />
      
    </Modal.Body>
        </Modal>
      </>
    );
  }
  

export default ModalUpdateItem