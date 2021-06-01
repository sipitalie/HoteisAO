import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {quartos_hotel} from '../../../store/fetchActions';
import QuartosCard from '../../../components/QuartoCard';
import InfoCard from '../../../components/InfoCard';

import './index.css'


export default function QuartosHotel({IsAdmin}){ 
    const Quartos= useSelector((state) =>(state.Quartos));
    const dispatch =useDispatch();
    const { id } =useParams();
    const hotel_owner_id= id
    useEffect( () => {
        dispatch(quartos_hotel(hotel_owner_id));
    },[dispatch,hotel_owner_id]); 
    const lengthquarto= Quartos.length 
    return(
        <>
            {lengthquarto>0?<div className="QuartosHotelPage">                
            {Quartos.map((quartos, index)=>  <QuartosCard key ={index} Quarto={quartos} AdimLoged={IsAdmin} />)}                
            </div>:<InfoCard info='Sem quartos registrados'/>
            }
                       
        </>  
    );
}