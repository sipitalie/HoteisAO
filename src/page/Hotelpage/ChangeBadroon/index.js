import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { quartos_hotel } from '../../../store/fetchActions';

import { Conteainer, Content, ButtomDiv } from './styles';
import api from '../../../service/api';

export default function ChangeBadroon(props) {
    const history = useHistory
    const [Caract_bedroom, setCaract_bedroom] = useState(null);
    const [type_bedroom, settype_bedroom] = useState(null);
    const [Mensagem, setMensagem] = useState(null)
    const [preco, setpreco] = useState('');
    const [Numero_do_quarto, setNumero_do_quarto] = useState('');
    const token = localStorage.getItem('token');
    const hotel_owner = props.idhotel


    const dispatch = useDispatch();
    const { id, idhotel } = useParams();


    useEffect(() => {
        api.get(`api.v1/quarto/${id}`, {
            headers: {
                Authorization: `Token ${token}`,
            }
        }).then(res => {
            setCaract_bedroom(res.data.Caract_bedroom);
            settype_bedroom(res.data.type_bedroom);
            setpreco(res.data.preco);
            setNumero_do_quarto(res.data.Numero_do_quarto)

        }).catch(err => {
            console.log(err)
        })
    }, [])

    async function handleUpdateBadroom(e) {
        e.preventDefault();
        const data = {
            Caract_bedroom,
            type_bedroom,
            preco: Number(preco),
            hotel_owner: Number(idhotel),
            Numero_do_quarto,
        };

        try {
            const res = await api.put(`api.v1/quarto/${id}/`, data, {
                headers: {
                    Authorization: `Token ${token}`,
                }
            })
            setMensagem(res.status)
            setTimeout(
                function () {
                    setMensagem(null)
                },
                5000
            )
            dispatch(quartos_hotel(id));


        } catch (err) {
            setMensagem('Erro, tente novamente')
            console.log('ola')
            setTimeout(
                function () {
                    setMensagem(null)
                },
                5000
            )
        }
    }
    function HandleDeleteBadroon() {

        api.delete(`api.v1/quarto/${id}/`, {
            headers: {
                Authorization: `Token ${token}`,
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

    //Numero_do_quarto=models.IntegerField()
    //Status
    return (
        <Conteainer>
            <Content>
                <form onSubmit={handleUpdateBadroom}>

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
                    <select value={Caract_bedroom} onChange={e => setCaract_bedroom(e.target.value)}>
                        <option value='' >Categoria do quarto</option>
                        <option value={'Standard'}>Standard</option>
                        <option value={'Master'}>Master</option>
                        <option value={'Delux'}>Delux</option>
                        <option value={'Outros'}>Outros</option>
                    </select>
                    <select value={type_bedroom} onChange={e => settype_bedroom(e.target.value)}>
                        <option value='' >Tipo de quarto</option>
                        <option value={'Quarto Solteiro'}>Quarto Solteiro</option>
                        <option value={'Quarto Duplo'}>Quarto Duplo</option>
                        <option value={'Quarto Casal'}>Quarto Casal</option>
                        <option value={'Outros'}>Outros</option>
                    </select>
                    <input
                        placeholder="Número do Quarto"
                        value={Numero_do_quarto}
                        onChange={e => setNumero_do_quarto(e.target.value)}
                    />
                    <input
                        placeholder="Preço"
                        value={preco}
                        onChange={e => setpreco(e.target.value)}
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
                            onClick={HandleDeleteBadroon}
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
};