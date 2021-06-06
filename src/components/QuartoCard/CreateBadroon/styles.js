import styled from 'styled-components';



export const Conteainer = styled.div`
`;

export const Content = styled.div`
    width:100%;
    form{
        display:flex;
        padding:5px 5px 5px 5px; 
        flex-direction:column; 
        div{
            display:flex;
            align-items:center;
            flex-direction:column; 
            justify-content:start;
            input{
               
                padding:10px;
                
                margin-top:10px;
            }
            button{
                width:40%;
                height:2.5rem;
                border:none;
                border-radius:5px;
                 margin-top:10px;
                color:white;
                background-color:#521751;
                transition:0.6s
            }
            button:hover{
                opacity: 0.7;
            }
        }

    }

`;