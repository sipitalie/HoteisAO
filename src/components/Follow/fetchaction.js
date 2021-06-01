
import api from '../../service/api';

export const Seguirhotel=async(data)=>{
        let response=await api.post("api.v1/follow/",data)       
    };
export const a_Seguirhotel=async(User_id)=>{
        let response=await api.get(`api.v1/follow/user/${User_id}`)       
    };
export const RemovSeguirhotel=async(data)=>{
        let response=await api.delete(`api.v1/onfollow/${data.User_id}/${data.hotel_id}`)       
    };


