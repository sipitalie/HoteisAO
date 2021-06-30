import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import { quartos_hotel, promo_hotel } from '../../store/fetchActions';

import { Conteainer, Content, ButtomDiv } from './styles';
import api from '../../../service/api';

export default function UpdateContactos(props) {
    const history = useHistory()
    const [phone, Setphone] = useState('');
    const [email, Setemail] = useState('');
    const [whatsApp, SetwhatsApp,] = useState('');
    const [LinkedIn, SetLinkedIn] = useState('');
    const [rec_in, Setrec_in] = useState('');
    const [rec_out, setrec_out] = useState('')
    const [Mensagem, setMensagem] = useState('')
    const { idhotel } = useParams();
    const hotel_owner_id = idhotel



    useEffect(() => {

        api.get(`api.v1/contactos/${idhotel}/`).then(res => {
            Setphone(res.data.phone)
            Setemail(res.data.email)
            SetwhatsApp(res.data.whatsApp)
            SetLinkedIn(res.data.LinkedIn)
            Setrec_in(res.data.rec_in)
            setrec_out(res.data.rec_out)
        }).catch(err => {
            console.log(err)
        })

    }, [idhotel]);

    async function handleUpdateContacts(e) {
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
            const resp = await api.put(`api.v1/contactos/${idhotel}/`, data, {
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
    function HandleDeleteContacts() {

        api.delete(`api.v1/contactos/${idhotel}/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        }).then(res => {
            history.push(`/hotelpage/${idhotel}`);

        }).catch(err => {
            setMensagem('Erro, tente novamente')
            setTimeout(
                function () {
                    setMensagem(null)
                },
                5000
            )

        })
    }

    return (
        <Conteainer>
            <Content>
                <form onSubmit={handleUpdateContacts}>
                    <div>
                        {Mensagem === 200 && <div id='sucess' style={{
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

                    </div>
                    <ButtomDiv>
                        <button
                            style={
                                {
                                    width: '40%',
                                    height: '40px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    color: 'white',
                                    backgroundColor: 'red',
                                    transition: '0.6s',
                                }
                            }
                            id="button"
                            type='button'
                            onClick={HandleDeleteContacts}
                        >Apagar</button>
                        <button
                            style={
                                {
                                    width: '40%',
                                    height: '40px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    color: 'white',
                                    backgroundColor: '#521751',
                                    transition: '0.6s',
                                }
                            }
                            id="button" type="submit">Atualizar</button>
                    </ButtomDiv>

                </form>
            </Content>

        </Conteainer>

    )

}
// <button className="button" type="submit">Atualizar</button>
