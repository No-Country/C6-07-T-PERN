import { combineReducers } from "redux";
import filterReducer from "./filter";
import mediaReducer from "./media";

const rootReducer = combineReducers({ mediaReducer, filterReducer });

export default rootReducer;