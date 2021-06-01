import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { authLogin } from '../../../store/fetchActions';
import { Link } from 'react-router-dom';
//import { Link, useHistory} from 'react-router-dom';


import './Login.css';

export default function Login() {

    //const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const history = useHistory();
    const dispatch = useDispatch();

    function handleLogin(e) {
        e.preventDefault();
        const data = {
            username,
            password,
        };
        setUsername('');
        setPassword('');
        //console.log('email', data.username);
        //console.log('password', data.password);
        dispatch(authLogin(data));
        //   
    }

    return (
        <section>
            <form className='login-container' onSubmit={handleLogin}>
                <div className='class-icon-login'>
                    <h1>Login</h1>
                </div>

                <div className='class-email'>
                    <input
                        placeholder="E-mail"
                        value={username}
                        required
                        type='email'
                        onChange={e => setUsername(e.target.value)}

                    />
                </div>

                <div className='class-password'>
                    <input
                        placeholder="Password"
                        value={password}
                        required
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className='button-class'>
                    <button type="submit"> Entrar </button>
                </div>

                <div className="class-link-forgot">
                    <Link className="forgotPassword-link" to="/ForgotPassword">Esqueci minha senha!</Link>
                </div>
                <div className="Ainda-não-possui-conta">
                    <span>Ainda não possui conta no hotels-AO.me ?</span>
                </div>

                <div className="class-link">
                    <Link className="siginup-link" to="/register"> Cadastre-se</Link>
                </div>

            </form>

        </section>



    );
}

/*
try {
    const response = await api.post('/account/login/', data);
    console.log(response.data.key);
    console.log(response.status);
    localStorage.setItem('token', response.data.key);
    history.push('/');

} catch (err){
    console.log("Falha no login, tente novamente. ",err);
}*/