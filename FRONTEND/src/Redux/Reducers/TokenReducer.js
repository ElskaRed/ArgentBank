import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_ERROR, LOGOUT_USER } from '../../utils/const';

const initialStateToken = {
  isGETing: false,
  token: '',
  error: '',
}

const tokenReducer = (state = initialStateToken, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        isGETing: true
      }
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        isGETing: false,
        token: action.payGET,
        error: ''
      }
    case GET_TOKEN_ERROR:
      return {
        ...state,
        isGETing: false,
        token: '',
        error: action.payGET
      }
    case LOGOUT_USER: {
      return {
        ...state,
        token: '',
      };
    }
    default:
      return state
  }
}

export default tokenReducer