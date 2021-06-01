import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];

export const post_eventos = createAction('EVENTOSPOST');
export const get_eventos = createAction('EVENTOSGET');
export const get_eventos_hotel = createAction('EVENTOSHOTELGET');
export const detail_eventos = createAction('EVENTOSDETAILS');


export default createReducer(INITIAL_STATE, {
    [post_eventos.type]:(state, action) =>[...action.payload],
    [get_eventos.type]:(state, action) => [...action.payload],
    [get_eventos_hotel.type]:(state, action) =>[...action.payload],
    [detail_eventos.type]:(state, action) =>[action.payload],
});


