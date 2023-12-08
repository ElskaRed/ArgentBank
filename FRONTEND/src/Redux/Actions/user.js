import axios from 'axios'
import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from '../../utils/const';

const baseURL = 'http://localhost:3001/api/v1/user/'

const loadApiUser = () => {
  return {
    type: GET_USER,
  }
}

const loadApiUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  }
}

const loadApiUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    payload: error,
  }
}

export const getUser = (token) => {
  return async (dispatch) => {
    dispatch(loadApiUser());
    try {
      const response = await axios.post(baseURL + 'profile', {}, { headers: { Authorization: `Bearer ${token}` } });
      dispatch(loadApiUserSuccess(response.data.body));
    } catch (error) {
      dispatch(loadApiUserError(error.message));
    }
  };
};