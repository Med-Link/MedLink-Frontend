import authReducers from "./auth.reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
      auth: authReducers
})

export default rootReducer;