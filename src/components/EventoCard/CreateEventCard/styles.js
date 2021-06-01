import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    align-items:center;
    display:flex;  
    margin-bottom:20px;    
`;

export const Content = styled.div`
    width: 100%;
    align-items:center;
    display:flex;
    form{
        display:flex;
        padding:5px 5px 5px 5px; 
        flex-direction:column;       
        div{
            display:flex;
            align-items:center;
            justify-content: space-between;
            input{
                width:48%;
                padding:10px;
                margin-bottom:10px;
                margin-top:10px;
            } 
        }
        textarea{
            width:100%;
        } 
        button{
            width:20%;
            height:30px;
            border:none;
            border-radius:5px;
            margin-top:10px;
            color:white;
            background-color:#521751;                
        }
    }
`;
export const Preview = styled.div`
    width: 36px;
    height:36px;
    border-radius:5px;
    background-image:url(${props=>props.src});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: 50% 50%;
    margin-right:5px;

`;
 
