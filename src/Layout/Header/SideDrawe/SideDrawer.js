import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import { FaQrcode, FaHotjar, FaCog, FaHome, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { MdFeedback, MdHotel } from "react-icons/md";
import { FiLogOut, FiLogIn } from "react-icons/fi";


import { useSelector, useDispatch } from 'react-redux'

import LogoutService from '../../../service/logout.service';
import api from '../../../service/api'


export default function SideDrawer(props) {

    const { isAuthenticated } = useSelector(state => state.auth);
    const [isOwner, seIsOwner] = useState([])
    const dispacth = useDispatch();
    function authLoginButton() {
        isAuthenticated && dispacth(LogoutService());
    }
    let drawerclasses = 'side-drawer';
    if (props.show) {
        drawerclasses = 'side-drawer open';
    }
    useEffect(() => {
        api.get(`api.v1/alojamentosOwner/${localStorage.getItem('id')}/`).then(res => {
            seIsOwner(res.data.length)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <nav className={drawerclasses}>

            <ul>
                {/*<li><Link to="/Dashboard"><FaQrcode/> Dashboard</Link></li>*/}
                {!isOwner && <li><Link to="/"> <FaHome /> Home</Link></li>}
                {/*<li><Link to="/lodging/trending"><FaHotjar /> Em alta</Link></li>*/}
                {/*isAuthenticated && <li><Link to="/lodging/subscriptions"> <MdHotel /> A seguir</Link></li>*/}
            </ul>
            {
                isAuthenticated && <ul>
                    {!!isOwner && <li><Link to="/yourlodging"><MdHotel /> Seus Alojamentos</Link></li>}
                    <li><Link to="/account"><FaCog /> Configurações</Link></li>
                    {/*<li><Link to="/ajuda"><FaQuestionCircle /> Ajuda</Link></li>*/}
                    {/*<li><Link to="/sendfeedback"><MdFeedback /> Enviar feedback</Link></li>*/}
                    <li><Link onClick={authLoginButton} to="#"><FiLogOut /> Sair</Link></li>
                </ul>
            }
            {
                !isAuthenticated && <ul>
                    <li><Link to="/register"><FaUserCircle /> Sig up</Link></li>
                    <li><Link to="/login"><FiLogIn /> Login</Link></li>

                </ul>
            }
            {
                !isAuthenticated && <ul>
                    <li>
                        <Link to="#"> <MdHotel /> A seguir</Link>
                    </li>
                </ul>
            }

        </nav>

    )
};


