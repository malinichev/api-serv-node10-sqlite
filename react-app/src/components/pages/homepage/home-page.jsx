import React from 'react';
import Slider1 from './slider1'
import Slider2 from './slider2'
import Slider3 from './slider3'
import SectionNews from './section-news'
const HomePage= ({hpSliderItems,isSlider1Load,isLogIn, delOneHPSlider1, items, isItemsLoad}) => {
    
    return (
        <>
            <Slider1 isLogIn={isLogIn} delOneHPSlider1={delOneHPSlider1} isSlider1Load={isSlider1Load} data={hpSliderItems} />
            <Slider2 items={items} isItemsLoad={isItemsLoad}/>
            <SectionNews  />
            <Slider3 items={items} isItemsLoad={isItemsLoad}  />
        </>
    );
}
export default HomePage