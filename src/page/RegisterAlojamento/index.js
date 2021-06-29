import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { alojamento_register } from './../../store/fetchActions';

import './index.css';

export default function RegisterAlojamento() {

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
    const [imgFile, SetimagFile] = useState();

    const owner = localStorage.getItem('id');

    const dispatch = useDispatch();

    function handlerRegisterAlojamento(e) {
        e.preventDefault();

        const data = new FormData();

        data.append('foto', imgFile)
        data.append('nome', nome)
        data.append('Type_Alojamento', Type_Alojamento)
        data.append('Estrela', Estrela)
        data.append('pais', pais)
        data.append('Provincia', Provincia)
        data.append('cidade', cidade)
        data.append('linha', linha)
        data.append('latitude', latitude)
        data.append('longitude', longitude)
        data.append('owner', owner)
        dispatch(alojamento_register(data));
        /*setNome('');
        setType('');
        setEstrela('');
        setPais('');
        setProvincia('');
        setLinha('');
        setCidade('');
        setLatitude('');
        setLongitude('');*/
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
        console.log('geolocation')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
            setGeolocation("Geolocation is not supported by this browser.")
        }
    }
    return (
        <div className='class-register'>
            <form onSubmit={handlerRegisterAlojamento}>
                <div className='class-register-alojamento'>
                    <div className='class-icon-register'>
                        <h1>Registe seu alojamento</h1>
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
                            <option value={'Resort'}>Resort</option>
                            <option value={'Lodge'}>Lodge</option>
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
                            required
                            onChange={e => setLongitude(e.target.value)}
                        />

                    </div>

                    <div className='class-checkbox'>
                        <p>pegar cordenadas atuais</p>
                        <button id="checkboxTrue" type="button" onClick={getLocation}>Get</button>

                    </div>
                    <div className='class-endereço'>
                        <textarea
                            placeholder="Descrição"
                            value={linha}
                            required
                            type="text"
                            maxLength={150}
                            onChange={e => setLinha(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Foto"
                            type="file"
                            id='addfotobotton'
                            required
                            onChange={e => SetimagFile(e.target.files[0])}
                        />
                    </div>


                    <div className='button-class'>
                        <button type="submit"> Cadastrar </button>
                    </div>
                </div>
            </form>
        </div>

    );
}




