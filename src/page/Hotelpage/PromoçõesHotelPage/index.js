import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { promo_hotel } from '../../../store/fetchActions';
import PromoCard from '../../../components/PromoCard';
import InfoCard from '../../../components/InfoCard'
import './index.css';

export default function PromosHotel({ IsAdmin }) {
    const Promo = useSelector((state) => (state.Promoçoes));
    const dispatch = useDispatch();
    const { id } = useParams();
    const hotel_owner_id = id
    useEffect(() => {
        dispatch(promo_hotel(hotel_owner_id));
    }, [dispatch, hotel_owner_id]);
    const lengthPomo = (Promo.length)
    return (
        <>
            {lengthPomo > 0 ? <div className="PromosHotelPage">
                {Promo.map((promos, index) => <PromoCard
                    key={index}
                    promo={promos}
                    IsAdmin={IsAdmin}
                    hotel_owner_id={hotel_owner_id} />)}
            </div> : <InfoCard info='sem promoções publicadas' />
            }
        </>
    );
}
