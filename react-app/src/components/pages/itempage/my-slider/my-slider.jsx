import React, {Component} from 'react';
import s from './my-slider.module.css';
import Slider from "react-slick";
import { Button} from 'react-bootstrap'


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


export default class MySlider extends Component {
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
      
      const del = (catId, itemId, imgId) =>{
        this.props.delOneImage(catId, itemId, imgId )
      }
        const settingsFor = {
            className:'slider-for2',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            dots: false,
            nextArrow: <SlNextArrow  />,
            prevArrow: <SlPrevArrow  />
          };
        const settingsNav = {
            slidesToShow: 4,
            className:'slider-nav2',
            slidesToScroll: 1,
            
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true
          };

        let { srcIm, currentcategId, _id } =this.props
          
          return (
              <>
              <Slider
                      asNavFor={this.state.nav2}
                      ref={slider => (this.slider1 = slider)}
                      {...settingsFor}
                    >
                                        {
                                          
                                          srcIm.map((vall3)=>{
                                          
                                            return (
                                              <div key={vall3._id+3}>
                                                <div  className={s.oneSlideCover}>
                                                {
                                                   !this.props.isLogIn ? null 
                                                   :
                                                  <Button 
                                                      className={s.btnDelIm}
                                                      variant="danger"
                                                      onClick={()=>del(currentcategId, _id, vall3._id )}
                                                  >DEL IM</Button>
                                                  }
                                                  
                                                  <img className={s.oneSlideImg} src={vall3.im} alt=""/>
                                                </div>
                                              </div>
                                            )
                                          })
                                        }
                                          
                    </Slider>
                    
                    {
                    srcIm.length > 4?<Slider
                              asNavFor={this.state.nav1}
                              ref={slider => (this.slider2 = slider)}
                              {...settingsNav}
                            >
                                      {
                                          srcIm.map((vall2)=>{
                                          
                                            return (
                                              <div  key={vall2._id}>
                                                <div  className={s.smallSlideCover}>
                                          
                                                  <img className={s.smallSlideImg} src={vall2.im} alt=""/>
                                                </div>
                                              </div>
                                            )
                                          })
                                        }
                    </Slider>:<span></span>
                    }
              </>
          );
    }
}