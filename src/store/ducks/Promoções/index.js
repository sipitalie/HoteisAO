
import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];

/* promo==Promoções*/   

export const post_promo = createAction('PROMOPOST');
export const get_promo = createAction('PROMOGET');
export const detail_promo = createAction('PROMODETAILS');
export const get_promo_hotel = createAction('GETPROMOHOTEL');


export default createReducer(INITIAL_STATE, {
    [post_promo.type]:(state, action) => [...state, action.payload],
    [get_promo.type]:(state, action) =>[...action.payload],
    [get_promo_hotel.type]:(state, action) =>[...action.payload],
    [detail_promo.type]:(state, action) => [...state, action.payload]
});


