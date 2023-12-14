import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/user/';

export const getUserSuccess = createAction(
  'GET_USER_SUCCESS',
  (user) => {
    return {
      payload: user,
    }
  }
);

export const getUserError = createAction(
  'GET_USER_ERROR',
  (error) => {
    return {
      payload: error,
    }
  }
);

export const logout = createAction('LOGOUT_USER');

export const loadUser = (token) => {
  return (dispatch) => {
    dispatch(getUserSuccess({isLoading: true}))
    axios({
      method: 'POST',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(getUserSuccess({user: response.data, isLoading: false, isLoggedIn: true}))
        console.log(token)
      })
      .catch((error) => {
        dispatch(getUserError({error: error.message, isLoading: false, isLoggedIn: false}))
      })
  }
}