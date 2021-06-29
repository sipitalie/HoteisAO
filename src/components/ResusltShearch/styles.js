
import styled from 'styled-components';



export const Container = styled.ul`
    display:flex;
    width: 100%;
    margin-top:0.8rem;
    margin-bottom:1rem;
    flex-direction:column;
    margin-left:1rem;
    a{
        text-decoration: none; 
        color:black  
    }
    li{
        display:flex;
        justify-content: space-between;
        align-items: start;
        color:#444;
        cursor:pointer;
        border-bottom: 1px solid #dadada;
        
        div{
            width: 100%;
            display:flex;
            flex-direction:column;
        }
        & + li{
            margin-top: 5px;
                        
    }
}
`;

/*export const FileInfo = styled.div`
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
    background-image:url(${props => props.src});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: 50% 50%;
    margin-right:5px;

`;
*/
