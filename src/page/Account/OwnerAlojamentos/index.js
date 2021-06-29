import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_all_alojamentos, a_Seguirhotel } from '../../../store/fetchActions';
import IsAdminHotel from '../../../service/isAdmin.service'
import './Home.css';
import Card from "../../../components/Card/Card";

export default function OwnerHome() {
    const alojamento = useSelector(state => state.Alojamento);
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    //alojamentosOwner

    isAuthenticated && dispatch(a_Seguirhotel(localStorage.getItem('id')));

    useEffect(() => {
        dispatch(get_all_alojamentos());
    }, [dispatch]);


    return (<>
        <div className="containerOwner">

            {alojamento.map((alojamentos, index) => IsAdminHotel(alojamentos.owner) && <Card key={index} alojamento={alojamentos} />)}
        </div>
    </>

    );
}
