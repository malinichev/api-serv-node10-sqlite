import React from 'react';
import './section-news.scss'
import im from '../../../common/images/ant-rozetsky1.jpg'
import im2 from '../../../common/images/ant-rozetsky2.jpg'

const SectionNews = () =>{
    return(
        <section className="section_news">
            
            <div className="section_news__bacground">
                <img src={im} alt=""/>
                <div className="rightBG">
                    <img src={im2} alt=""/>
                    <div className="text_block">
                    
                        <div className="text_block_news">
                            <h4>12 декабря 2019</h4>
                            <p>Ведущий производитель гидравлического оборудования Южной Кореи впервые представил свою продукцию на выставке
                                «Российский
                                лес», которая проходила с 12 по 14 декабря в Вологде.</p>
                            <a href="/">Подробней</a>
                        </div>
                        <div className="text_block_news">
                            <h4>12 декабря 2019</h4>
                            <p>Ведущий производитель гидравлического оборудования Южной Кореи впервые представил свою продукцию на выставке
                                «Российский
                                лес», которая проходила с 12 по 14 декабря в Вологде.</p>
                            <a href="/">Подробней</a>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            
            
        </section>
    );
}


export default SectionNews