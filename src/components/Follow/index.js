import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import api from '../../service/api';
import IsAdminHotel from '../../service/isAdmin.service';
import { Seguirhotel } from '../../store/fetchActions'

export default function Follow({ idhotel, owner }) {

    const { isAuthenticated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [follow, Setfollow] = useState(false)
    const [followers, Setfollowers] = useState(0);

    const checkIfAUserFollowsAHotel = async (User_id) => {
        let response = await api.get(`api.v1/follow/user/${User_id}/${idhotel}`)
        if (response.data.length === 0) {
            return Setfollow(false);
        } else {
            return Setfollow(true);
        }
    };
    const onfollow = async (User_id, hotel_id) => {
        let response = await api.delete(`api.v1/onfollow/${User_id}/${hotel_id}`)
        return response.status
    };

    const getFollowersFromAHotel = async () => {
        let response = await api.get(`api.v1/followers/${idhotel}`)
        Setfollowers(response.data.length)
    };

    useEffect(() => {
        isAuthenticated && checkIfAUserFollowsAHotel(localStorage.getItem('id'))
        getFollowersFromAHotel();
    }, []);

    const data = {
        "User_id": localStorage.getItem('id'),
        "hotel_id": idhotel
    }
    function Df_rv_follow() {
        if (follow === true) {
            console.log(Seguir_or_remover_follow)
            isAuthenticated && onfollow(data.User_id, data.hotel_id)
            Setfollowers(followers - 1)
            Setfollow(!follow)
        } else {
            console.log(Seguir_or_remover_follow)
            isAuthenticated && dispatch(Seguirhotel(data))
            Setfollow(!follow);
            Setfollowers(followers + 1)
        }
    }

    let Seguir_or_remover_follow = 'Remover'
    if (follow === null || follow === false) {
        Seguir_or_remover_follow = "Seguir";
    }
    return (
        <>
            <div className="class-follow-Followers">
                {
                    !IsAdminHotel(owner) && isAuthenticated && <button id="follow" onClick={isAuthenticated && Df_rv_follow}>
                        <div>{Seguir_or_remover_follow}</div>
                    </button>
                }

                <div className="followers">
                    <div>{followers}</div>
                </div>
            </div>
        </>
    );
}/* function percorreArray(){
        if (typeof hoteis_a_Seguir!=='undefined'){
            for(let obj of  hoteis_a_Seguir){
                a_seguir.push(obj.hotel_id) 
            }
        }else{
            console.log('undef')
        }
    };
    function verifica(a_seguir){
        percorreArray();
        if (a_seguir.indexOf(idhotel)===-1){
            return false ;
        }else if (a_seguir.indexOf(idhotel)>-1){
            return true;
            }
    }  */