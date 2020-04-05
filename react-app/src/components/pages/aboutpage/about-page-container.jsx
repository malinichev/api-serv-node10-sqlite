import React from 'react';
import AboutPage from './about-page'
import { connect } from 'react-redux';
import {setIsIndex} from '../../../redux/app-reduser.ts';
const AboutPageContainer = ({setIsIndex}) => {
    setIsIndex(false)
    return (
        <AboutPage />
    );
}

export default connect(null,{ setIsIndex })(AboutPageContainer)