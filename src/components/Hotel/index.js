import React from 'react';
import {FiMapPin,FiStar} from 'react-icons/fi';
import Slider from '../Card/Slideshow/Slideshow';

export default function Alojamento({ alojamento }) {
	return (
		<div className="container-home">
			<ul>
				<li className="class-imagem">
					<Slider/>
				</li>
				<li>
					<h1>{alojamento.nome}</h1>
					<p className="class-tipo">
						Tipo: {alojamento.Type_Alojamento}
					</p>	
				
					<p className="class-endereço">
					<FiMapPin/> {alojamento.cidade}
						, {alojamento.Provincia}, {alojamento.pais}</p>
					
					<div className="class-star-button">
						<div className="class-star">
							<FiStar/><FiStar/><FiStar/><FiStar/><FiStar/>
						</div>
						<button className="class-button-detalhes">
							Detalhes
						</button>
						<button className="class-button-seguir">
							Seguir
						</button>
						
					</div>
					
						
				</li>
			</ul>
		</div>
	);
}
