import React from 'react';
import { withRouter } from "react-router";
import { Button} from 'react-bootstrap';

import MySlider from './my-slider';
import BredcrumbCategList from '../../common/bredcrumb-categ-list';
import ItemInCatalog from '../../common/item-in-catalog';
import ModalUpdateItemContainer from '../../common/modal-update-item';
import ModalAddImgContainer from '../../common/modal-add-image';

import {DownloadCat, Telegram, Viber, Whathapp, LoadImg } from '../../common/svg-icon/svg-icon';
import './item-page.scss'
import s from './item-page.module.css'




const Item = (props) => {
  let currentcategId =  props.allItems
    .filter(el=>el.categoryName === props.categoryId)
    .map(e=>e._id)

  const { _id, fullRead, label, shortRead, srcIm } =  props.items[0]
  
    return (

      <div>
            <div className="wrapperBG">
              <div className='pad'></div>   {/* Make a space beetwin navbar and item info */}
             
            <section className="sectionHeader ">
            <div className="row">
            <div className="col-md-6 col-12 pr-0">
                <div className="sectionHeader_left">
                    <h1>{label}</h1>
                    
                    <BredcrumbCategList items={ props.allItems} categoryId ={ props.categoryId} />
                    <h3>Краткие технические характеристики</h3>
                    {shortRead}
                    <div className="sectionHeader_left_bottom_a">
                        <a href="http://www.daehanrussia.ru/upload/DAEHAN.pdf"><span>
                                <DownloadCat width={20} height={18} />
                              
                            </span> Скачать каталог DAEHAN</a>
                        <a href="http://www.daehanrussia.ru/video-archive">Архив видео</a>
                    </div>
                    <div className="sectionHeader_left_bottom_button">
                        <Button className={s.zakaz}>Заказать</Button>
                        {
                          !props.isLogIn ? <span></span> 
                          :
                          <div className='d-flex'>
                          <span className={'mr-2'}>
                              <ModalUpdateItemContainer categoryId={currentcategId}  item={ props.items[0]}/>
                          </span>
                          <span className={'mr-2'}>
                              <ModalAddImgContainer categoryId={currentcategId}  itemId={_id}/>
                          </span>
                        </div>}
                        
                        <a className="telegram" href="https://telegram.me/malini4">
                            <Telegram width={35} height={35} />
                        </a>
                        <a className="whathapp" href="https://telegram.me/malini4">
                          <Whathapp width={35} height={35} />
                        </a>
                        <a className="viber" href="https://telegram.me/malini4">
                          <Viber width={35} height={35} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-12 ">
                <div className="sectionHeader_right">
                    {!props.isImgLoad 
                    ?
                     <span className={s.imgSpinCover}><LoadImg className={s.imgSpin}/></span> 
                    :
                    <MySlider isLogIn={props.isLogIn} _id={_id} currentcategId={currentcategId} delOneImage={props.delOneImage} srcIm={srcIm} />}
                </div>
            </div>
            </div>
            </section>
            <section className="card_inf_section">
              {fullRead}
            </section>
            <section className="analog_tovar">
              <div className="catalogSection">
                <h1>Аналоги оборудования</h1>
                <div className="catalogAll d-flex flex-wrap" id="">    
                {
                 props.allItems
                  .filter(ite => {
                      if( props.categoryId &&  props.categoryId!=='ALL'){
                       
                        return ite.categoryName=== props.categoryId;
                      }else{
                        return true;
                      }
                    })
                  .map((val)=>{
                   
                  return(

                        val.values
                          .filter(ee=>ee._id!==_id)
                          .map((it)=>{
                   
                            return(
                                  <ItemInCatalog 

                                    key = {it._id} 
                                    item = {it} 
                                    delOneItem={ props.delOneItem}
                                    categoryId={val._id}
                                    categoryName={val.categoryName}
                                    setSelectedItem={ props.setSelectedItem}
                                    />
                                  );
                                })
                    )
                    })
                }
                </div>
              </div>
             
            </section>
          </div>

       


      </div>
    );




  
    
  
    
}

export default withRouter(Item);
