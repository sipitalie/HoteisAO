import {createAction, createReducer} from '@reduxjs/toolkit';

const INITIAL_STATE={
    isAuthenticated: localStorage.getItem('token', 'email')
    //sisSeguidor: 
}
export const register = createAction('REGISTER')
export const forgotpassword = createAction('FORGOTPASSWORD')
export const login = createAction('LOGIN')
export const logout= createAction('LOGOUT')


export default createReducer(INITIAL_STATE,{
    [login.type]:(state, action) =>({...state, isAuthenticated:true}),
    [logout.type]:(state, action) =>({...state, isAuthenticated:false}),
})

