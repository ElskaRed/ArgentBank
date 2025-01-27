import { createReducer } from '@reduxjs/toolkit';
import { getTokenSuccess, getTokenError } from '../Actions/token';
import { logout } from '../Actions/user';

const initialStateToken = {
  isGetting: false,
  token: '',
  tokenTrue: '',
  error: '',
};

export const tokenReducer = createReducer(initialStateToken, (builder) => {
  return builder
    .addCase(getTokenSuccess, (state, action) => {
      return {...state, ...action.payload}
    })
    .addCase(getTokenError, (state, action) => {
      return {...state, ...action.payload}
    })
    .addCase(logout, (state, action) => {
      return initialStateToken
    })
});