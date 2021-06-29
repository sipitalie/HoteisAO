import React from 'react';
//import {FiMapPin, FiWifi,} from 'react-icons/fi';
import { MdDelete } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PromInfo, Container } from './styles';
import { FaPencilAlt } from "react-icons/fa";



export default function PromCard({ promo, IsAdmin, hotel_owner_id }) {
    const { id } = useParams();

    return (
        <Container>
            <PromInfo>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'space-between'

                }}>


                    {(promo.hotel_name) && <h1>
                        {promo.hotel_name}


                    </h1>}
                    {/*<button><MdDelete/></button>*/}

                    <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'

                    }}><p>
                            {`Carategoria: ${promo.Caract}`}
                        </p>
                        {IsAdmin && (promo.hotel === Number(id)) && <span>
                            <Link to={`/promo/${hotel_owner_id}/${promo.id}/`}><FaPencilAlt /></Link>
                        </span>}
                    </div>
                    <p>{`Tipo: ${promo.tipo_quarto}`}</p>
                    <p>{`Percentagem ${promo.percentagem}%`}</p>
                    <p>{`de ${promo.init_data} a ${promo.valid_data}`}</p>
                    <p>{'Publicado a ' + promo.data}</p>
                </div>
            </PromInfo>
        </Container>
    )
}