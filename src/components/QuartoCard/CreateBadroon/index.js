import React, { useState } from 'react';

import { Conteainer, Content } from './styles';
import api from '../../../service/api';

export default function CreateBadroon(props) {
    const [Caract_bedroom, setCaract_bedroom] = useState('');
    const [type_bedroom, settype_bedroom] = useState('');
    const [preco, setpreco] = useState('');
    const hotel_owner = props.idhotel
    async function handleNewBadroom(e) {
        e.preventDefault();
        const data = {
            Caract_bedroom,
            type_bedroom,
            preco,
            hotel_owner,
        };
        try {
            await api.post('api.v1/quarto/register', data /*, {
                headers: {
                    Authorization: token,
                }
            }*/).then(response => {
                console.log(response.data);
            })

        } catch (err) {
            console.log('Erro, tente novamente', err)
        }
    }
    return (
        <Conteainer>
            <Content>
                <form onSubmit={handleNewBadroom}>
                    <div>
                        <select value={Caract_bedroom} onChange={e => setCaract_bedroom(e.target.value)}>
                            <option value='' disabled>Categoria do quarto</option>
                            <option value={'Standard'}>Standard</option>
                            <option value={'Master'}>Master</option>
                            <option value={'Delux'}>Delux</option>
                            <option value={'Outros'}>Outros</option>
                        </select>
                        <select value={type_bedroom} onChange={e => settype_bedroom(e.target.value)}>
                            <option value='' disabled>Tipo de quarto</option>
                            <option value={'Quarto Solteiro'}>Quarto Solteiro</option>
                            <option value={'Quarto Duplo'}>Quarto Duplo</option>
                            <option value={'Quarto Casal'}>Quarto Casal</option>
                            <option value={'Outros'}>Outros</option>
                        </select>
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