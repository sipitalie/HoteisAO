import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { eventos_hotel } from '../../../store/fetchActions';
import EventCard from '../../../components/EventoCard';
import InfoCard from '../../../components/InfoCard';
import './index.css';

export default function EventosHotel({ IsAdmin }) {
    const Evento = useSelector((state) => (state.Eventos));
    const dispatch = useDispatch();
    const { id } = useParams();
    const hotel_owner_id = id
    useEffect(() => {
        dispatch(eventos_hotel(hotel_owner_id));
    }, [dispatch, hotel_owner_id]);
    const lengthEvents = (Evento.length)

    return (
        <>
            {lengthEvents > 0 ? <div className="EventosHotelPage">
                {Evento.map((eventos, index) => <EventCard key={index} evento={eventos} IsAdmin={IsAdmin} />)}
            </div> : <InfoCard info='Sem eventos publicados' />}
        </>
    );
}
