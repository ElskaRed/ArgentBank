import { createReducer } from '@reduxjs/toolkit';
import { getUserSuccess, getUserError } from '../Actions/user';

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
   
 });