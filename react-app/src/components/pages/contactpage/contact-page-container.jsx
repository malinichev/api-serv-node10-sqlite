import React,{useEffect} from 'react';
import ContactPage from './contact-page';
import { connect } from 'react-redux';
import {setIsIndex} from '../../../redux/app-reduser.ts';
const ContactPageContainer = ({setIsIndex}) => {
    useEffect(() => {
        setIsIndex(false) 
      }, [setIsIndex]);
    
    return (
        <ContactPage />
    );
}

export default connect(null,{ setIsIndex })(ContactPageContainer)