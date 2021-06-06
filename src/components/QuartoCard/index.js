import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'
import Slider from '../Slideshow/Slideshow'
import ButtonUploadImg from '../Upload/Profile_Picture/buttonclikupload';

export default function QuartosCard({ Quarto, AdimLoged }) {
    //console.log(AdimLoged);
    return (
        <>
            <div className="class_Quarto_">
                <div className="Class_column_Quarto_right_info">
                    <p>{"Carategoria: " + Quarto.Caract_bedroom}</p>
                    <p>{"Tipo: " + Quarto.type_bedroom}</p>
                    <p>{"Status: " + Quarto.Status}</p>
                    <p>{"Nº: " + Quarto.Numero_do_quarto}</p>
                    <p>{"preço: " + Quarto.preco}</p>

                    {AdimLoged && <Link to={`/upload/image/gallery/quarto/${Quarto.id}/`}><div>{' '}</div><ButtonUploadImg /></Link>}

                </div>
                <div className="Class_column_Quarto_left_img">
                    <Slider quarto_id={Quarto.id} />
                </div>
            </div>
        </>
    )
        ;
}
//<Link to={`${match.url}/upload/image/galllery/quarto/${Quarto.id}/`}><ButtonUploadImg/> </Link>