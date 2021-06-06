import React, { useState } from 'react';
//import {FiMapPin, FiWifi,} from 'react-icons/fi';

import { FaPencilAlt } from "react-icons/fa";
import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';
import './index.css';


export default function EventCard({ evento, IsAdmin, hotel_owner_id }) {
    const [lembrete, Setlembret] = useState(false)
    const [vermais, SetVermais] = useState(false)
    const [texVerMaisOumenos, setTexVerMaisOumenos] = useState('ver mais')
    const [classname, setclassName] = useState("class-content-event")
    const Df_rv_lembret = () => Setlembret(!lembrete);
    let match = useRouteMatch();
    //console.log(lembrete)
    let definir_or_remover_lembrte = 'Remover lembrete'
    if (lembrete === false) {
        definir_or_remover_lembrte = "Definir lembrete";
    }

    function alterStailincss() {
        if (vermais === false) {
            setclassName("class-content-p")
            setTexVerMaisOumenos('ver menos')
            SetVermais(!vermais)
        }
        else if (vermais === true) {
            setclassName("class-content-event");
            setTexVerMaisOumenos('ver mais')
            SetVermais(!vermais)
        }

    }
    return (
        <div className="Evento-card">

            <div className="title-hotel">
                {(evento.Nomehotel) && <h1>{evento.Nomehotel}</h1>}
                <h2>
                    {evento.title}
                    {IsAdmin && !evento.Nomehotel && <span>
                        <Link to={`/evento/${hotel_owner_id}/${evento.id}/`}><FaPencilAlt /></Link>
                    </span>}
                </h2>
            </div>
            <div className={classname}>
                <p>{evento.content}</p>
            </div>
            {evento.content.length > 100 && <div className="Evento-card-P" onClick={alterStailincss}><p>{texVerMaisOumenos}</p></div>}

            <div className="event-data-detalhes">
                <p>dia: {evento.data_do_evento}</p>
                <p>publicado: {evento.data}</p>
            </div>
            { /* <div  className="lembret-class">
                <div className="definir_or_remover_lembrte" onClick ={Df_rv_lembret}>{definir_or_remover_lembrte}<span><FaBell/></span></div>
            </div>
          */}
        </div>
    );
}

