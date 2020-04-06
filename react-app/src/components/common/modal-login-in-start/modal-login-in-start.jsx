
import React,{useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

import { required, maxLength_3_25, maxLength_2_100} from './validate-form'
import s from './modal-login-in-start.module.css'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
  

  return (
    <>
      <input {...input} className={`form-control   ${touched && (error || warning)?s.errorField: ''}`}  placeholder={label} type={type}/>
      {touched && ((error && <span className={s.errorText}>{error}</span>) || (warning && <span className={s.errorText}>{warning}</span>))}
    </>
  );
}

const FormRegisteronStart = (props) =>{ 
  
  
  return (
    <form onSubmit={props.handleSubmit}>
                <div>
                    <div className='form-group'>
                        <div className='col-form-label'>email:</div>
                        <Field 
                        validate={[  props.maxLength_3_25 ]} 
                        label="Enter email"
                        type="email" 
                        name="email" 
                        component={renderField} />
                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> Password  </div>
                        <Field 
                        validate={[ props.required, props.maxLength_3_25 ]}
                        
                        type="password" 
                        name="pass"  
                        label="enter password"
                        component={renderField} 
                        />

                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> Repeat password  </div>
                        <Field 
                        validate={[ props.required,props.maxLength_3_25 ]}
                        
                        type="password" 
                        name="confirmpassword"  
                        label="enter password"
                        component={renderField} 
                        />

                    </div>
                </div>
                <Button type="submit" variant="primary">Submit</Button>
    </form>
  );
}
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.pass) {
    errors.pass = 'Required';
  }
  if (!values.confirmpassword ) {
    errors.confirmpassword = 'Required a comform pass' ;
  } else if (values.confirmpassword !== values.pass) {
    errors.confirmpassword = 'Password mismatched' ;
  }

   return errors;


};
const FormReduxRegisteronStart = reduxForm({
  // a unique name for the form
  validate,
  form: 'registerFormonStart'
  
})(FormRegisteronStart)

const FormLogininStart = (props) =>{ 
  return (
    <form onSubmit={props.handleSubmit}>   
    
                <div>
                    <div className='form-group'>
                        <div className='col-form-label'>email:</div>
                        <Field 
                        validate={[ props.required, props.maxLength_3_25 ]}                        
                        type="email" 
                        label="Enter email" 
                        name="email" 
                        component={renderField} />
                    </div>
                    <div className='form-group'>
                        <div className='col-form-label'> Password  </div>
                        <Field  
                        validate={[ props.required, props.maxLength_2_100 ]}
                        type="password" 
                        name="pass"  
                        label="enter password"
                        component={renderField}
                        />

                    </div>
                </div>
                <Button type="submit" variant="primary"  className={'mr-2'}>Submit</Button>
    </form>
  );
}

const FormreduxLogininStart = reduxForm({
  // a unique name for the form
  form: 'loginForminStart'
})(FormLogininStart)




const ModalLoginUserInStart = ({loginUserThunk, registerNewUserThunk}) => {

    const [show, setShow] = useState(true);
    const [logForm, setLogForm] = useState(true)  
    const handleClose = () => setShow(false);
    
    const submitLogin = (userVal) =>{
      loginUserThunk(userVal);
      handleClose();
  
      
    }
    const submitRegister = (event) =>{
      registerNewUserThunk(event)
      handleClose()
      
      }
    return (
      <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{`WELCOME! `}</Modal.Title>
            
          </Modal.Header>       

            <Modal.Body>
            <h4 className={'w-100 text-center text-muted'}>{`${logForm?'LOGIN':'REGISTER' }`}</h4>
              <div className={'w-100 d-flex justify-content-between'}>
                <Button variant="secondary" onClick={()=>setLogForm(false)}>Register</Button>
                <Button variant="secondary" onClick={()=>setLogForm(true)}>login</Button>
              </div>
            
            
            {
            logForm
            ?
            <FormreduxLogininStart required={required} maxLength_3_25={maxLength_3_25}  maxLength_2_100={maxLength_2_100} onSubmit={submitLogin}  />
            :
            <FormReduxRegisteronStart onSubmit={submitRegister} required={required}  maxLength_3_25={maxLength_3_25}  maxLength_2_100={maxLength_2_100} />
            }
              
          </Modal.Body>
          <Modal.Footer>
            
          
          </Modal.Footer>
        </Modal>
      </>
    );
  }


export default ModalLoginUserInStart