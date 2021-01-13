import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import sudokuReducer from "./reducers/sudokuReducer";

const rootReducer = combineReducers({
  sudokuReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
