import { createReducer } from '@reduxjs/toolkit';
import { loadUser, getUserSuccess, getUserError } from '../Actions/user';

const initialStateUser = {
  isLoading: false,
  isLoggedIn: false,
  user: {},
  error: '',
};

export const getUserReducer = createReducer(initialStateUser, (builder) => {
  console.log(loadUser.type);
  console.log(getUserSuccess.type);
  console.log(getUserError.type);

  return builder
     .addCase(loadUser, (state) => {
       state.isLoading = true;
       state.isLoggedIn = false;
       state.user = {};
       state.error = '';
     })
     .addCase(getUserSuccess, (state, action) => {
       state.isLoading = false;
       state.isLoggedIn = true;
       state.user = action.payload;
       state.error = '';
     })
     .addCase(getUserError, (state, action) => {
       state.isLoading = false;
       state.isLoggedIn = false;
       state.user = {};
       state.error = action.payload;
     });
 });