import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {initializeApp} from '../../redux/app-reduser';

import { HashRouter, Route, Switch } from 'react-router-dom';
import AboutPageContainer from '../pages/aboutpage';
import ContactPageContainer from '../pages/contactpage';
import CatalogPageContainer from '../pages/catalogpage';
import ItemPageContainer from '../pages/itempage';
import ServicePageContainer from '../pages/servicepage';
import HomePageContainer from '../pages/homepage';
import NavBar from '../navbar';
import NavbarFooter from '../navbar-footer';
import Warning from '../common/warning';
import 'bootstrap/dist/css/bootstrap.min.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './app.css';

const App =  (props) => {
  const{  isDataLoad , isError, isIndex} = props;
  useEffect(() => {
    props.initializeApp()
    // eslint-disable-next-line
  }, []);
  
  return (
    <HashRouter>
      <NavBar isDataLoad={isDataLoad} isIndex={isIndex}/>
          <Warning isError={isError}/>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return (            
              <HomePageContainer/>
              );
          }}
           />
       
        
          <Route
          path="/catalog/:categoryId/item/:itemId"
          exec
          render={({match}) => {
            const {categoryId, itemId} = match.params;
            return <ItemPageContainer categoryId={categoryId} itemId={itemId} />
          }}
          />
          <Route
          path="/catalog/:categoryId"
          exec
          render={({match}) => {
            const {categoryId} = match.params;
            return <CatalogPageContainer categoryId={categoryId} />
          }}
          />
           <Route
          path="/catalog"
          exec
          render={() => {
           
            return <CatalogPageContainer  />
          }}
          />
        
        <Route
          path="/about"
          
          render={() => {
       
            return <AboutPageContainer />
          }}
          />
        <Route
          path="/contact"
          
          render={() => {
            
            return <ContactPageContainer />
          }}
          />
        <Route
          path="/service"
          
          render={() => {
          
            
            return <ServicePageContainer />
          }}
          />
      </Switch>
      <NavbarFooter isDataLoad={props.isDataLoad}/>
    </HashRouter>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isDataLoad: state.app.isDataLoad,
    isIndex: state.app.isIndex,
    
    isError: state.app.isError
  }
}


export default connect(mapStateToProps,{initializeApp})(App)