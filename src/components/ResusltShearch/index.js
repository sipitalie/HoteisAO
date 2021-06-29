import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function ListResult(props) {

    const list = props.data
    console.log(typeof (list) !== 'String', list.length)

    return (
        <Container>
            {(typeof (list) !== 'String' && list.length > 0 && typeof (list) === 'object') ? list.map(result => (
                <li key={result.id}>
                    <div>
                        <Link to={`/hotelpage/${result.id}`}>
                            <p>{result.nome}</p>
                            <p>{`${result.Type_Alojamento}, ${result.cidade}`}</p>
                        </Link>
                    </div>
                </li>
            )) : <p>{list}</p>}
        </Container>
    )
};
