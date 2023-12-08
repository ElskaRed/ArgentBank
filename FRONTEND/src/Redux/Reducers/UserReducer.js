import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR } from '../../utils/const';

const initialStateToken = {
  isLoading: false,
  user: {},
  error: '',
}

const getUserReducer = (state = initialStateToken, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        isLoading: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: ''
      }
    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        user: {},
        error: action.payload
      }
    default:
      return state
  }
}

export default getUserReducer