import React from 'react';
import imgAboutslider from '../../common/images/slidAb.jpg'
import imgHomsld from '../../common/images/about-page-bgTop.jpg'
import BredcrumbCategList from '../../common/bredcrumb-categ-list'
import Slider from "react-slick";
import './homepageSlider.scss'
import './primarySection.scss'
import s from './about-page.module.css'


 const AboutPage = (props) => {

    
        const settings = {
            className:'aboutRightSliderPrim',
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            
            variableWidth: true,
        
            centerMode: true,
            
            responsive: [
                {
                    breakpoint: 770,
                    settings: {
                        arrows: false,
                        dots: true,
        
                    }
                }
            ]
            };

        const {items} = props;    
        return (
            <>
                <section className="homepageSlider">
                    <img src={imgHomsld} alt=""/>
                    <div className="leftSide">
                        <p>Ценность клиента - наши приоритеты.</p>
                        <h1>О компании</h1>
                        
                        <BredcrumbCategList items={items}  />
                    </div>
                </section>
                <section className="primarySection">
                    <div className="textWslider">
                        <div className="left">
                            <p>DAEHAN HEAVY INDASTRY ведущий производитель гидравлического оборудования в Южной Кореи.
                            Компания производит продукт самого высокого качества, завоевывая каждый раз новых клиентов. Обладая большим опытом в
                            данной сфере деятельности, знаниями и достижениями в инженерии, продукция Daehan надежна и удобна в использовании.
                            Высокий уровень услуг направленных на клиента, обеспечивает эффективную работу с минимальными затратами. Сотрудники
                            компании Daehan всегда готовы обслужить Вас по первой Вашей просьбе.</p>
                        </div>
                        <div className="aboutRightSlider">
                            <Slider {...settings}>
                                    <div>
                                        <div className={s.aboutRightSlider_wrap}>
                                            <img className={s.imgSlide} src={imgAboutslider} alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={s.aboutRightSlider_wrap}>
                                            <img className={s.imgSlide} src={imgAboutslider} alt=""/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={s.aboutRightSlider_wrap}>
                                            <img className={s.imgSlide} src={imgAboutslider} alt=""/>
                                        </div>
                                    </div>
                                   
                                    
                            </Slider>
                        </div>
                    </div>
                    <div className="bottomText">
                        <h2>История Компании Daehan</h2>
                        <div className="contextMy">
                            <p>1997</p>
                            <p>Создание DAEHAN HEAVY INDUSTRY</p>
                            <p>Начало выпуска быстросьемного механизма для экскаваторов</p>
                        </div>
                        <div className="contextMy">
                            <p>1998</p>
                            <p>Номинирован "Корейским Институтом Безопасного Строительного Оборудования",  как  "Лучший производитель навесного оборудования"</p>
                        </div>
                        <div className="contextMy">
                            <p>2000</p>
                            <p>Начало производства захватов, рыхлителей  и  подъемных вил.</p>
                        </div>
                        <div className="contextMy">
                            <p>2004</p>
                            <p>Признано лучшим предприятием</p>
                        </div>
                        <div className="contextMy">
                            <p>2006</p>
                            <p>Получение сертификации качества продукции</p>
                        </div>
                        <div className="contextMy">
                            <p>2007</p>
                            <p>Сертифицирован ИСО 9001 и ИСО 14001</p>
                        </div>
                        <div className="contextMy">
                            <p>2009</p>
                            <p>Получена Маркировка ( CE Mark)  в Европейском союзе </p>
                        </div>
                        <div className="contextMy">
                            <p>2010</p>
                            <p>Расширение завода</p>
                            <p>Получен статус венчурной компании</p>
                        </div>
                        <div className="contextMy">
                            <p>2011</p>
                            <p>Объединение компаний  DAEHAN R&amp;D Center obtained </p>
                            <p>Получена сертификация ГОСТ РФ</p>
                            <p>Получен сертификат  INNO-BIZ</p>
                        </div>
                    </div>    
                </section>
            </>
        );
      
}

export default AboutPage