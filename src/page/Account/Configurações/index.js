import React, { useState } from 'react';
import ChangePassword from '../ChangePassword'
//import {useDispatch} from 'react-redux'
//import {authRegister} from '../../../store/fetchActions';
//import { Link } from 'react-router-dom';
//import { Link, useHistory} from 'react-router-dom';



import './index.css';

export default function Account() {
    //const alojamento= useSelector(state =>state.Alojamento);
    //const {isAuthenticated}= useSelector(state => state.auth); 
    //const dispatch =useDispatch();
    const [Nome, SetNome] = useState(localStorage.getItem('username'))
    const [email, SetEmail] = useState(localStorage.getItem('email'))

    //isAuthenticated && dispatch(a_Seguirhotel(localStorage.getItem('id')));
    //http://127.0.0.1:8000/api/account/change_password/

    return (
        <section>
            <div className="class-PerfilUser">
                <div className="Dark-light-and-perfil">
                    <div className="account-perfil"><h1>Perfil</h1></div>
                    {/*<div className="Dark-light<">
                        <div>Dark/light</div>
                        <label>
                            <input className="check-imput" type="checkbox"></input>
                            <span className="check"> </span>
                        </label>
                    </div>
                    */}
                </div>
                {!!Nome && <div>Nome: {Nome}</div>}
                <div>email: {email}</div>
                <ChangePassword />

            </div>
        </section>
    );
}

