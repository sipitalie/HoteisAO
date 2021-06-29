import React, { useState, useEffect } from 'react';
import { useParams, Link, Route, useRouteMatch } from 'react-router-dom';


import './index.css';
import api from '../../../service/api'

export default function ChangeAlojamento() {

    const [nome, setNome] = useState('');
    const [Type_Alojamento, setType] = useState('');
    const [Estrela, setEstrela] = useState('')
    const [pais, setPais] = useState('');
    const [Provincia, setProvincia] = useState('');
    const [cidade, setCidade] = useState('');
    const [linha, setLinha] = useState('')
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [errorGeolocation, setGeolocation] = useState(null)

    const owner = localStorage.getItem('id');

    const [Mensagem, setMensagem] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        api.get(`api.v1/alojamentos/${id}`).then(res => {

            setNome(res.data.nome);
            setType(res.data.Type_Alojamento);
            setEstrela(res.data.Estrela);
            setPais(res.data.pais);
            setProvincia(res.data.Provincia);
            setLinha(res.data.linha)
            setCidade(res.data.cidade);
            setLatitude(res.data.latitude);
            setLongitude(res.data.longitude);

        }).catch(err => {
            console.log(err)

        })

    }, [])

    function handlerChangeAlojamento(e) {
        e.preventDefault();
        const data = {
            nome,
            Type_Alojamento,
            Estrela,
            pais,
            Provincia,
            cidade,
            linha,
            latitude,
            longitude,
            owner
        };
        api.put(`api.v1/alojamentos/${id}/`, data).then(res => {
            //console.log(res.status)
            setMensagem(res.status)
            setTimeout(
                function () {
                    setMensagem(null)
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
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    function success(pos) {
        var crd = pos.coords;
        setLatitude(crd.latitude);
        setLongitude(crd.longitude);

    }


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
            setGeolocation("Geolocation is not supported by this browser.")
        }
    }
    function DeleteAlojamento() {
        alert('delete')


    }
    return (
        <div className='class-change'>
            <form onSubmit={handlerChangeAlojamento}>
                <div className='class-change-alojamento'>
                    <div className='class-icon-change'>
                        {Mensagem === 200 && <div id='sucess'><p>Sucesso!</p></div>}
                        {Mensagem === 'error' && <div id='fail'><p>fail</p></div>}
                        <h1>Alterar dados do alojamento</h1>
                    </div>
                    <div className='class-name-register'>
                        <input
                            placeholder="Nome"
                            value={nome}
                            required
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>

                    <div className='class-tipo-estrelas'>
                        <select id='selectclasstipo' value={Type_Alojamento} onChange={e => setType(e.target.value)}>
                            <option value={'Hotel'}>Hotel</option>
                            <option value={'Apart-hotel'}>Apart-hotel</option>
                            <option value={'Residencial'}>Residencial</option>
                            <option value={'Pensão'}>Pensão</option>
                            <option value={'Lodge'}>Lodge</option>
                            <option value={'Resort'}>Resort</option>
                            <option value={'Outros'}>Outros</option>
                        </select>
                        <select value={Estrela} onChange={e => setEstrela(e.target.value)}>
                            <option value={1}>1 estrela</option>
                            <option value={2}>2 estrelas</option>
                            <option value={3}>3 estrelas</option>
                            <option value={4}>4 estrelas</option>
                            <option value={5}>5 estrelas</option>
                        </select>

                    </div>
                    <div className='class-pais-provincia-Cidade'>

                        <input
                            placeholder="Provincia"
                            value={Provincia}
                            required
                            onChange={e => setProvincia(e.target.value)}
                        />
                        <input
                            placeholder="Pais"
                            value={pais}
                            required
                            onChange={e => setPais(e.target.value)}
                        />
                        <input
                            placeholder="Cidade"
                            value={cidade}
                            required
                            onChange={e => setCidade(e.target.value)}
                        />

                    </div>

                    <div className='class-cordenadas'>
                        <input
                            placeholder="Latitude"
                            value={latitude}
                            onChange={e => setLatitude(e.target.value)}
                        />
                        <input
                            placeholder="Longitude"
                            value={longitude}
                            onChange={e => setLongitude(e.target.value)}
                        />
                    </div>

                    <div className='class-checkbox'>
                        <p>pegar cordenadas atuais</p>
                        <button id="checkboxTrue" type='button' onClick={getLocation}>Get</button>

                    </div>
                    <div className='class-endereço-Descrição'>
                        <label htmlFor='descicao' >Descrição</label>
                        <textarea
                            id='descicao'
                            placeholder="Descrição"
                            value={linha}
                            maxLength={150}
                            required
                            type="text"
                            onChange={e => setLinha(e.target.value)}
                        />
                    </div>


                    <div className='button-class-change'>
                        <button type="submit">Alterar</button>
                        <button type='button' id='delete' onClick={DeleteAlojamento}>Apagar</button>
                    </div>
                </div>
            </form>
        </div>

    );
}




