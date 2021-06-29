import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { alojamentos_details } from '../../../store/fetchActions';


import api from '../../../service/api'


import './upload.css'

export default function UploadImg(props) {
    const [imgFile, SetimagFile] = useState(null);
    const [Mensagem, setMensagem] = useState(null)
    const { id } = useParams();
    const dispatch = useDispatch();

    const handleUploadimg = (e) => SetimagFile(e.target.files[0]);


    const UploadImgPerfil = async () => {
        const data = new FormData();
        data.append('foto', imgFile);
        data.append('owner', props.data.owner);
        data.append('nome', props.data.nome);
        data.append('Type_Alojamento', props.data.Type_Alojamento);
        data.append('Estrela', props.data.Estrela);
        data.append('pais', props.data.pais);
        data.append('Provincia', props.data.Provincia);
        data.append('cidade', props.data.cidade);
        data.append('linha', props.data.linha);
        data.append('latitude', props.data.latitude);
        data.append('longitude', props.data.longitude);
        //data.append('linha', pros.data.linha);

        api.put(`api.v1/alojamentos/${id}/`, data).then(res => {

            setMensagem(res.status)
            dispatch(alojamentos_details(id));
            setTimeout(
                function () {
                    setMensagem(null)
                    SetimagFile(null)
                },
                5000
            )
        }).catch(err => {

            setMensagem('error')
            setTimeout(
                function () {
                    setMensagem(null)
                },
                5000
            )

        })

    }

    return (
        <div className='uploadImg'>
            {Mensagem === 200 && <div id='sucess' style={{
                width: "100%",
                display: 'flex'
            }}><p>Sucesso!</p></div>}
            {Mensagem === 'error' && <div id='fail'
                style={{
                    width: "100%",
                    display: 'flex',
                    marginTop: '0.2rem',
                    justifyContent: 'center',
                    color: 'white'
                }}><p>Erro!</p></div>}
            <header className="form-label">Caregar foto de perfil</header>
            <input
                type="file"
                id='inputButtonImg'
                required
                onChange={handleUploadimg} />
            <div style={{
                width: "30%",
                display: 'flex',
                height: '2rem',
                marginBottom: '0.2rem',
                justifyContent: 'center',

            }}>
                <button id='UploadImgPerfil' onClick={UploadImgPerfil}>Carregar</button>
            </div>

        </div>
    )
};