import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {evento_get} from '../../store/fetchActions';
import EventCard from '../../components/EventoCard';
import './index.css';

export default function Eventos(){ 
    const Evento= useSelector((state) =>(state.Eventos));
    const dispatch =useDispatch();
    
    useEffect( () => {
        dispatch(evento_get());
    },[dispatch]);   
    return(
        <section>
            <div className="class-Eventos">                
            {Evento.map((eventos, index)=>  <EventCard key ={index} evento={eventos} />)}                
            </div>           
        </section>  
    );
}
