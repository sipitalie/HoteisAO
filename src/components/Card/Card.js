import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import ImgComp from '../Slideshow/ImgComp';
import Follow from '../Follow';
import STAR from '../Star';
import Atrativos from '../Atrativos';


import { FiMapPin } from 'react-icons/fi';


import defaultImg from '../../assets/DefaultImg.png';
import './Card.css';

export default function Card({ alojamento }) {
    const history = useHistory()

    const goMap = () => {
        history.push(`/hotelpage/${alojamento.id}/mapa`)

    }
    return (
        <div className="product-card">
            <div className="left-column-img">
                <ImgComp src={alojamento.foto === null ? defaultImg : `http://127.0.0.1:8000${alojamento.foto}`} />
            </div>

            <div className="right-column-inf0">
                <div className="nome" >
                    <div>
                        <Link to={`/hotelpage/${alojamento.id}`}><h1 className="big" >{alojamento.nome}</h1></Link>
                    </div>
                </div>

                <div className="class-tipo">
                    <p className="tipo">Tipo: {alojamento.Type_Alojamento}</p>
                    <div className="FiMapPin" >
                        <button id="goMap" onClick={goMap}>
                            <div><FiMapPin size={'1rem'} /></div>
                        </button>
                    </div>
                </div>

                <div className="localizado" >
                    <h4 className="class-cidade">
                        {alojamento.cidade}, {alojamento.Provincia}, {alojamento.pais}
                    </h4>
                </div>
                <STAR star={alojamento.Estrela} />
                <Follow
                    owner={alojamento.owner}
                    idhotel={alojamento.id} />
                <Atrativos />
            </div>
        </div>
    );
}
