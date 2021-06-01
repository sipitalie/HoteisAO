import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {promo_get} from '../../store/fetchActions';
import PromoCard from '../../components/PromoCard'
import './index.css';



import './index.css';

export default function Promoções(){ 
    const Promo= useSelector((state) =>(state.Promoçoes));
    const dispatch =useDispatch();
    useEffect( () => {
        dispatch(promo_get());
    },[dispatch]);  

    return(
        <section>
            <div className="class-promocoes">                
            {Promo.map((promos, index)=>  <PromoCard key ={index} promo={promos} />)}                
            </div>           
        </section>  
    );
}



