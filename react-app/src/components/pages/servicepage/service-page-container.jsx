import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {setIsIndex} from '../../../redux/app-reduser.ts';
import BredcrumbCategList from '../../common/bredcrumb-categ-list'
import './serv.scss'

const ServicePageContainer = ({setIsIndex}) => {
    useEffect(() => {
        setIsIndex(false) 
      }, [setIsIndex]);
    return (
        <div className="wrapperBG">
    
    <div className="pad"></div>

    <section className="servSlid">
        <h3 className="pb-20" >Сервисная <br/>поддержка</h3>
        <BredcrumbCategList />

        <p className="pb-40">
            Где бы вы не находились, вы можете быть уверены, что ваше оборудование Daehan будет работать без простоев. Сервисная
            поддержка доступна нашим клиентам по всей территории страны. Вы можете обратиться к ближайшему к вам представителю
            Daehan Heavy Industry и вам будет оказана всесторонняя поддержка и консультации.
            <br/>
        </p>
        <p>   e-mail: service@daehan-russia.ru</p>
            
        
        
    </section>
    <div className="pad"></div>

</div>
    );
}

export default connect(null,{ setIsIndex })(ServicePageContainer)