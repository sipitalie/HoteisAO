import React, { useState} from 'react';
import {useDispatch} from 'react-redux'
import {authForgotPassword} from '../../../store/fetchActions';
//import { Link, useHistory} from 'react-router-dom';


import './index.css';

export default function ForgotPassword(){ 
    const [email, setEmail] = useState('');
    //const history = useHistory();
    const dispatch = useDispatch();
    function handleForgot(e){
        e.preventDefault();
        const data = {
            email,
        };
        setEmail('');
        dispatch(authForgotPassword(data));
          
    }
    
    return(
        <section>
            <form className='forgot-password-container' onSubmit ={handleForgot}>
                <div className = 'forgot-password'>
                    <ul>
                    <li><p>Verifique se você está inserindo o endereço de e-mail e a senha corretamente.</p></li>
                    <li>As senhas diferenciam maiúsculas de minúsculas, portanto,
                        {" "} verifique se você não ativou o caps lock.</li>
                    <li>Sua conta pode estar temporariamente bloqueada para muitas tentativas
                    {" "} de login malsucedidas.</li>
                    </ul>
                    <span>Se você ainda não conseguir fazer o login após seguir as etapas acima, 
                        {" "}insira seu endereço de e-mail para redefinir sua senha.
                    </span>
                </div>
            
                <div className = 'class-forgot-email'>              
                    <input 
                        placeholder ="E-mail"
                        value = {email}
                        required 
                        type ='email'
                        onChange ={e => setEmail(e.target.value)}
                    />
                </div>

                <div className='button-class'>
                    <button type ="submit"> Continuar </button>
                </div>
            
            </form>

        </section>
        
        
       
    );
}
