import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_all_alojamentos, a_Seguirhotel } from '../../store/fetchActions';
import './Home.css';
import Card from "../../components/Card/Card";
//import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';


export default function Home() {

    const alojamento = useSelector(state => state.Alojamento);
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    isAuthenticated && dispatch(a_Seguirhotel(localStorage.getItem('id')));

    useEffect(() => {
        dispatch(get_all_alojamentos());
    }, [dispatch]);

    return (<>
        <dive className='containerSearch' style={{
            position: 'relative',
            width: '40rem',
            display: 'flex',
            marginBottom: '1.3rem',
        }}>
            <input placeholder='Search' />
            <button style={{
                marginLeft: '0.6rem',
                marginTop: '0.6rem',
                backgroundColor: '#521751',
                color: 'white',
                border: 0,
                borderRadius: 10,
                width: '5rem',

            }}>Pesquisar</button>
        </dive>
        <div className="container">

            {alojamento.map((alojamentos, index) => <Card key={index} alojamento={alojamentos} />)}
        </div>
    </>

    );
}
