import React from 'react';
import './NotificationsUser.css'
import { FaCog}  from "react-icons/fa";
import ImgComp from './ImgComp';
import h2 from '../../../assets/h5.jpg';

export default function NotificationsUser(props){
    let notifications ='notification-user';
    if(props.show){
        notifications ='notification-user open';
    }
    return(
        <div className={notifications}>
            <header><p>Notificações</p><span><FaCog/></span></header>

            <div className="notification-div-list">
                <div className="notification-div">
                    <div className="left-notification">
                        <span><ImgComp src={h2}/></span>
                    </div>
                    <div className="right-notification">
                        <div>
                            <p>Hotel Restinga publicou um novo evento</p>
                            <p>Há 6 minutos</p> 
                        </div>     
                    </div>       
                </div>

                <div className="notification-div">
                    <div className="left-notification">
                        <span><ImgComp src={h2}/></span>
                    </div>
                    <div className="right-notification">
                        <div>
                            <p>Hotel IKa publicou uma nova promoção</p>
                            <p>Há 3 semanas</p> 
                        </div>     
                    </div>       
                </div>

                <div className="notification-div">
                    <div className="left-notification">
                        <span><ImgComp src={h2}/></span>
                    </div>
                    <div className="right-notification">
                        <div>
                            <p>Hotel Praia Morena publicou uma nova promoção</p>
                            <p>Há 2 semanas</p> 
                        </div>     
                    </div>       
                </div>

                <div className="notification-div">
                    <div className="left-notification">
                        <span><ImgComp src={h2}/></span>
                    </div>
                    <div className="right-notification">
                        <div>
                            <p>Apart-hotel mil cidades publicou uma promoção</p>
                            <p>Há 4 dias</p> 
                        </div>     
                    </div>       
                </div>
            </div>

        </div>
    )
};
