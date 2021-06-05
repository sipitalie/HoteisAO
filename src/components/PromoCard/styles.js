
import styled from 'styled-components';



export const Container = styled.div`
    
    display: flex;  
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: #fff;
    padding: 10px 10px;
    box-shadow: 5px 0 3px rgba(0, 0, 0, 0.1),
     0 -3px 5px rgba(0, 0, 0, 0.1),
     0 3px 5px rgba(0, 0, 0, 0.1);

`;

export const PromInfo = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content:initial;
    
    strong{
        margin-right:10px;
    }
    button{
        background-color:transparent;
        border:none;
    }
    
`;



/*
impoer.Promo-card{
    display: flex;
    width: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: #fff;
    padding: 10px 10px;
    box-shadow: 1px 0 1px rgba(0, 0, 0, 0.1),
     0 -1px 1px rgba(0, 0, 0, 0.1),
     0 1px 1px rgba(0, 0, 0, 0.1);
}*/
