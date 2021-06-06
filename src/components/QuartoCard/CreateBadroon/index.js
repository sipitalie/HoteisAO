import React, { useState } from 'react';

import { Conteainer, Content } from './styles';
import api from '../../../service/api';

export default function CreateBadroon(props) {
    const [Caract_bedroom, setCaract_bedroom] = useState(null);
    const [type_bedroom, settype_bedroom] = useState(null);
    const [preco, setpreco] = useState('');
    const [Numero_do_quarto, setNumero_do_quarto] = useState('');
    const token = localStorage.getItem('token');
    const hotel_owner = props.idhotel
    async function handleNewBadroom(e) {
        e.preventDefault();
        const data = {
            Caract_bedroom,
            type_bedroom,
            preco: Number(preco),
            hotel_owner: Number(hotel_owner),
            Numero_do_quarto,
        };
        console.log(data, props)
        try {
            const response = await api.post('api.v1/quarto/register', data, {
                headers: {
                    Authorization: `Token ${token}`,
                }
            })
            console.log(response.data);


        } catch (err) {
            console.log('Erro, tente novamente', err)
        }
    }
    //Numero_do_quarto=models.IntegerField()
    //Status
    return (
        <Conteainer>
            <Content>
                <form onSubmit={handleNewBadroom}>
                    <div>
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

                        <button className="button" type="submit">Criar</button>
                    </div>


                </form>
            </Content>

        </Conteainer>

    )
};