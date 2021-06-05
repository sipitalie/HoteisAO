import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPencilAlt } from "react-icons/fa";

import { alojamentos_details } from '../../store/fetchActions';

import STAR from '../../components/Star';
import EventosHotel from './EventosHotelPage';
import PromosHotel from './PromoçõesHotelPage';
import AvaliacoesHotel from './AvaliaçõesHotelPage';
import QuartosHotel from './QuartosHotelPage'
import { Mapa } from './Mapa/Mapa';

import ButtonUploadImg from '../../components/Upload/Profile_Picture/buttonclikupload';
import UploadImg from '../../components/Upload/Profile_Picture/Upload';
import IsAdminHotel from '../../service/isAdmin.service';
import CreateEvent from '../../components/EventoCard/CreateEventCard/';
import CreateBadroon from '../../components/QuartoCard/CreateBadroon';
import CreatePromo from '../../components/PromoCard/CreatePromo';
import CreateEvaluation from '../../components/AvalCard/CreateEvaluetion';

import ImgComp from './ImgComp';
import h2 from '../../assets/h5.jpg';
import './index.css';

export default function HotelPage() {
    let match = useRouteMatch();
    const [navMenu, SetnavMenu] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();


    const [dados, setDados] = useState([]);

    useEffect(() => {
        dispatch(alojamentos_details(id));


        //isAuthenticated && dispatch(a_Seguirhotel(localStorage.getItem('id')));
    }, [dispatch, id]);

    function onScroll() {
        //console.log(window.scrollY)
        if (window.scrollY >= 200) {
            SetnavMenu(true);
        } else {
            SetnavMenu(false);
        }
    };
    window.addEventListener('scroll', onScroll);
    //window.removeEventListener('scroll', onScroll);
    const alojamentodetail = useSelector((state) => (state.Alojamento));


    useEffect(() => {
        alojamentodetail.map((alojamento, index) => { return setDados(alojamento) })
    })
    return (
        <div className="class-PageHotel">
            <header className="header-perfil">
                <div className="class-foto">
                    {IsAdminHotel(dados.owner) && <Link to={`${match.url}/upload/image/perfil/`}><ButtonUploadImg /></Link>}
                    <ImgComp src={h2} />
                </div>
                <div className="class-content">
                    <div className="class-content-name">
                        <h1>{dados.nome}</h1>
                        <span>{IsAdminHotel(dados.owner) && <Link to={`/change${match.url}`}><FaPencilAlt color="#521751" size='1.5rem' /></Link>}</span>
                    </div>
                    <STAR star={dados.Estrela} />
                    <div>Tipo: {dados.Type_Alojamento}</div>
                    <h4 className="class-cidade">{dados.pais}, {dados.Provincia}, {dados.cidade}</h4>
                    <div className="dercricãoHotel"><p className="dercricão-info">{dados.linha}</p></div>
                </div>
            </header>
            <div className={navMenu ? 'navMenu active' : 'navMenu'}>
                <ul>
                    {/*<li><Link to={`${match.url}/eventos`}>Eventos</Link></li>*/}
                    <li><Link to={`${match.url}`}>Eventos</Link></li>
                    <li><Link to={`${match.url}/promoções`}>Promoções</Link></li>
                    {/*<li><Link to={`${match.url}/avaliacoes`}  >Avaliações</Link></li>*/}
                    <li><Link to={`${match.url}/quartos`} >Quartos</Link></li>
                    <li><Link to={`${match.url}/mapa`}>Mapa</Link></li>
                </ul>
            </div>


            <div className="rendering">
                <Route exact path={`${match.path}`} render={() => {
                    return (
                        <>
                            <div>EVENTOS</div>
                            {IsAdminHotel(dados.owner) && (<CreateEvent idhotel={id} />)}
                            <EventosHotel IsAdmin={IsAdminHotel(dados.owner)} />
                        </>
                    )
                }} />
                <Route path={`${match.path}/upload/image/perfil/`} render={() => {
                    return (
                        <>
                            <div>UploadImg</div>
                            <UploadImg />
                        </>
                    )
                }} />

                <Route path={`${match.path}/promoções`} render={() => {
                    return (
                        <>
                            <div>Promoções</div>
                            {IsAdminHotel(dados.owner) && (<CreatePromo idhotel={id} />)}
                            <PromosHotel IsAdmin={IsAdminHotel(dados.owner)} />
                        </>
                    )
                }} />
                <Route path={`${match.path}/avaliacoes`} render={() => {
                    return (
                        <>
                            <div>Avaliações</div>
                            {!IsAdminHotel(dados.owner) && (<CreateEvaluation idhotel={id} />)}
                            <AvaliacoesHotel />
                        </>
                    )
                }} />
                <Route path={`${match.path}/quartos`} render={() => {
                    return (
                        <>
                            <div>Quartos</div>
                            {IsAdminHotel(dados.owner) && (<CreateBadroon idhotel={id} />)}
                            <QuartosHotel IsAdmin={IsAdminHotel(dados.owner)} />
                        </>
                    )
                }} />
                <Route path={`${match.path}/mapa`} render={() => {
                    return (
                        <>
                            <div>Mapa</div>
                            <Mapa dadosmapa={dados} />
                        </>
                    )
                }} />

            </div>
        </div>
    );
}

//AIzaSyAdpjehdN8_bkMsMp2R3oDpsMhp5BF4sew