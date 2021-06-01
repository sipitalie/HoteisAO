import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {avaliaçoes_hotel} from '../../../store/fetchActions';
import AvalCard from '../../../components/AvalCard';
import InfoCard from '../../../components/InfoCard';

export default function AvaliacoesHotel(){ 
    const Avaliacao= useSelector((state) =>(state.Avaliacoes));
    const dispatch =useDispatch();
    const { id } =useParams();
    const hotel_owner_id= id
    useEffect( () => {
        dispatch(avaliaçoes_hotel(hotel_owner_id));
    },[dispatch, hotel_owner_id]);  
    const lengthavaliacao= Avaliacao.length
    return(
        <>
            { lengthavaliacao > 0 ? <div className="AvaliaçõesHotelPage">                
            {Avaliacao.map((avaliaçoes, index)=>  <AvalCard key ={index} avaliacao={avaliaçoes} />)}                
            </div> :<InfoCard info='Sem avaliações'/> 
            }           
        </>  
    );
}