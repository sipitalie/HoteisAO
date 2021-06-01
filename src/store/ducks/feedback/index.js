import {createReducer, createAction} from '@reduxjs/toolkit';


const INITIAL_STATE=[];
    

export const sendfeedback = createAction('SENDFEEDBACK');

export default createReducer(INITIAL_STATE, {
    [sendfeedback.type]:(state, action) => [...state, action.payload]
});


