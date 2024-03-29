import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { quartos_hotel, promo_hotel } from '../../../store/fetchActions';

import { Conteainer, Content } from './styles';
import api from '../../../service/api';

export default function CreatePromo(props) {
    const [Percentagem, SetPercentagem] = useState();
    const [DataDeValidade, SetDataDeValidade] = useState();
    const [DataInit, SetDataInit] = useState();
    const [type_and_Category_Quarto, SetTypeCategoryQuarto] = useState("");
    const [Mensagem, setMensagem] = useState(null)

    const hotel_owner = props.idhotel
    const Quartos = useSelector((state) => (state.Quartos));
    const dispatch = useDispatch();
    const { id } = useParams();
    const hotel_owner_id = id
    useEffect(() => {
        dispatch(quartos_hotel(hotel_owner_id));
    }, [dispatch, hotel_owner_id]);


    const lengthquarto = Quartos.length;

    async function handleNewPromo(e) {
        e.preventDefault();
        const type_and_Category = type_and_Category_Quarto.split(',')
        const data = {
            percentagem: Percentagem,
            valid_data: DataDeValidade,
            init_data: DataInit,
            hotel: hotel_owner,
            tipo_quarto: type_and_Category[0],
            Caract: type_and_Category[1],
        };


        try {
            const resp = await api.post('api.v1/promoçao/', data, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            setMensagem(resp.status)
            SetPercentagem('');
            SetDataDeValidade('')
            SetDataInit('');
            SetTypeCategoryQuarto('');
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
    return (
        <Conteainer>
            <Content>
                <form onSubmit={handleNewPromo}>
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
                        <button className="button" type="submit">Criar</button>
                    </div>

                </form>
            </Content>

        </Conteainer>

    )

}
