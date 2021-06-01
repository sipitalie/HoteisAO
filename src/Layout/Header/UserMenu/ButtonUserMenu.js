import React from 'react';
import './ButtonUserMenu.css';
import {FaUserCircle }from "react-icons/fa";
//import { FaUserCircle, FaBell, FaPlusCircle } from "react-icons/fa";

const buttonUserMenu = props =>(
    <button className="User-button" onClick ={props.click}>
        <div className="FaUser-button"><FaUserCircle size="35px"/> </div>  
    </button>
);


export default buttonUserMenu;