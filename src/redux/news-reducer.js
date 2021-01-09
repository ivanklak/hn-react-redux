import { storiesAPI } from "../api/api";

const SET_NEWS = "SET_NEWS";
const ADD_COMMENT = "ADD_COMMENT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  news: [],
  isFetching: true
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
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

const setNews = item => ({ type: SET_NEWS, item });
const addComment = (piece, id) => ({ type: ADD_COMMENT, piece, id });
const setTougleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

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
    dispatch(setTougleIsFetching(true));
    await dispatch(reloadNews(id));
    dispatch(setNews(itemsPiece));
    itemsPiece = [];
    dispatch(setTougleIsFetching(false));
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

export const setChildrens = id => {
  return dispatch => {
    let cont = [];
    dispatch(addComment(cont, id));
  };
};

export default newsReducer;
