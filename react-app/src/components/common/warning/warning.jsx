import React from 'react';
import { Alert} from 'react-bootstrap';


function AlertDismissible({isError, setError}) {
 

  if (isError) {
    return (
      <Alert variant="danger" onClose={() => {
        
        setError(false)
      }} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {isError}
        </p>
      </Alert>
    );
  }else{
    return  <span></span>
  }
  
}


const Warning = (props)=>{
    
  return(
    <div style={{margin:"10px auto", width:'50%'}}>
    
      <AlertDismissible {...props}/>
    </div>
    );
    
  }

export default Warning