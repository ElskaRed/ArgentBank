import axios from 'axios'
import {
  GET_TOKEN,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
} from '../../utils/const';

const baseURL = 'http://localhost:3001/api/v1/user/'

const loadApiToken = () => {
  return {
    type: GET_TOKEN,
  }
}

const loadApiTokenSuccess = (token) => {
  return {
    type: GET_TOKEN_SUCCESS,
    payload: token,
  }
}

const loadApiTokenError = (error) => {
  return {
    type: GET_TOKEN_ERROR,
    payload: error,
  }
}

export const getToken = (email, password) => {
  return async (dispatch) => {
    dispatch(loadApiToken());
    try {
      const response = await axios.post(baseURL + 'login', { email, password });
      const token = response.data.body.token;
      dispatch(loadApiTokenSuccess(token));
      localStorage.setItem('token', token);
      console.log('token:',token)

    } catch (error) {
      dispatch(loadApiTokenError(error.message));
      throw error;
    }
  };
};
