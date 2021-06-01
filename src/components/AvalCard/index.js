import React from 'react';
import {EvaluationInfo , Container} from './styles';

export default function AvalCard({avaliacao}){
    console.log(avaliacao)
    return(
        <Container>
                <EvaluationInfo>
                    <div>
                        <p>{avaliacao.nota}</p>
                        <strong>{avaliacao.User}</strong>
                    </div>    
                </EvaluationInfo>    
        </Container>
            
    );
}