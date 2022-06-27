import {combineReducers} from "redux";

import musicVideoReducer from "./musicVideoReducers";
import searchReducer from "./searchReducers";

export const rootReducer = combineReducers({
  musicVideoReducer,
  searchReducer,
});
