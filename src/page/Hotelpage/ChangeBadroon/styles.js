import styled from 'styled-components';



export const Conteainer = styled.div`
    width:100%;
    align-items:center;
    justify-content:center;
    display:flex;  
    margin-bottom:20px;    
`;

export const Content = styled.div`
    width:100%;
    align-items:center;
    display:flex;
    justify-content: center;
    form{
        display:flex;
        padding:5px 5px 5px 5px; 
        width:32rem;
        flex-direction:column;
        div{
            width:100%;
            display:flex;
            align-items:center;
            //flex-direction:column; 
            justify-content: space-between;
            input{
                padding:10px;
                margin-top:10px;
            }
        }

    }

`;
export const ButtomDiv = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    button:hover{
        opacity:.89;
        font-size:1rem;
        filter: brightness(80%);
        color:black;
    }

`;