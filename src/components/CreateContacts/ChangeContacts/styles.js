import styled from 'styled-components';



export const Conteainer = styled.div`
    display:flex;
    justify-content:center;
`;

export const Content = styled.div`
    width:100%;
   
    form{
        display:flex;
        padding:5px 5px 5px 5px;
        flex-direction:column;
        width:20rem;     

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