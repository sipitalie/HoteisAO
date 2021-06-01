import React,{useState}from 'react';

import './upload.css'

export default function UploadImg(props){
    const [imgFile, SetimagFile] = useState();

    const handleUploadimg = (e) => SetimagFile(e.target.files[0]);
    
    const UploadImgPerfil =async()=>{
        const data= new FormData();
        data.append('foto', imgFile);
        console.log(imgFile, data)

    }

    return(
        <div className='uploadImg'>
            <header className="form-label">Caregar foto de perfil</header>
            <input type="file" onChange={handleUploadimg}/>
            <button onClick={UploadImgPerfil}>Carregar imagen</button>
        </div>
    )
};