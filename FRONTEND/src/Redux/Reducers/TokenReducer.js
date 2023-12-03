import { LOAD_TOKEN, LOAD_TOKEN_SUCCESS, LOAD_TOKEN_ERROR } from '../../utils/const';

const initialStateToken = {
  isLoading: false,
  token: '',
  error: '',
}

const tokenReducer = (state = initialStateToken, action) => {
  switch (action.type) {
    case LOAD_TOKEN:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
        error: ''
      }
    case LOAD_TOKEN_ERROR:
      return {
        ...state,
        isLoading: false,
        token: '',
        error: action.payload
      }
    default:
      return state
  }
}

export default tokenReducer