import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Inslider3item from './inslider3item.js'
import Slider from "react-slick";
import './slider3.scss';
class Slider3 extends Component{

  render(){
    const settings2 = {   
        className:"sliderSmall2",
        dots: false,
        infinite: true,
        speed: 300,
        draggable: true,
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
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
  
    const {items, isItemsLoad} = this.props;

    let categoryWithItems
    if(items && items.length > 0){
      categoryWithItems = items.filter(el => el.values.length !== 0)
      
    }
    
    return (
      <section className="sliderSmallTow">
      
      
          <div className="container">
              <div className="section_title">
                  <h2>Галерея</h2>
                  <Link to="/catalog">
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
            <Slider {...settings2}>
              {
                    
                    !categoryWithItems ? <span></span>
                    : 
                    categoryWithItems.map(eachCategory=>{
                      return eachCategory.values.map(itemsInCategory=>{
                        return itemsInCategory.srcIm.map(scrInItem=>{
                          return <Inslider3item im={scrInItem.im} key={scrInItem._id}/>
                        })
                      })
                    }
                      
                    )
                      
                      
              }
            </Slider>
          }
          

          
       
  </section>

              
    );
  }
}


export default Slider3;
