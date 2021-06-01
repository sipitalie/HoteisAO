import React from 'react';
import ButtonUserMenu from '../UserMenu/ButtonUserMenu';
import NotificationButton from '../NotificationsUser/Usernotificationsbutton';
import DrawerToggleButton from '../../Header/SideDrawe/DrawerToggleButton';
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";

import './NavBar.css';

export default function NavBar(props) {
    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <header className="navbar">
            <nav className="navbar_navegation">
                <div className="navbar_toggle_button">
                    <DrawerToggleButton click={props.drawerToggleButton} />
                </div>
                <div className="navbar_logo"><Link to="/">Hotels-AO.me</Link></div>
                <div className="Event_prom">
                    <ul>
                        <li><NavLink to="/promoções" activeClassName="active">Promoções</NavLink></li>
                        <li><NavLink to="/eventos" activeClassName="active">Eventos</NavLink></li>
                    </ul>
                </div>
                <div className="espacer"></div>
                <div className="navbar-element">
                    <div className="login-sigin_up">
                        {!isAuthenticated && <ul>
                            <li><NavLink to="/login" activeClassName="active">login</NavLink></li>
                            <li><NavLink to="/register" activeClassName="active">Sign up</NavLink></li>
                        </ul>}
                    </div>
                    {isAuthenticated && <div className="Registrar-alojamento"><Link to="/register_alojamento"><FaPlusCircle size="35px" /></Link></div>}
                    {/*isAuthenticated && <div className="Notifications">
                        <div className="NotificationIcon"><NotificationButton click={props.buttonnotificationsclick} /></div>
                        </div>*/}
                    {isAuthenticated && <div className="User-profile">
                        <div className="userIcon"><ButtonUserMenu click={props.buttonuserclick} /></div>
                    </div>}
                </div>
            </nav>
        </header>
    )
};

//{ isAuthenticated && <li><a onClick={authLoginButton} href="/logout"> <FiLogOut/>Sair</a></li> }
/*
  */



