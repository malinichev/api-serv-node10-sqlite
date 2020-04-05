import React, {useEffect, useState}  from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import s from './navbar.module.css'
import NavbarLogoLoad from '../common/navbarlogo-load';
import NavbarLogo from '../common/navbarlogo';
import Auth from '../auth'
import {Phone} from '../common/svg-icon/svg-icon';
import {Navbar, Nav} from 'react-bootstrap';
import cn from 'classname';


const NavGar = ({isDataLoad, isIndex}) => {
  const [dark, setDark] = useState(false)

  const handleScroll = () =>{
    if(window.scrollY > 65){
      setDark(true)
    }
    if(window.scrollY < 65){
      setDark(false)
    }
  }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



  return (
  
    <Navbar id='navv'  className={cn(`navbar textLight fixed-top  navbar-expand-lg navbar-dark`, {[s.showBGdark]:dark}, {[s.colorText]:isIndex})}   expand="lg">
        <div className='container'>
        <Navbar.Brand>
         
         {
           !isDataLoad
           ?
           <NavbarLogoLoad 
           isDataLoad
           dark={isIndex?true:dark}
           className="d-inline-block align-top" />
           :
           <NavbarLogo 
           isDataLoad
           dark={isIndex?true:dark}
           className="d-inline-block align-top"/>
         }
         
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="basic-navbar-nav">
          <Nav className="mr-auto navbar-nav d-flex align-items-center justify-content-lg-between flex-lg-grow-1 textDark">
            
              <Link to="/" className="nav-link ">
                                Главная
              </Link>
            
            
            <Link to="/catalog" className="nav-link">
                                Каталог
                              </Link>
            
            <Link to="/about" className="nav-link">
                                О компании
                              </Link>
            
            <Link to="/contact" className="nav-link">
                                Контакты
                              </Link>
            
            <Link to="/service" className="nav-link">
                                Поддержка
                              </Link>
            
              <Auth />
            
          </Nav>
          <a href="#faqs" className="navbar-text nav-phone">
                      <i className="phone pr-2">
                          <Phone width={16} height={16} className={cn({[s.phone]:dark}, {[s.colorText]:isIndex})}/>
                            
                        </i>
                            +7 (495) 212-05-97
            </a>
        </Navbar.Collapse>
        </div>
      </Navbar>
    
  );
};






export default NavGar;
