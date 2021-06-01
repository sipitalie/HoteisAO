import React ,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {quartos_hotel} from '../../../store/fetchActions';

 import {Conteainer, Content} from './styles';
 import api from '../../../service/api';

export default function CreatePromo(props){
    const [Percentagem, SetPercentagem] = useState();
    const [DataDeValidade, SetDataDeValidade] = useState();
    const [DataInit,SetDataInit]=useState();
    const [type_and_Category_Quarto, SetTypeCategoryQuarto] = useState("");
   
    const hotel_owner=props.idhotel


    const Quartos= useSelector((state) =>(state.Quartos));
    const dispatch =useDispatch();
    const { id } =useParams();
    const hotel_owner_id= id
    useEffect( () => {
        dispatch(quartos_hotel(hotel_owner_id));
    },[dispatch,hotel_owner_id]); 

   
    const lengthquarto= Quartos.length ;
   // console.log(lengthquarto,Quartos);

    async function handleNewPromo(e){
         e.preventDefault();
         const type_and_Category=type_and_Category_Quarto.split(',')
         const data = {
             percentagem:Percentagem,
             valid_data:DataDeValidade,
             init_data: DataInit,
             hotel:hotel_owner,
             tipo_quarto:type_and_Category[0],
             Caract:type_and_Category[1],
         };
         SetPercentagem('');
         SetDataDeValidade('')
         SetDataInit('');
         SetTypeCategoryQuarto('');
    
         try{
             await api.post('api.v1/promoçao/', data /*, {
                 headers: {
                     Authorization: token,
                 }
             }*/).then(response=>{
                 console.log(response.data);
             })
 
         }catch(err){
             console.log('Erro, tente novamente', err.data)
         }
     }
     return(
         <Conteainer>
             <Content>
                 <form onSubmit={handleNewPromo}>
                    <div>
                    <select id="QuartosTIPE" value = {[type_and_Category_Quarto]} onChange ={e => SetTypeCategoryQuarto(e.target.value)}>
                        <option value='' disabled selected>Selecione o tipo e a Categoria dos Quartos</option>
                        {!!lengthquarto && Quartos.map(quarto=>(<option value={quarto.type_bedroom+','+quarto.Caract_bedroom}>{quarto.type_bedroom+'/'+quarto.Caract_bedroom}</option>))}
                        
                    </select>
                    
                    <input
                        placeholder="data de inicio"
                        value= {DataInit}
                        type="date"
                        onChange ={e =>  SetDataInit(e.target.value)}
                    />
                    <input
                        placeholder="valido ate"
                        value= {DataDeValidade}
                        type="date"
                        
                        onChange ={e => SetDataDeValidade(e.target.value)}
                    />
                    <input
                        placeholder="Percentagem"
                        value= {Percentagem}
                        onChange ={e => SetPercentagem(e.target.value)}
                    />
                    <button className="button" type = "submit">Criar</button>  
                    </div>
                                 
                 </form>
             </Content>
 
         </Conteainer>
         
     )
    
 }
 