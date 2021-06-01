import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];

export const create_quarto = createAction('QUARTOPOST');
export const get_quartos_hotel = createAction('QUARTOSHOTELGET');
export const detail_quarto = createAction('QUARTODETAILS');
//export const get_eventos = createAction('AVALIAÇÕESGET');


export default createReducer(INITIAL_STATE, {
    [create_quarto.type]:(state, action) =>[...action.payload],
    [get_quartos_hotel.type]:(state, action) => [...action.payload],
    [detail_quarto.type]:(state, action) =>[...action.payload]
});