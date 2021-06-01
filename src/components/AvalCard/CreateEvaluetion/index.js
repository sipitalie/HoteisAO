import React, {useState}from 'react';

import api from '../../../service/api';

/*{"nota": 4,
"User": 1,
"hotel":25}*/

export default function CreateEvaluation(){
    const [nota,SetNota]=useState('');
    const [User, SetUser]=useState('');
    const [hotel, SetHotel]=useState('');

    async function handleNewEvaluetion(e){
        e.preventDefault();
        const data ={
            nota,
            User,
            hotel,
        }
        try{
            await api.post("/api.v1/avaliacao/register",data)
        }catch{
            console.log("catch")
        }
    }
    return(
        <div>CreateEvaluation </div>
    
    )
};