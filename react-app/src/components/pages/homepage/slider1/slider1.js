





import React, { Component } from "react";
import Slider from "react-slick";
import './slider1.scss';
import { Button } from "react-bootstrap";
import s from './slider1.module.css';
import ModalAddTitleContainer from '../../../common/modal-add-title'
import ModalUpdateTitleContainer from '../../../common/modal-update-title'


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='NextArrow'
      style={{ ...style,display:"flex"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
      className='PrevArrow'
      style={{ ...style, display:"flex", zIndex:'1'}}
      onClick={onClick}
    />
  );
}

export default class Slider1 extends Component {
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
  

  render() {
    const {data, isSlider1Load, isLogIn} = this.props;
    
    const settings = {
                className:'homeSliderFirst',
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
    
                dots: false,
                arrows: false,
                centerMode: false,
    
                variableWidth: true,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 700,
                        settings: {
    
                          dots: false,
                          arrows: false,
                          centerMode: false,
    
                          variableWidth: false,
                        }
                    }
                ]
    }

    
    return (
      <section 
        className="Gallery_back"
      >
        <div className="container">
          <div className="Gallery_back__title">
                    <h1>DAEHAN HEAVY INDASTRY</h1>
                    <p>Ведущий производитель гидравлического <br/> оборудования в Южной Кореи.</p>
                    <button className={s.btnInHPSlider1}>Подробней</button>
                    <ModalAddTitleContainer isLogIn={isLogIn}/> 
          </div>
        </div>
        {
      
      <>
        <Slider     
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          {...settings}
        >
            {
                  !isSlider1Load 
                  ?
                  <span style={{
                    height: '100vh',
                    display:'flex',
                    width:"100%",
                    justifyContent:'center',
                    alignItems: 'center'
                  }}>Loading...</span>
                  :
                  data.map((val)=>{
                          
                        return(
                          <div key={val._id}>
                            <div className={s.coverDiv} >
                              {
                          
                              <div className={s.divWhithBtn}>
                                <Button variant="danger" 
                                disabled={!isLogIn}
                                onClick={()=>this.props.delOneHPSlider1(val._id)}>DEL</Button>
                                <ModalUpdateTitleContainer isLogIn={isLogIn} sliderDataEdit={val}/>
                                
                              </div>}
                              <img 
                                  className="homeSliderFirst__imageLarge" 
                                  src={val.srcCat}
                                  alt='slider'                              
                                  />
                              
                            </div>
                          </div>
                          
                          )
                  })
            }
        </Slider>
          
          <div className='cover_homeSliderFirst_forNav'>
            <Slider

                      asNavFor={this.state.nav2}
                      ref={slider => (this.slider1 = slider)}
                      slidesToShow={1}
                      slidesToScroll={1}
                      initialSlide={0}
                      dots={true}
                      arrows={true}
                      arrowsClass="sdsdsdds"
                      dotsClass='homeSliderFirst_forNav_dots'
                      variableWidth={true}
                      adaptiveHeight={true}
                      className="homeSliderFirst_forNav"
                      autoplaySpeed={2000}
                      nextArrow = {<SampleNextArrow  />}
                      prevArrow = {<SamplePrevArrow  />}
            >
                {
                !isSlider1Load 
                ?
                <span style={{
                  height: '100%',
                  display:'flex',
                  width:"100%",
                  justifyContent:'center',
                  alignItems: 'center'
                }}>Loading...</span>
                :
                data.map((item,i) => {
                  
                  return(
                    <div key={`${item._id}eee`}>
                      <div className="block" >
                          <div className='covImg'>
                              <img alt='slide' className="small-im" src={item.srcCat}/>
                          </div>
                          
                          <div className="block_text">
                            <p>0{++i}</p>
                            <h2>{item.catFor}</h2>
                          </div>   
                      </div>
                    </div>
                    )
                    
                }) 
                }
            </Slider>
                  
          </div>
      </>
    }

      
        
      </section>
    );
  }
}