import React from 'react';
import './Usernotificationsbutton.css';
import {FaBell}from "react-icons/fa";

const buttonNotifications = props =>(
    <button className="Notifications-button" onClick ={props.click}>
        <div className="FaBell-button"><FaBell size="35px"/> </div>  
    </button>
);

export default buttonNotifications;