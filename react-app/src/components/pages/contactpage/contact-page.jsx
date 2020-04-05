import React, { Component } from 'react';
import Slider from "react-slick";
import './contact-page.scss'
import s from './contact-page.module.css'

import imMap from '../../common/images/contact-page-imMap.jpg';
function SlNextArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        className={s.btnNext}
        style={{ ...style}}
        onClick={onClick}
      ></button>
    );
  }
  
  function SlPrevArrow(props) {
    const {  style, onClick } = props;
    return (
      <button
        className={s.btnPrev}
        style={{ ...style}}
        onClick={onClick}
        ></button>
    );
  }



class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }
  
  render(){
    const settFor = {
        className:'sliderMap-nav',
        dots: true,
        nextArrow: <SlNextArrow  />,
        prevArrow: <SlPrevArrow  />,
        
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    arrows: false,
                    dots: false,
                }
            },
            
        ]
        
      };
    const settNav = {
        
        className:'mapSlider-for',
        arrows: false,
        fade: true,
        dots: false,
        
             variableWidth: true,
             
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
    
        ]
      };
        
    return (
        
        <div className="wrapperBGMap">
    
            <div className="padMap"></div>
            
            <section className="sectionHeaderWhithMap  ">
                <div className="row">
                    <div className="col-12 sliderr">
    
                        <Slider
                      asNavFor={this.state.nav2}
                      ref={slider => (this.slider1 = slider)}
                      {...settFor}
                    >
                            <div >
                                <div className={s.coverBrovn}>
                                    <img className={s.imageSlide} src={imMap} alt=""/>
                                    <div className={s.wraperText}>
                                        <h1>Контакты</h1>
                                        <p> Иркутск<br/> ООО "Технопарк"<br/> 
                                        г.Иркутск, ул. Ширямова, д.40, оф.403<br/> 
                                        </p>
                                        <p> Тел.: +7 495 111222333 <br/>
                                        E-mail: info@techno-park.com <br/>
                                        Сайт: http://www.techno-park.com <br/> </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className={s.coverBrovn}>
                                    <img className={s.imageSlide} src={imMap} alt=""/>
                                    <div className={s.wraperText}>
                                        <h1>Контакты</h1>
                                        <p> Москва<br/> ООО "Технопарк"<br/>
                                        г. Москва, Строительный проезд 7 А, корпус 2, офис 4.<br/> 
                                        </p>
                                        <p> Тел.: 8 (495) 212-05-97 <br/>
                                        E-mail: msk@techno-park.com <br/>
                                        Сайт: http://www.techno-park.com <br/> </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className={s.coverBrovn}>
                                    <img className={s.imageSlide} src={imMap} alt=""/>
                                    <div className={s.wraperText}>
                                        <h1>Контакты</h1>
                                        <p> Улан-Удэ<br/> ООО "Технопарк"<br/> 
                                        г.Улан-Уде, проспект Автомобилистов  д.3, оф.3<br/> 
                                        </p>
                                        <p> Тел.: 8 (3012) 69-59-00 <br/>
                                        E-mail: ulu@techno-park.com <br/>
                                        Сайт: http://www.techno-park.com <br/> </p>
                                    </div>
                                </div>
                            </div>
                            
                        </Slider>
                    </div>
                    
                    <Slider
                      asNavFor={this.state.nav1}
                      ref={slider => (this.slider2 = slider)}
                      
                      {...settNav}
                    >
                        <div className="myMap">
                        <iframe title={'eee'} src="https://yandex.ru/map-widget/v1/?um=constructor%3A1928ea167bcb63bdf9f70953e04db9f768894a9dde4be76534097a3f723d3428&amp;source=constructor" width="100vw" height="100%" frameBorder="0"></iframe>
                        </div>
                        <div className="myMap" >
                        <iframe title={'www'} src="https://yandex.ru/map-widget/v1/?um=constructor%3A8195768057772f1caab37b92536fd134b578578024e48a1f1dd3317112a2c750&amp;source=constructor" width="100vw" height="100%" frameBorder="0"></iframe>
                        </div>
                        <div className="myMap" >
                                <iframe title={'jjj'} src="https://yandex.ru/map-widget/v1/?um=constructor%3A74ecfb0598bb4cf0f4c4a3568c7e1aecc0f8333d9005e19627ba23368dda1e70&amp;source=constructor" width="100vw" height="100%" frameBorder="0"></iframe>
                        </div>
                    </Slider>
                </div>
            </section>
            
        </div>
        
    );
  };
  
}

export default ContactPage;
