import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa'
import { get_all_alojamentos, a_Seguirhotel } from '../../store/fetchActions';
import './Home.css';
import Card from "../../components/Card/Card";
import api from '../../service/api';
import IsAdminHotel from '../../service/isAdmin.service'
//import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';
import ListResult from '../../components/ResusltShearch';


export default function Home() {
    const [searchFieldResult, setsearchFieldResult] = useState('')

    const alojamento = useSelector(state => state.Alojamento);
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    //alojamentosOwner

    isAuthenticated && dispatch(a_Seguirhotel(localStorage.getItem('id')));

    useEffect(() => {
        dispatch(get_all_alojamentos());
    }, [dispatch]);
    /*function HandleShearch() {

        console.log('Search press icon search', searchField)

    }*/
    function HandleShearchPressEnter(e) {
        //console.log(e.target.value, searchField)
        //setsearchField(e.target.value)
        var x = e.which || e.keyCode;

        if (x === 13) {
            const search = e.target.value
            if (search.length > 0) {
                console.log(search)
                api.get(`api.v1/filter?search=${search}`).then(res => {
                    if (res.data.length > 0) {
                        setsearchFieldResult(res.data)

                    } else {
                        setsearchFieldResult('sem resultados')
                    }

                }).catch(err => {
                    console.log(err)
                })

            }
        }


    }

    return (<>
        <dive className='containerSearch' style={{
            position: 'fixed',
            width: '40rem',
            display: 'flex',
            marginBottom: '1.3rem',

        }}>
            <input placeholder='Nome, tipo ou cidade' id='Search2'
                //value={searchField}
                required
                onKeyPress={e => {
                    HandleShearchPressEnter(e)
                }}

                style={{
                    position: 'relative',
                    height: '2.5rem',
                }} />
            <label htmlFor='Search2' className='Search2IconLabel'><FaSearch color='gray' /></label>
            <ListResult data={searchFieldResult} />

        </dive>


        <div className="container">
            {alojamento.map((alojamentos, index) => !IsAdminHotel(alojamentos.owner) && <Card key={index} alojamento={alojamentos} />)}
        </div>
    </>

    );
}
