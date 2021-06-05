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
    console.log(idhotel, id)

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
            await api.put(`api.v1/evento/${id}/`, data, {
                headers: {
                    Authorization: `Token ${token}`,
                }
            })
            //history.push('/eventos');
            history.push(`/hotelpage/${idhotel}`);

        } catch (err) {
            console.log('Erro, tente novamente', err)


        }
    }
    function HandleDeleteEvent() {
        console.log('ola')
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
                        <button id="button-delete" onClick={HandleDeleteEvent}>Apagar</button>
                        <button className="button" type="submit">Atualizar</button>


                    </ButtomDiv>

                </form>
            </Content>
        </Container>

    )

};
