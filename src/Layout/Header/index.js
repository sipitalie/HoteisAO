import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import SideDrawer from './SideDrawe/SideDrawer';
import MenuDropDown from './UserMenu/menuDropdown';
import NoticationsUser from './NotificationsUser/NotificationsUser';
import Backdrop from './Backdrop/Backdrop';
import {useSelector} from 'react-redux'
//import './index.css';

const Header = (props) => {
  const {isAuthenticated}= useSelector(state => state.auth);

  const[SideDraweOpen, SetsideDraweOpen]=useState(false);
  const[MenuUserOpen, SetMenuUserOpen]=useState(false);
  const[NotificationOpen, SetNotificationOpen]=useState(false);
    
  const drawerToggleClickHamdler = () =>SetsideDraweOpen(!SideDraweOpen);
  //const backdropClickHandler =()=>SetsideDraweOpen(!SideDraweOpen);

  const usertooglecli= () => SetMenuUserOpen(!MenuUserOpen)
  const backusertooglecli= () => SetMenuUserOpen(!MenuUserOpen)

  const notificationclick= () => SetNotificationOpen(!NotificationOpen)
  const backnotificationclick= () => SetNotificationOpen(!NotificationOpen)

  return (
    <div className ="class-Header" style ={{height:'5px'}}>
     <NavBar drawerToggleButton={drawerToggleClickHamdler} 
     buttonuserclick={usertooglecli} buttonnotificationsclick={notificationclick} />
     <SideDrawer show={SideDraweOpen} />
     {isAuthenticated && <MenuDropDown show={MenuUserOpen}/> } 
     {isAuthenticated && MenuUserOpen && <Backdrop click={backusertooglecli}/>}
     {isAuthenticated && <NoticationsUser show={NotificationOpen}/>}
     {isAuthenticated && NotificationOpen && <Backdrop click={backnotificationclick}/>}
    </div>
  );
}

export default Header;

//<div style={{height:'100%'}}></div>{SideDraweOpen && <Backdrop click={backdropClickHandler} />}
