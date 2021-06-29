import React, { useState, useEffect } from 'react';
import { Container, Content, ButtomDiv } from './styles';
import api from '../../../service/api';
import { Link, useHistory, useParams } from 'react-router-dom';

export default function ChangeEvent() {
    const history = useHistory();

    const { idhotel, id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [data_do_evento, setData] = useState('');
    const token = localStorage.getItem('token');
    const owner = localStorage.getItem('id');

    const hotel_owner = idhotel
    const [Mensagem, setMensagem] = useState(null)

    useEffect(() => {
        api.get(`api.v1/evento/${id}`).then(res => {
            setTitle(res.data.title);
            setcontent(res.data.content);
            setData(res.data.data_do_evento);

        }).catch(err => {
            console.log(err)
        })
    }, [])

    //função para  actualizar um  Evento
    async function handleChangeEvent(e) {
        e.preventDefault();
        const data = {
            title,
            content,
            data_do_evento,
            hotel_owner,
            owner,
        };
        try {
            const resp = await api.put(`api.v1/evento/${id}/`, data, {
                headers: {
                    Authorization: `Token ${token}`,
                }
            })
            setMensagem(resp.status)
            setTimeout(
                function () {
                    setMensagem(null)
                },
                5000
            )
            //history.push(`/hotelpage/${idhotel}`);

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
    function HandleDeleteEvent() {

        api.delete(`api.v1/evento/${id}/`).then(res => {
            history.push(`/hotelpage/${idhotel}`);

        }).catch(err => {
            console.log('Erro, tente novamente', err)

        })
    }

    return (
        <Container>
            <Content>
                <form onSubmit={handleChangeEvent}>
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
                    <div>
                        <input
                            placeholder="Titulo do Evento"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <input
                            placeholder="Data do Evento"
                            value={data_do_evento}
                            type="date"
                            onChange={e => setData(e.target.value)}
                        />
                    </div>

                    <textarea
                        placeholder="Descrição"
                        value={content}
                        onChange={e => setcontent(e.target.value)}
                    />
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
                            onClick={HandleDeleteEvent}
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
        </Container>

    )

};
