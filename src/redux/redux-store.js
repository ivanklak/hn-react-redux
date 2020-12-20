import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import storiesReducer from "./stories-reducer";
import newsReducer from "./news-reducer";

const reducers = combineReducers({
  storiesPage: storiesReducer,
  newsPage: newsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
