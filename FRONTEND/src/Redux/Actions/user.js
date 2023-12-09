import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/user/';

export const getUser = createAction('GET_USER');

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

export const loadUser = (token) => {
  return (dispatch) => {
    dispatch(getUser())
    axios({
      method: 'POST',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        dispatch(getUserSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getUserError(error.message))
      })
  }
}
