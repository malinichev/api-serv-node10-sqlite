import React  from 'react';


// import s from './navbar.module.css'
import NavbarLogoLoad from '../common/navbarlogo-load';
import NavbarLogo from '../common/navbarlogo';
import Auth from '../auth'

import {Navbar, Nav} from 'react-bootstrap';
import cn from 'classname';


const NavGar = ({isDataLoad, ...props}) => {
  


  return (
  
    <Navbar className={cn(`navbar  navbar-expand-lg navbar-light`)}   expand="lg">
        <div className='container'>
        <Navbar.Brand>
         
         {
           !isDataLoad
           ?
           <NavbarLogoLoad 
           isDataLoad
           
           className="d-inline-block align-top" />
           :
           <NavbarLogo 
           isDataLoad
           
           className="d-inline-block align-top"/>
         }
         
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse navbar-collapse " id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-100">
          
              <Auth {...props}/>
            
          </Nav>
          
        </Navbar.Collapse>
        </div>
      </Navbar>
    
  );
};






export default NavGar;
