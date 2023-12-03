import { LOAD_GET_USER, LOAD_GET_USER_SUCCESS, LOAD_GET_USER_ERROR } from '../../utils/const';

const initialStateToken = {
  isLoading: false,
  user: {},
  error: '',
}

const getUserReducer = (state = initialStateToken, action) => {
  switch (action.type) {
    case LOAD_GET_USER:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: ''
      }
    case LOAD_GET_USER_ERROR:
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