import { createReducer } from '@reduxjs/toolkit';
import { loadToken, getTokenSuccess, getTokenError } from '../Actions/token';

const initialStateToken = {
  isGetting: false,
  token: '',
  tokenTrue: '',
  error: '',
};

export const tokenReducer = createReducer(initialStateToken, (builder) => {
  return builder
    // .addCase(loadToken, (state) => {
    //   state.isGetting = true;
    //   state.token = '';
    //   state.tokenTrue = '';
    //   state.error = '';
    // })
    .addCase(getTokenSuccess, (state, action) => {
      state.isGetting = false;
      state.token = action.payload;
      state.tokenTrue = true;
      state.error = '';
    })
    .addCase(getTokenError, (state, action) => {
      state.isGetting = false;
      state.token = '';
      state.tokenTrue = false;
      state.error = action.payload;
    })
});