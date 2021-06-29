import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { quartos_hotel, promo_hotel } from '../../../store/fetchActions';

import { Conteainer, Content, ButtomDiv } from './styles';
import api from '../../../service/api';

export default function ChangePromo(props) {
    const history = useHistory();

    const [Percentagem, SetPercentagem] = useState();
    const [DataDeValidade, SetDataDeValidade] = useState();
    const [DataInit, SetDataInit] = useState();
    const [type_and_Category_Quarto, SetTypeCategoryQuarto] = useState("");
    const [Mensagem, setMensagem] = useState(null)

    const hotel_owner = props.idhotel
    const Quartos = useSelector((state) => (state.Quartos));
    const dispatch = useDispatch();
    const { id, idhotel } = useParams();
    const hotel_owner_id = idhotel
    useEffect(() => {
        dispatch(quartos_hotel(hotel_owner_id));

        api.get(`api.v1/promoçao/${id}`).then(res => {

            SetTypeCategoryQuarto(res.data.tipo_quarto + ',' + res.data.Caract)
            SetPercentagem(res.data.percentagem)
            SetDataInit(res.data.init_data)
            SetDataDeValidade(res.data.valid_data)

        }).catch(err => {
            console.log(err)
        })
    }, [dispatch, hotel_owner_id]);


    const lengthquarto = Quartos.length;

    async function handleChangePromo(e) {
        e.preventDefault();
        const type_and_Category = type_and_Category_Quarto.split(',')
        const data = {
            percentagem: Percentagem,
            valid_data: DataDeValidade,
            init_data: DataInit,
            hotel: hotel_owner_id,
            tipo_quarto: type_and_Category[0],
            Caract: type_and_Category[1],
        };


        try {
            console.log(data)
            const resp = await api.put(`api.v1/promoçao/${id}/`, data, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            setMensagem(resp.status)
            dispatch(promo_hotel(hotel_owner_id));


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
    function HandleDeletePromo() {
        api.delete(`api.v1/promoçao/${id}/`).then(res => {
            history.push(`/hotelpage/${idhotel}`);

        }).catch(err => {
            console.log('Erro, tente novamente', err)

        })
    }
    return (
        <Conteainer>
            <Content>
                <form onSubmit={handleChangePromo}>
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
                        <select id="QuartosTIPE" value={[type_and_Category_Quarto]} onChange={e => SetTypeCategoryQuarto(e.target.value)}>
                            <option value='' disabled selected>Selecione o tipo e a Categoria dos Quartos</option>
                            {!!lengthquarto && Quartos.map(quarto => (<option value={quarto.type_bedroom + ',' + quarto.Caract_bedroom}>{quarto.type_bedroom + '/' + quarto.Caract_bedroom}</option>))}

                        </select>

                        <input
                            placeholder="data de inicio"
                            value={DataInit}
                            type="date"
                            onChange={e => SetDataInit(e.target.value)}
                        />
                        <input
                            placeholder="valido ate"
                            value={DataDeValidade}
                            type="date"

                            onChange={e => SetDataDeValidade(e.target.value)}
                        />
                        <input
                            placeholder="Percentagem"
                            value={Percentagem}
                            onChange={e => SetPercentagem(e.target.value)}
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
                                onClick={HandleDeletePromo}
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

                    </div>

                </form>
            </Content>

        </Conteainer>

    )

}
