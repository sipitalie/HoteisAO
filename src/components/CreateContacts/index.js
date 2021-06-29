import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { quartos_hotel, promo_hotel } from '../../store/fetchActions';

import { Conteainer, Content } from './styles';
import api from '../../service/api';

export default function CreateContactos(props) {
    const [phone, Setphone] = useState('');
    const [email, Setemail] = useState('');
    const [whatsApp, SetwhatsApp,] = useState('');
    const [LinkedIn, SetLinkedIn] = useState('');
    const [rec_in, Setrec_in] = useState('');
    const [rec_out, setrec_out] = useState('')
    const [Mensagem, setMensagem] = useState('')

    const hotel_owner = props.idhotel
    const Quartos = useSelector((state) => (state.Quartos));
    const dispatch = useDispatch();
    const { id } = useParams();
    const hotel_owner_id = id
    useEffect(() => {
        dispatch(quartos_hotel(hotel_owner_id));
    }, []);


    const lengthquarto = Quartos.length;

    async function handleNewContacts(e) {
        e.preventDefault();

        const data = {
            phone,
            email,
            whatsApp,
            LinkedIn,
            rec_in,
            rec_out,
            hotel: hotel_owner_id,

        };


        try {
            const resp = await api.post('api.v1/contactos/', data, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            setMensagem(resp.status)

            setTimeout(
                function () {
                    setMensagem(null)
                },
                5000
            )

        } catch (err) {
            setMensagem('Erro, tente novamente')
            setTimeout(
                function () {
                    setMensagem(null)
                },
                5000
            )
        }
    }
    return (
        <Conteainer>
            <Content>
                <form onSubmit={handleNewContacts}>
                    <div>
                        {Mensagem === 201 && <div id='sucess' style={{
                            width: "100%",
                            display: 'flex'
                        }}><p>Sucesso!</p></div>}
                        {Mensagem === 'Erro, tente novamente' && <div id='fail'
                            style={{
                                width: "100%",
                                display: 'flex',
                                marginTop: '0.2rem',
                                justifyContent: 'center',
                                color: 'white'
                            }}><p>{Mensagem}</p></div>}

                        <input
                            placeholder="Telemovel"
                            value={phone}
                            onChange={e => Setphone(e.target.value)}
                        />
                        <input
                            placeholder="whatsApp"
                            value={whatsApp}
                            onChange={e => SetwhatsApp(e.target.value)}
                        />

                        <input
                            placeholder="e-mail"
                            value={email}
                            type="email"
                            onChange={e => Setemail(e.target.value)}
                        />
                        <input
                            placeholder="LinkedIn"
                            value={LinkedIn}
                            onChange={e => SetLinkedIn(e.target.value)}
                        />

                        <input
                            placeholder="Entrada da recepção"
                            value={rec_in}
                            type='time'
                            onChange={e => Setrec_in(e.target.value)}
                        />
                        <input
                            placeholder="Saída da recepção"
                            value={rec_out}
                            type='time'
                            onChange={e => setrec_out(e.target.value)}
                        />
                        <button className="button" type="submit">Criar</button>
                    </div>

                </form>
            </Content>

        </Conteainer>

    )

}
