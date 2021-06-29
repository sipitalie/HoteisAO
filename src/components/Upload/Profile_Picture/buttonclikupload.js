import React from 'react';
import { MdAddAPhoto } from 'react-icons/md';

import './buttonuploadimg.css'

export default function Buttonuploadimg(props) {
    return (
        <div className="class-foto-camera">
            <button className="uploadImg-button" onClick={props.click}>
                <span className='span-camera'><MdAddAPhoto size={'1rem'} /></span>
            </button>
        </div>
    )
};

