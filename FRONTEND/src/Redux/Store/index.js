import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import UserReducer from "../Reducers/UserReducer";
import TokenReducer from "../Reducers/TokenReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  token: TokenReducer,
  user: UserReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store