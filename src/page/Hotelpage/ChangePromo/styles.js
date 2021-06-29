import styled from 'styled-components';



export const Conteainer = styled.div`
    display:flex;
    justify-content:center;
`;

export const Content = styled.div`
    width:100%;
    form{
        display:flex;
        width:32rem;
        padding:5px 5px 5px 5px;     

    }
    button{
        width:15%;
        height:30px;
        border:none;
        margin-top:10px;
        margin-bottom:10px;
        border-radius:5px;
        margin-top:10px;
        color:white;
        background-color:#521751;   
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