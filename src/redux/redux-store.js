import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import storiesReducer from "./stories-reducer";

const reducers = combineReducers({
  storiesPage: storiesReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
