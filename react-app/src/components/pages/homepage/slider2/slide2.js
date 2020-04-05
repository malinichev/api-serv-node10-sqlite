import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './slider2.scss';
import Inslider2item from './inslider2item';
const Slider2 = ({items, isItemsLoad}) =>{
  
  const settings = {
   
    className:"sliderSmall",
    dots:false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 770,
            settings: {
                arrows: false,
                dots: false,
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                dots: false,
                
                slidesToShow: 1
            }
        }
    ]
  };
 

    return (
      <section className="catalog_slider">
      <div className="container">
          <div className="section_title">
              <h2>Каталог</h2>
            
              <Link to = '/catalog' >
                      Смотреть весь каталог
              </Link>
              
              
          </div>
      </div> 
      {
      !isItemsLoad 
      ?
      <span style={{
        height: '38.65vh',
        display:'flex',
        width:"100%",
        justifyContent:'center',
        alignItems: 'center'
      }}>Loading...</span>
      :
      <Slider {...settings}>
          {!items ? <span></span> :items.map((val)=>{
                        
                        let NewCat;
                        if(val.newCat&&val.newCat){
                          NewCat = <span>Новинка</span>;
                        }
                        
                        
                      return(
                        <Inslider2item key={`ererer${val._id}`} NewCat={NewCat} val={val}/>
        
                      )
                        })}  
      </Slider>
      }

  </section> 
        
    );
  }



export default Slider2;
