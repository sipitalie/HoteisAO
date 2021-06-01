import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { authRegister } from '../../../store/fetchActions';
//import { Link } from 'react-router-dom';
//import { Link, useHistory} from 'react-router-dom';



import './Register.css';


export default function Register() {

    //const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    //const history = useHistory();
    const dispatch = useDispatch();

    function handleRegister(e) {
        e.preventDefault();
        const data = {
            email,
            username,
            password,
            password2,
        };
        setEmail('');
        setUsername('');
        setPassword('');
        setPassword2('');
        dispatch(authRegister(data));
    }

    return (
        <section>
            <form className='Register-container' onSubmit={handleRegister}>
                <div className='class-icon-register'>
                    <h1>Registre-se</h1>
                </div>
                <div className='class-Username'>
                    <input
                        placeholder="Username"
                        value={username}
                        required
                        type='username'
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div className='class-email'>
                    <input
                        placeholder="E-mail"
                        value={email}
                        required
                        type='email'
                        onChange={e => setEmail(e.target.value)}
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
                    <input
                        placeholder="Password2"
                        value={password2}
                        required
                        type='password'
                        onChange={e => setPassword2(e.target.value)}
                    />
                </div>

                <div className='button-class'>
                    <button type="submit"> Cadastrar </button>

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