import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];

//export const follow=createAction('FOLLOW')
//export const get_a_seguir = createAction('ASEGUIR');
//export const onfollow = createAction('ONFOLLOW');
export const followers = createAction('FOLLOWERS');




export default createReducer(INITIAL_STATE, {
   // [get_a_seguir.type]:(state, action) => [...action.payload],
    //[follow.type]:(state, action) => [...action.payload],
    //[onfollow.type]:(state, action) => [...action.payload],
    [followers.type]:(state, action) => [state,action.payload],
});