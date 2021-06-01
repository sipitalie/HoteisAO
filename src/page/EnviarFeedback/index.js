import React, { useState} from 'react';
import {useDispatch} from 'react-redux'
import {send_feedback} from '../../store/fetchActions';
//import { Link } from 'react-router-dom';
//import { Link, useHistory} from 'react-router-dom';

import './index.css';

export default function SendFeedback(){ 
       
    const [feedback, setFeedback]= useState('')
    const dispatch = useDispatch();
    function handlefeedback(e){
        e.preventDefault();
        const data = {
            feedback   
        };
        setFeedback('');
        console.log(feedback)
        dispatch(send_feedback(data));
        //   
    }

   
    return(
        <section>
            <div className="class-Feedback"> 
                <form className='login-container' onSubmit ={handlefeedback}>
                <div>Enviar Feedback</div>
                <div className = 'class-feedback'>              
                    <textarea
                        value = {feedback}
                        required 
                        onChange ={e => setFeedback(e.target.value)}
                    />
                </div>
                <button type='submit'>Enviar</button>
                </form>
                
            </div>           
        </section>  
    );
}

