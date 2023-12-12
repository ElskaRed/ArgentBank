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

export const logoutUser = createAction('LOGOUT_USER');

export const loadToken = (email, password) => {
  return (dispatch) => {
    dispatch(getTokenSuccess({isGetting: true}))
    axios
      .post(baseURL + 'login', {
        email,
        password,
      })
      .then((response) => {
        dispatch(getTokenSuccess({token: response.data.body.token, tokenTrue: true, isGetting: false}))
        localStorage.setItem('token', response.data.body.token)
        const token = localStorage.getItem('token')
        dispatch(loadUser(token))
      })
      .catch((error) => {
        dispatch(getTokenError({error: error.message, isGetting: false, tokenTrue: false}))
      })
  }
}

