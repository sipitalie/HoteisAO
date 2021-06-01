import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';
import { FaQrcode, FaHotjar, FaCog, FaHome, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { MdFeedback, MdHotel } from "react-icons/md";
import { FiLogOut, FiLogIn } from "react-icons/fi";


import { useSelector, useDispatch } from 'react-redux'

import LogoutService from '../../../service/logout.service';

export default function SideDrawer(props) {

    const { isAuthenticated } = useSelector(state => state.auth);
    const dispacth = useDispatch();
    function authLoginButton() {
        isAuthenticated && dispacth(LogoutService());
    }
    let drawerclasses = 'side-drawer';
    if (props.show) {
        drawerclasses = 'side-drawer open';
    }
    return (
        <nav className={drawerclasses}>

            <ul>
                {/*<li><Link to="/Dashboard"><FaQrcode/> Dashboard</Link></li>*/}
                <li><Link to="/"> <FaHome /> Home</Link></li>
                <li><Link to="/lodging/trending"><FaHotjar /> Em alta</Link></li>
                {isAuthenticated && <li><Link to="/lodging/subscriptions"> <MdHotel /> A seguir</Link></li>}
            </ul>
            {
                isAuthenticated && <ul>
                    <li><Link to="/Yourlodging"><MdHotel /> Seus Alojamentos</Link></li>
                    <li><Link to="/account"><FaCog /> Configurações</Link></li>
                    <li><Link to="/ajuda"><FaQuestionCircle /> Ajuda</Link></li>
                    <li><Link to="/sendfeedback"><MdFeedback /> Enviar feedback</Link></li>
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
                isAuthenticated && <ul>
                    <li>
                        <Link to="/"> <MdHotel /> A seguir</Link>
                    </li>
                </ul>
            }

        </nav>

    )
};


