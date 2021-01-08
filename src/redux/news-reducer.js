import { storiesAPI } from "../api/api";

const SET_NEWS = "SET_NEWS";
const ADD_COMMENT = "ADD_COMMENT";

const initialState = {
  news: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: [...action.item]
      };
    case ADD_COMMENT:
      return {
        ...state,
        news: state.news.map(item =>
          item.id === +action.id
            ? { ...item, childrens: [...action.piece] }
            : item
        )
      };
    default:
      return state;
  }
};

const setNews = item => ({ type: SET_NEWS, item });
const addComment = (piece, id) => ({ type: ADD_COMMENT, piece, id });

let itemsPiece = [];
export const reloadNews = id => {
  return async dispatch => {
    const response = await storiesAPI.getStory(id);
    itemsPiece.push(response.data);
    //debugger;
    if (response.data && response.data.kids) {
      for (let i = 0; i < response.data.kids.length; i++) {
        await dispatch(reloadNews(response.data.kids[i]));
      }
    }
  };
};

export const requestNews = id => {
  return async dispatch => {
    //debugger;
    await dispatch(reloadNews(id));
    dispatch(setNews(itemsPiece));
    itemsPiece = [];
  };
};

export const requestComments = (id, news) => {
  return async dispatch => {
    let kidsCont = [];
    const response = await storiesAPI.getStory(id);
    if (response.data && response.data.kids) {
      // debugger;
      for (let i = 0; i < response.data.kids.length; i++) {
        news.forEach(
          item => item.id === response.data.kids[i] && kidsCont.push(item)
        );
      }
      dispatch(addComment(kidsCont, id));
    }
  };
};
export default newsReducer;
