import React, { useState } from 'react';
import { Container, Content } from './styles';
import { useDispatch } from 'react-redux';
import { eventos_hotel } from '../../../store/fetchActions';
import api from '../../../service/api';
import { useParams } from 'react-router-dom';

export default function CreateEvent(props) {
    // const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [data_do_evento, setData] = useState('');
    const token = localStorage.getItem('token');
    const owner = localStorage.getItem('id');
    const hotel_owner = props.idhotel
    const [Mensagem, setMensagem] = useState(null)

    const dispatch = useDispatch();
    const { id } = useParams();

    //função para criar un novo Evento
    async function handleNewEvent(e) {
        e.preventDefault();
        const data = {
            title,
            content,
            data_do_evento,
            hotel_owner,
            owner,
        };
        console.log(data);
        try {
            const resp = await api.post('api.v1/evento/', data, {
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
            setTitle('')
            setcontent('')
            setData('')
            dispatch(eventos_hotel(id));




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
        <Container>
            <Content>
                <form onSubmit={handleNewEvent}>
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

                    <button className="button" type="submit">Publicar</button>
                </form>
            </Content>
        </Container>

    )

};
/*{

    "title": "NOite123",
    "content": "ajrffbn \r\nfweuhfhihbv",
    "data_do_evento": "2020-06-20",
      "hotel_owner": 21



}*/