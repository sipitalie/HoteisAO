import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];

export const post_avaliacao = createAction('AVALIACAOPOST');
export const get_avaliaçoes_hotel = createAction('AVALIAÇÕESHOTELGET');
export const detail_avaliaçoes = createAction('EVENTOSDETAILS');
//export const get_eventos = createAction('AVALIAÇÕESGET');


export default createReducer(INITIAL_STATE, {
    [post_avaliacao.type]:(state, action) =>[...action.payload],
    [get_avaliaçoes_hotel.type]:(state, action) => [...action.payload],
    [detail_avaliaçoes.type]:(state, action) =>[...action.payload]
});


