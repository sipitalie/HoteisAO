import React, { useState } from 'react';
//import {FiMapPin, FiWifi,} from 'react-icons/fi';
import { MdDelete } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './index.css';

export default function EventCard({ evento }) {
    const [lembrete, Setlembret] = useState(false)
    const Df_rv_lembret = () => Setlembret(!lembrete);
    //console.log(lembrete)
    let definir_or_remover_lembrte = 'Remover lembrete'
    if (lembrete === false) {
        definir_or_remover_lembrte = "Definir lembrete";
    }
    function alterStailincss() {
        console.log('ola')

    }
    return (
        <div className="Evento-card">

            <div className="title-hotel">
                {(evento.Nomehotel) && <h1>{evento.Nomehotel}</h1>}
                <h2>{evento.title}</h2>
            </div>
            <div className="class-content-event">
                <p>{evento.content}</p>
            </div>
            <div className="Evento-card-P" onClick={alterStailincss}><p>ver mais</p></div>

            <div className="event-data-detalhes">
                <p>dia: {evento.data_do_evento}</p>
                <p>publicado: {evento.data}</p>
                {/*<Link to={`/eventos/${evento.id}`}><p>ver mais</p></Link><button className="btn-Delete"><MdDelete/></button>*/}
            </div>
            { /* <div  className="lembret-class">
                <div className="definir_or_remover_lembrte" onClick ={Df_rv_lembret}>{definir_or_remover_lembrte}<span><FaBell/></span></div>
            </div>
          */}
        </div>
    );
}

