import { createReducer } from '@reduxjs/toolkit';
import { getUserSuccess, getUserError, logout, editUser, editUserSuccess, editUserError } from '../Actions/user';


const initialStateUser = {
  isLoading: false,
  isLoggedIn: false,
  user: {},
  error: '',
};

export const getUserReducer = createReducer(initialStateUser, (builder) => {

  return builder
     .addCase(getUserSuccess, (state, action) => {
      return {...state, ...action.payload}
     })
     .addCase(getUserError, (state, action) => {
      return {...state, ...action.payload}
     })
     .addCase(logout, (state, action) => {
      return initialStateUser;
     })
     .addCase(editUser, (state) => {
      state.isLoading = true
      return
    })
    .addCase(editUserSuccess, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.error = ''
      return
    })
    .addCase(editUserError, (state, action) => {
      state.isLoading = false
      state.user = {}
      state.error = action.payload
      return
    })
   
 });