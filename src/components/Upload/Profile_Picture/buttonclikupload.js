import React from 'react';
import {FiCamera} from 'react-icons/fi';

import './buttonuploadimg.css'

export default function Buttonuploadimg(props){
    return(
        <div className="class-foto-camera">
            <button className="uploadImg-button" onClick ={props.click}>
                <span className='span-camera'><FiCamera size={'14px'}/></span> 
            </button>
        </div>  
    )
};

