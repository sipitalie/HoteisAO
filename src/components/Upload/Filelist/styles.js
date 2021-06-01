
import styled from 'styled-components';



export const Container = styled.ul`
    margin-top:10px;
    li{
        display:flex;
        justify-content: space-between;
        align-items: center;
        color:#444;
        & + li{
            margin-top: 5px;
        }
    }
    
`;

export const FileInfo = styled.div`
    width: 88%;
    display:flex;
    align-items: center;
    div{
        display:flex;
        flex-direction:column;
        strong{
            font-size:10px;
        }
        span{
            font-size:10;
            color:#999;
            margin-top:5px;
            button{
                border:0;
                background:transparent;
                color: #e57878;
                margin-left:3px;
                cursor:pointer;
            }
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
 
