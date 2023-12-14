import { createAction } from '@reduxjs/toolkit';
import { loadUser } from '../Actions/user';
import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/user/'

export const getTokenSuccess = createAction(
  'GET_TOKEN_SUCCESS',
  (token) => {
    return {
      payload: token,
    }
  }
);

export const getTokenError = createAction(
  'GET_TOKEN_ERROR',
  (error) => {
    return {
      payload: error,
    }
  }
);

export const loadToken = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(getTokenSuccess({ isGetting: true }));
    try {
      const response = await axios.post(baseURL + 'login', { email, password });
      const token = response.data.body.token;
      localStorage.setItem('token', token);
      dispatch(getTokenSuccess({ token: token, tokenTrue: true, isGetting: false }));

      await dispatch(loadUser(token));
      navigate('/user');
    } catch (error) {
      dispatch(getTokenError({ error: error.message, isGetting: false, tokenTrue: false }));
    }
  };
};


