import React from 'react';

import { Link } from 'react-router-dom';
import {Phone} from '../common/svg-icon/svg-icon';

import NavbarLogoLoad from '../common/navbarlogo-load';
import NavbarLogo from '../common/navbarlogo';
import {Navbar} from 'react-bootstrap';
import './navbar-footer.scss';
import s from './navbar-footer.module.css'



const NavbarFooter = ({isDataLoad}) => {
  return (
      <section className="footerNavmenu d-flex flex-column">
        
        <nav id='foot' className={`navbar fixed-top  navbar-expand-lg navbar-dark ${s.colorBar}`} >
        <div className='container footer_container'>
          <div className='d-flex w-100 pt-1'>
          <Navbar.Brand href="/">
         
         {
           !isDataLoad
           ?
           <NavbarLogoLoad 
           dark={true} 
           isDataLoad
           className="d-inline-block align-top"/>
           :
           <NavbarLogo
           dark={true} 
           isDataLoad
           className="d-inline-block align-top"/>
         }
         
       </Navbar.Brand>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                style={{display:'none'}}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between foot_flex" id="navbarSupportedContent2">

            <ul className="navbar-nav justify-content-lg-between flex-lg-grow-1 textDark">
                    <li className="nav-item">
                              <Link to="/" className="nav-link p-0">
                                Главная
                              </Link>
                            </li>
                    <li className="nav-item">
                              <Link to="/catalog" className="nav-link p-0">
                                Каталог
                              </Link>
                            </li>
                    <li className="nav-item">
                              <Link to="/about" className="nav-link p-0">
                                О компании
                              </Link>
                        
                    </li>
                    <li className="nav-item">
                              <Link to="/contact" className="nav-link p-0">
                                Контакты
                              </Link>
                        
                    </li>
                    <li className="nav-item">
                              <Link to="/service" className="nav-link p-0">
                                Поддержка
                              </Link>
                        
                    </li>
                    
                    
                           
                            
                        </ul>
                        
            <a href="#faqs" className="navbar-text nav-phone">
                      <i className="phone pr-2">
                          <Phone width={16} height={16} fill='white'/>
                            
                        </i>
                            +7 (495) 212-05-97
                        </a>
          </div>
          </div>
          <hr style={{
            margin:"10px 0",
            width:'100%',
            
            background: '#FFFFFF',
            mixBlendMode: 'normal',
            opacity: '0.1'

          }}/>
          <p className="text-center">Copyright © 2019 DAEHAN. All rights reserved</p>
              
        </div>
      </nav>
           
              
              
      </section>
    
  );
};

export default NavbarFooter;
