import { storiesAPI } from "../api/api";

const SET_NEWS = "SET_NEWS";

const initialState = {
  news: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.item
      };
    default:
      return state;
  }
};

const setNews = item => ({ type: SET_NEWS, item });

export const requestNews = id => {
  return dispatch => {
    storiesAPI.getStory(id).then(response => {
      //debugger;
      dispatch(setNews(response.data));
    });
  };
};

export default newsReducer;
