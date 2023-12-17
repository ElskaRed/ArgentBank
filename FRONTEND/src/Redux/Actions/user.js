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

export const editUser = createAction('EDIT_USER')

export const editUserSuccess = createAction(
  'EDIT_USER_SUCCESS',
  (user) => {
    return {
      payload: user,
    }
  }
)

export const editUserError = createAction(
  'EDIT_USER_ERROR',
  (error) => {
    return {
      payload: error,
    }
  }
)

export const loadUser = (token) => {
  return (dispatch) => {
    dispatch(getUserSuccess({isLoading: true}))
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: baseURL + 'profile',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          dispatch(getUserSuccess({user: response.data, isLoading: false, isLoggedIn: true}))
          resolve(response.data);
        })
        .catch((error) => {
          dispatch(getUserError({error: error.message, isLoading: false, isLoggedIn: false}))
          reject(error);
        })
    })

  }
}

export const putEditUser = (userName) => {
  const token = localStorage.getItem('token')
  return (dispatch) => {
    dispatch(editUser())
    axios({
      method: 'PUT',
      url: baseURL + 'profile',
      headers: { Authorization: `Bearer ${token}` },
      data: { userName },
    })
      .then((response) => {
        dispatch(editUserSuccess(response.data));
        dispatch(loadUser(token));
        console.log(userName)
      })
      .catch((error) => {
        dispatch(editUserError(error.message));
      })
  }
}