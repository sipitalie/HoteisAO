import React from 'react';
import { FaCog, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { MdFeedback, MdHotel } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import LogoutService from '../../../service/logout.service';
import './menuDropdown.css';
import { Link } from 'react-router-dom';

export default function MenuDropdownUser(props) {
    const email = localStorage.getItem('email');
    const { isAuthenticated } = useSelector(state => state.auth);
    const dispacth = useDispatch();
    function authLoginButton() {
        isAuthenticated && dispacth(LogoutService());
    }
    let menuDropdownUser = 'menu-dropdown';
    if (props.show) {
        menuDropdownUser = 'menu-dropdown open';
    }
    return (
        <div className={menuDropdownUser}>
            <ul>
                <header>
                    <li>
                        <div><FaUserCircle /></div>
                        <p>{email}</p>
                    </li>
                </header>
                <li><Link to="/"><MdHotel /><p>Seus alojamentos</p></Link></li>
                <li><Link to="/account"><FaCog /><p>Configurações</p></Link></li>
                {/*<li><Link to="/Ajuda"><FaQuestionCircle/><p>Ajuda</p></Link></li>*/}
                {/*<li><Link to="/sendfeedback"><MdFeedback/><p>Enviar feedback</p></Link></li> */}
                <li><Link onClick={authLoginButton} to="#"><FiLogOut /><p>Sair</p></Link></li>
            </ul>
        </div>
    )
};
