import { combineReducers, createStore } from "redux";

import { boardReducer, wonReducer } from "../features/board/boardSlice.js";

const rootReducer = combineReducers({
  board: boardReducer,
  // won: wonReducer
});

export const store = createStore(rootReducer);
