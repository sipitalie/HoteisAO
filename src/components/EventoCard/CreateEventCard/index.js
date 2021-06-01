import React,{useState}from 'react';
import {Container, Content} from './styles';
import api from '../../../service/api';
//import {Link, useHistory } from 'react';

export default function CreateEvent(props){
   // const history = useHistory();
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [data_do_evento, setData] = useState('');
    const token =localStorage.getItem('token');
    const owner =localStorage.getItem('id');
    const hotel_owner =props.idhotel

    //função para criar un novo Evento
    async function handleNewEvent(e){
        e.preventDefault();
        const data = {
            title,
            content,
            data_do_evento,
            hotel_owner,
            owner,
        };
        console.log(data);
        try{
            await api.post('api.v1/evento/', data, /*{
                headers: {
                    Authorization: token,
                }
            }*/)
            //history.push('/eventos');

        }catch(err){
            console.log('Erro, tente novamente', err)

        }
    }
    return(
        <Container>
            <Content>
            <form onSubmit={handleNewEvent}>
                    <div>
                    <input 
                        placeholder="Titulo do Evento"
                        value= {title}
                        onChange ={e => setTitle(e.target.value)}    
                    />
                    <input 
                        placeholder="Data do Evento"
                        value= {data_do_evento}
                        type="date"
                        onChange ={e => setData(e.target.value)}
                    />
                    </div>
                      
                    <textarea 
                        placeholder="Descrição"
                        value= {content}
                        onChange ={e => setcontent(e.target.value)}    
                    />
                   
                    <button className="button" type = "submit">Publicar</button>
                </form>
            </Content>
        </Container>

    )

};
/*{
  
    "title": "NOite123",
    "content": "ajrffbn \r\nfweuhfhihbv",
    "data_do_evento": "2020-06-20",
      "hotel_owner": 21



}*/